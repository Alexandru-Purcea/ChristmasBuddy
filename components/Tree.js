import React, { useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import TreeGrid from "../services/grid";
import ChristmasTree from "./graphic/christmasTree";
import TreeStar from "./graphic/treeStar";
import TreeBall from "./graphic/treeBall";

const GRID_SIZE = 46;
const GRID_WIDTH = 9;
const GRID_HEIGHT = 10;

export function Tree({ debug = false, numberOfStars = 0, numberOfBalls = 5 }) {
  const treeGrid = useRef(TreeGrid);

  const renderTree = () => {
    const arr = Array(GRID_HEIGHT)
      .fill()
      .map(() => Array(GRID_WIDTH).fill());

    for (let index = 0; index < numberOfStars; index++) {
      const nextCell = treeGrid.current.nextRandomFreeCell;
      nextCell.markOccupied(<TreeStar />);
    }

    for (let index = 0; index < numberOfBalls; index++) {
      const nextCell = treeGrid.current.nextRandomFreeCell;
      nextCell.markOccupied(<TreeBall />);
    }
    return (
      <View style={styles.gridContainer}>
        {arr.map((row, y) => (
          <View key={y} style={styles.gridRow}>
            {row.map((col, x) => (
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
  };
  return (
    <View style={styles.container}>
      <ChristmasTree style={styles.christmasTree} />
      {renderTree(TreeGrid)}
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
