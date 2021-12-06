import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import Slider from "react-native-slider";
import { Picker } from "./Picker";

interface ControlsProps {
  onChange: (field: string, value: string | number) => void;
}

export const Controls: React.FC<ControlsProps> = ({ onChange }) => {
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <Text style={styles.title}>Customise your</Text>

        <Text style={styles.subtitle}>Christmas Tree</Text>
      </View>

      <View style={styles.controlsContainer}>
        <View style={styles.controlsGroup}>
          <Text style={styles.sliderLabel}>Stars</Text>
          <Slider
            minimumTrackTintColor="#9D1A32"
            maximumTrackTintColor="#FFFFFF"
            thumbImage={require("../assets/images/star.png")}
            thumbStyle={styles.sliderThumb}
            trackStyle={styles.sliderTrack}
            onValueChange={(value: number) =>
              onChange("starsAmount", Math.round(value))
            }
            minimumValue={0}
            maximumValue={100}
          />
        </View>
        <View style={styles.controlsGroup}>
          <Text style={styles.sliderLabel}>Stars color</Text>
          <Picker
            elements={[
              { image: require("../assets/images/star.png"), value: "#F5CA4F" },
              { image: require("../assets/images/star.png"), value: "#CF622F" },
              { image: require("../assets/images/star.png"), value: "#9D1A32" },
              { image: require("../assets/images/star.png"), value: "#BFBDB7" },
              { image: require("../assets/images/star.png"), value: "#0C0C0C" },
            ]}
            onChange={(value) => onChange("starsColor", value)}
          />
        </View>
        <View style={styles.controlsGroup}>
          <Text style={styles.sliderLabel}>Ball ornaments</Text>
          <Slider
            minimumTrackTintColor="#9D1A32"
            maximumTrackTintColor="#FFFFFF"
            thumbImage={require("../assets/images/tree-ball.png")}
            thumbStyle={styles.sliderThumb}
            trackStyle={styles.sliderTrack}
            onValueChange={(value: number) =>
              onChange("ballOrnamentsAmount", Math.round(value))
            }
            minimumValue={0}
            maximumValue={100}
          />
        </View>
        <View style={styles.controlsGroup}>
          <Text style={styles.sliderLabel}>Ball ornaments color</Text>
          <Picker
            elements={[
              {
                image: require("../assets/images/tree-ball.png"),
                value: "#F5CA4F",
              },
              {
                image: require("../assets/images/tree-ball.png"),
                value: "#CF622F",
              },
              {
                image: require("../assets/images/tree-ball.png"),
                value: "#9D1A32",
              },
              {
                image: require("../assets/images/tree-ball.png"),
                value: "#BFBDB7",
              },
              {
                image: require("../assets/images/tree-ball.png"),
                value: "#0C0C0C",
              },
            ]}
            onChange={(value) => onChange("ballOrnamentsColor", value)}
          />
        </View>
        <View style={styles.controlsGroup}>
          <Text style={styles.sliderLabel}>Lights</Text>
          <Slider
            minimumTrackTintColor="#9D1A32"
            maximumTrackTintColor="#FFFFFF"
            thumbImage={require("../assets/images/star.png")}
            thumbStyle={styles.sliderThumb}
            trackStyle={styles.sliderTrack}
            onValueChange={(value: number) =>
              onChange("lightsAmount", Math.round(value))
            }
            minimumValue={0}
            maximumValue={100}
          />
        </View>
      </View>
    </View>
  );
};

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
  controlsContainer: {
    width: "100%",
    flex: 1,
    paddingHorizontal: 40,
  },
  controlsGroup: {
    paddingTop: 16,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#9D1A32",
  },
  sliderTrack: {
    width: "100%",
    height: 18,
    borderRadius: 9,
  },
  sliderThumb: {
    width: "auto",
    height: 37,
    backgroundColor: "transparent",
  },
  sliderLabel: {
    paddingLeft: 5,
    lineHeight: 43,
    color: "black",
    fontFamily: "rochester-regular",
    fontSize: 33,
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
