export const GRID_SIZE = 46;
export const GRID_WIDTH = 9;
export const GRID_HEIGHT = 10;

// mapping used to have a map-like grid, inspired from Super Mario game :)
const B = "background";
//not used yet :D
const H = "half-grid";
const G = "full-grid";

class Cell {
  constructor({ x, y, isOccupied }) {
    this.isOccupied = isOccupied;
    this.x = x;
    this.y = y;
    this.element = null;
  }

  markOccupied(element) {
    this.isOccupied = true;
    element && (this.element = element);
  }

  get anchorPoint() {
    // this will return the center of the grid cell
    return {
      x: GRID_SIZE * (this.x + 1) - GRID_SIZE / 2,
      y: GRID_SIZE * (this.y + 1) - GRID_SIZE / 2,
    };
  }
}

class BackgroundCell extends Cell {
  constructor(x, y) {
    super({ isOccupied: true, x: x, y: y });
  }
}

class GridCell extends Cell {
  constructor(x, y) {
    super({ isOccupied: false, x: x, y: y });
  }
}

// the game map
const myGrid = [
  [B, B, B, B, G, B, B, B, B],
  [B, B, B, G, G, G, B, B, B],
  [B, B, B, G, G, G, B, B, B],
  [B, B, G, G, G, G, G, B, B],
  [B, B, G, G, G, G, G, B, B],
  [B, B, G, G, G, G, G, B, B],
  [B, G, G, G, G, G, G, G, B],
  [B, B, G, G, G, G, G, B, B],
  [G, G, G, G, G, G, G, G, G],
  [G, G, G, G, G, G, G, G, G],
];

class Grid {
  constructor(grid) {
    this.templateGrid = grid;
    this.refresh();
  }

  refresh() {
    const generatedGrid = [];
    for (let y = 0; y < GRID_HEIGHT; y++) {
      for (let x = 0; x < GRID_WIDTH; x++) {
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

  gridCell(x, y) {
    return this.grid[y * GRID_WIDTH + x];
  }

  get nextRandomFreeCell() {
    const unoccupiedGrid = this.grid.filter((cell) => !cell.isOccupied);
    if (unoccupiedGrid.length === 0) {
      throw new Error(
        "Gata cu impodobitul bradului, nu mai este nici un loc liber"
      );
    }
    return unoccupiedGrid[Math.floor(Math.random() * unoccupiedGrid.length)];
  }
}

const TreeGrid = new Grid(myGrid);

// for (let index = 0; index < 90; index++) {
//   const nextCell = treeGrid.nextRandomFreeCell;
//   nextCell.markOccupied();
//   console.log(`Celula ${nextCell.x}/${nextCell.y} este acum ocupata`);
// }

export default TreeGrid;
