import React, { useState, useRef } from "react";
import { StyleSheet, View, ImageBackground, Animated } from "react-native";
import LottieView from "lottie-react-native";
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
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const displaySanta = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const hideSanta = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

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
        setLightsAmount(value);
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
          <Animated.View style={{ ...styles.santa, opacity: fadeAnim }}>
            <LottieView
              source={require("../assets/images/merryChristmas")}
              style={styles.santa}
              autoPlay
              loop={true}
            />
          </Animated.View>
          <Tree
            numberOfBalls={ballOrnamentsAmount}
            displaySanta={displaySanta}
            hideSanta={hideSanta}
            ballOrnamentsColor={ballOrnamentsColor}
            numberOfStars={starsAmount}
            starsColor={starsColor}
            numberOfLights={lightsAmount}
          />
        </View>
        <Controls onChange={onChange} />
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
  santa: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 200,
    height: 200,
    shadowColor: "#ffffe6",
    shadowRadius: 5,
    shadowOpacity: 0.3,
  },
});
