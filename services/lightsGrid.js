export const LIGHTS_GRID_SIZE = 26;
export const LIGHTS_GRID_WIDTH = 19;
export const LIGHTS_GRID_HEIGHT = 18;

// mapping used to have a map-like grid, inspired from Super Mario game :)
const B = "background";
const G = "full-grid";

class Cell {
  constructor({ x, y, isOccupied, isEnabled }) {
    this.isOccupied = isOccupied;
    this.isEnabled = isEnabled;
    this.x = x;
    this.y = y;
    this.element = null;
  }

  markOccupied(element, type) {
    this.isOccupied = true;
    element && (this.element = element);
  }

  clean() {
    this.isOccupied = false;
    this.element = null;
  }

  get anchorPoint() {
    // this will return the center of the grid cell
    return {
      x: LIGHTS_GRID_SIZE * (this.x + 1) - LIGHTS_GRID_SIZE / 2,
      y: LIGHTS_GRID_SIZE * (this.y + 1) - LIGHTS_GRID_SIZE / 2,
    };
  }
}

class BackgroundCell extends Cell {
  constructor(x, y) {
    super({ isEnabled: false, isOccupied: true, x: x, y: y });
  }
}

class GridCell extends Cell {
  constructor(x, y) {
    super({ isEnabled: true, isOccupied: false, x: x, y: y });
  }
}

// the game map
const myGrid = [
  [B, B, B, B, B, B, B, B, B, G, B, B, B, B, B, B, B, B, B],
  [B, B, B, B, B, B, B, B, G, G, B, B, B, B, B, B, B, B, B],
  [B, B, B, B, B, B, B, B, G, B, G, B, B, B, B, B, B, B, B],
  [B, B, B, B, B, B, B, G, B, G, B, G, B, B, B, B, B, B, B],
  [B, B, B, B, B, B, B, B, G, B, G, B, B, B, B, B, B, B, B],
  [B, B, B, B, B, B, B, G, B, G, B, G, B, B, B, B, B, B, B],
  [B, B, B, B, B, B, G, B, G, B, G, B, G, B, B, B, B, B, B],
  [B, B, B, B, B, G, B, G, B, G, B, G, B, B, B, B, B, B, B],
  [B, B, B, B, B, B, G, B, G, B, G, B, G, G, B, B, B, B, B],
  [B, B, B, B, B, G, B, G, B, G, B, G, B, B, B, B, B, B, B],
  [B, B, B, B, B, G, G, B, G, B, G, B, G, G, B, B, B, B, B],
  [B, B, B, B, G, G, B, G, B, G, B, G, B, G, B, B, B, B, B],
  [B, B, B, B, G, B, G, B, G, B, G, B, G, B, G, B, B, B, B],
  [B, B, B, B, B, G, B, G, B, G, B, G, B, G, B, B, B, B, B],
  [B, B, B, G, G, B, G, B, G, B, G, B, G, B, G, G, B, B, B],
  [B, G, B, G, B, G, B, G, B, G, B, G, B, G, B, B, G, B, B],
  [B, G, G, B, G, B, G, B, G, B, G, B, G, B, G, G, B, B, B],
  [B, G, B, G, B, G, B, G, B, G, B, G, B, G, B, B, G, B, B],
];

class Grid {
  constructor(grid) {
    this.templateGrid = grid;
    this.occupiedCells = [];
    this.init();
  }

  init() {
    const generatedGrid = [];
    for (let y = 0; y < LIGHTS_GRID_HEIGHT; y++) {
      for (let x = 0; x < LIGHTS_GRID_WIDTH; x++) {
        const pos = this.templateGrid[y][x];
        switch (pos) {
          case B:
            generatedGrid.push(new BackgroundCell(x, y));
            break;
          case G:
            generatedGrid.push(new GridCell(x, y));
            break;
          default:
            break;
        }
      }
    }
    this.grid = generatedGrid;
  }

  clean() {
    this.occupiedCells.forEach((cell) => cell.clean());
    this.occupiedCells.splice(0);
  }

  //
  gridCell(x, y) {
    return this.grid[y * LIGHTS_GRID_WIDTH + x];
  }
  isAllAlone(cell, bothAxes) {
    const { x, y } = cell;
    let isAloneHorizontally =
      (!this.gridCell(x - 1, y)?.isOccupied ||
        !this.gridCell(x - 1, y)?.isEnabled) &&
      (!this.gridCell(x + 1, y)?.isOccupied ||
        !this.gridCell(x + 1, y)?.isEnabled);

    let isAloneVertically =
      (!this.gridCell(x, y - 1)?.isOccupied ||
        !this.gridCell(x, y - 1)?.isEnabled) &&
      (!this.gridCell(x, y + 1)?.isOccupied ||
        !this.gridCell(x, y + 1)?.isEnabled);

    return bothAxes
      ? isAloneHorizontally && isAloneVertically
      : isAloneHorizontally;
  }

  get nextRandomFreeCell() {
    const availableGrid = this.grid.filter((cell) => cell.isEnabled);
    const unoccupiedGrid = this.grid.filter((cell) => !cell.isOccupied);
    const unoccupiedCell =
      unoccupiedGrid[Math.floor(Math.random() * unoccupiedGrid.length)];

    console.log(availableGrid.length / unoccupiedGrid.length);

    if (unoccupiedGrid.length === 0) {
      return null;
    } else if (
      availableGrid.length / unoccupiedGrid.length < 1.2 &&
      !this.isAllAlone(unoccupiedCell, true)
    ) {
      return this.nextRandomFreeCell;
    } else if (
      availableGrid.length / unoccupiedGrid.length < 1.3 &&
      !this.isAllAlone(unoccupiedCell, false)
    ) {
      return this.nextRandomFreeCell;
    } else {
      this.occupiedCells.push(unoccupiedCell);
      return unoccupiedCell;
    }
  }

  get randomOccupiedCell() {
    const occupiedCells = this.grid.filter(
      (cell) => cell.isOccupied && cell.isEnabled
    );

    if (!occupiedCells?.length) {
      return null;
    }

    const occupiedCell =
      occupiedCells[Math.floor(Math.random() * occupiedCells.length)];

    return occupiedCell;
  }
}

const LightsGrid = new Grid(myGrid);

export default LightsGrid;
