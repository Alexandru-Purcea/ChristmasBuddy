import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import LottieView from "lottie-react-native";

export function Controls() {
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <Text style={styles.title}>Customise your</Text>

        <Text style={styles.subtitle}>Christmas Tree</Text>
      </View>

      <LottieView
        source={require("../assets/images/merryChristmas")}
        style={{
          width: "100%",
        }}
        autoPlay
        loop
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "35%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(255, 255, 255, 0.77)",
    height: "100%",
  },
  group: {
    width: "100%",
  },
  title: {
    marginTop: 25,
    color: "black",
    fontFamily: "rochester-regular",
    fontSize: 36,
    width: "100%",
    textAlign: "center",
  },
  subtitle: {
    color: "black",
    fontFamily: "rochester-regular",
    fontSize: 48,
    width: "100%",
    textAlign: "center",
  },
});
