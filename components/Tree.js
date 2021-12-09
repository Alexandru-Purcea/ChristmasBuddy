import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import TreeGrid, { GRID_HEIGHT, GRID_SIZE, GRID_WIDTH } from "../services/grid";
import ChristmasTree from "./graphic/christmasTree";
import ChristmasTreeStar from "./graphic/christmasTreeStar";
import TreeStar from "./graphic/treeStar";
import TreeBall from "./graphic/treeBall";
import { Audio } from "expo-av";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export function Tree({
  debug = false,
  numberOfStars,
  numberOfBalls,
  starsColor,
  ballOrnamentsColor,
}) {
  const treeGrid = useRef(TreeGrid);
  const [activeChristmasTreeStar, setActiveChristmasTreeStar] = useState(false);
  const [sound, setSound] = React.useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio/christmasSong.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  handleChristmasTreeStarTap = async () => {
    console.log("TAP");
    if (!activeChristmasTreeStar) {
      playSound();
      setActiveChristmasTreeStar(true);
      return;
    }

    await sound.pauseAsync();
    setActiveChristmasTreeStar(false);
  };

  const renderTree = () => {
    const prevNumberOfStars = usePrevious(numberOfStars);
    const prevNumberOfBalls = usePrevious(numberOfBalls);

    const arr = Array(GRID_HEIGHT)
      .fill()
      .map(() => Array(GRID_WIDTH).fill());

    if (prevNumberOfStars < numberOfStars) {
      const nextCell = treeGrid.current.nextRandomFreeCell;
      if (nextCell) {
        const rotation = Math.floor(Math.random() * 30 - 15);
        nextCell.markOccupied(
          <TreeStar rotation={rotation} color={starsColor} />,
          "star"
        );
      }
    }

    if (prevNumberOfStars > numberOfStars) {
      const occupiedCellWithType = treeGrid.current.occupiedCellWithType(
        "star"
      );
      if (!occupiedCellWithType) {
        return;
      }

      occupiedCellWithType.clean();
    }

    if (prevNumberOfBalls < numberOfBalls) {
      const nextCell = treeGrid.current.nextRandomFreeCell;
      if (nextCell) {
        const rotation = Math.floor(Math.random() * 30 - 20);
        nextCell.markOccupied(
          <TreeBall rotation={rotation} color={ballOrnamentsColor} />,
          "ballDecoration"
        );
      }
    }

    if (prevNumberOfBalls > numberOfBalls) {
      const occupiedCellWithType = treeGrid.current.occupiedCellWithType(
        "ballDecoration"
      );
      if (!occupiedCellWithType) {
        return;
      }

      occupiedCellWithType.clean();
    }

    return (
      <View style={styles.gridContainer}>
        {arr.map((row, y) => (
          <View
            key={y}
            style={{
              ...styles.gridRow,
              marginLeft: y % 2 === 1 ? GRID_SIZE / 2 : 0,
            }}
          >
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
  };

  return (
    <View style={styles.container}>
      <ChristmasTree style={styles.christmasTree} />
      <TouchableWithoutFeedback
        style={styles.christmasTreeStar}
        onPress={handleChristmasTreeStarTap}
      >
        <ChristmasTreeStar
          style={{
            ...styles.christmasTreeStar,
            shadowOpacity: activeChristmasTreeStar ? 1 : 0,
          }}
          isActive={activeChristmasTreeStar}
        />
      </TouchableWithoutFeedback>
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
  christmasTreeStar: {
    zIndex: 2,
    bottom: 640,
    position: "absolute",
    shadowColor: "#F5CA4F",
    shadowRadius: 10,
  },
  gridContainer: {
    zIndex: 1,
    position: "absolute",
    bottom: 220,
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
