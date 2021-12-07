import React, { useCallback, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import TreeGrid, { GRID_HEIGHT, GRID_SIZE, GRID_WIDTH } from "../services/grid";
import ChristmasTree from "./graphic/christmasTree";
import TreeStar from "./graphic/treeStar";
import TreeBall from "./graphic/treeBall";

const ballColorMapper = [
  'rgba(157, 26, 50, 1)',
  'rgba(60, 142, 107, 1)',
  'rgba(207, 98, 47, 1)',
  'rgba(245, 202, 79, 1)',
  'rgba(191, 189, 183, 1)',
  'rgba(12, 12, 12, 1)',
];

const starColorMapper = [
  '#F5CA4F',
  '#E28045',
  '#ecabf7'
];

export function Tree({ debug = false, numberOfStars = 10, numberOfBalls = 10 }) {
  const treeGrid = useRef(TreeGrid);

  const renderTree = useCallback(() => {
    // clean before rerender
    treeGrid.current.clean()
    const arr = Array(GRID_HEIGHT)
      .fill()
      .map(() => Array(GRID_WIDTH).fill());

    for (let index = 0; index < numberOfStars; index++) {
      const nextCell = treeGrid.current.nextRandomFreeCell;
      const rotation = Math.floor(Math.random() * 30 - 60);
      const starColor = Math.floor(Math.random() * starColorMapper.length);
      nextCell.markOccupied(<TreeStar rotation={rotation} color={starColorMapper[starColor]}/>);
    }

    for (let index = 0; index < numberOfBalls; index++) {
      const nextCell = treeGrid.current.nextRandomFreeCell;
      const rotation = Math.floor(Math.random() * 30-30);
      const ballColor = Math.floor(Math.random() * ballColorMapper.length);
      nextCell.markOccupied(<TreeBall rotation={rotation} color={ballColorMapper[ballColor]} />);
    }
    return (
      <View style={styles.gridContainer}>
        {arr.map((row, y) => (
          <View key={y} style={styles.gridRow}>
            {row.map((_col, x) => (
              <View
                key={x}
                style={[styles.gridCell, debug && styles.showDebugGrid]}
              >
                {debug && (
                  <>
                    <Text>
                      {x}/{y}
                    </Text>
                    <Text>
                      {treeGrid.current.gridCell(x, y).isOccupied ? "DA" : "NU"}
                    </Text>
                  </>
                )}
                {treeGrid.current.gridCell(x, y).element}
              </View>
            ))}
          </View>
        ))}
      </View>
    );
  }, [treeGrid]);

  return (
    <View style={styles.container}>
      <ChristmasTree style={styles.christmasTree} />
      {renderTree()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  christmasTree: {
    bottom: 40,
    position: "absolute",
  },
  gridContainer: {
    position: "absolute",
    bottom: 160,
    width: GRID_WIDTH * GRID_SIZE,
    height: GRID_HEIGHT * GRID_SIZE,
  },
  gridRow: {
    width: GRID_WIDTH * GRID_SIZE,
    height: GRID_SIZE,
    flexDirection: "row",
  },
  gridCell: {
    width: GRID_SIZE,
    height: GRID_SIZE,
  },
  showDebugGrid: {
    borderWidth: 1,
    borderColor: "black",
  },
});
