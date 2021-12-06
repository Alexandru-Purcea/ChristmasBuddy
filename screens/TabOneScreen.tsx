import * as React from "react";
import { StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
