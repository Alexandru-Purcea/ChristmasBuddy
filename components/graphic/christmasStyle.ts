import {StyleSheet} from "react-native";

export const getStyles = (rotation: number = 0) => StyleSheet.create({
  ornament: {
    transform: [
      { rotate: `${rotation}deg` }
    ]
  }
});