import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { Controls } from "../components/Controls";

import { RootStackScreenProps } from "../types";

const backgroundImage = require("../assets/images/blured-background.png");

export default function HomeScreen({
  navigation,
}: RootStackScreenProps<"Root">) {
  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <View style={{ flex: 1 }} />
        <Controls />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
});