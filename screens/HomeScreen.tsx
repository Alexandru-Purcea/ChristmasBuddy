import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { Controls, Tree } from "../components";

import { RootStackScreenProps } from "../types";

const backgroundImage = require("../assets/images/blured-background.png");

export default function HomeScreen({
  navigation,
}: RootStackScreenProps<"Root">) {
  const [ballOrnamentsAmount, setBallOrnamentsAmount] = useState(0);
  const [starsAmount, setStarsAmount] = useState(0);
  const [lightsAmount, setLightsAmount] = useState(0);
  const [starsColor, setStarsColor] = useState("#F5CA4F");
  const [ballOrnamentsColor, setBallOrnamentsColor] = useState("#F5CA4F");

  const onChange = (field: string, value: string | number) => {
    switch (field) {
      case "ballOrnamentsAmount": {
        setBallOrnamentsAmount(value);
        break;
      }
      case "starsAmount": {
        setStarsAmount(value);
        break;
      }
      case "lightsAmount": {
        setStarsAmount(value);
        break;
      }
      case "starsColor": {
        setStarsColor(value);
        break;
      }
      case "ballOrnamentsColor": {
        setBallOrnamentsColor(value);
        break;
      }
    }
  };

  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Tree
            numberOfBalls={ballOrnamentsAmount}
            ballOrnamentsColor={ballOrnamentsColor}
            numberOfStars={starsAmount}
            starsColor={starsColor}
          />
        </View>
        <Controls
          onChange={onChange}
        />
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
    flexDirection: "row",
  },
});
