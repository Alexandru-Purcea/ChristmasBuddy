import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";

import { RootStackScreenProps } from "../types";

export default function HomeScreen({
  navigation,
}: RootStackScreenProps<"Root">) {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/images/merryChristmas")}
        style={{
          width: 400,
          height: 400,
          backgroundColor: "#eee",
        }}
        autoPlay
        loop
      />
      <Text style={styles.title}>:)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
