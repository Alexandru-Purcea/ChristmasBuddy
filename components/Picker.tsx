import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";

type PickerElement = {
  image: ImageSourcePropType;
  value: string;
};
interface PickerProps {
  elements: PickerElement[];
  onChange: (value: string) => void;
}

export const Picker: React.FC<PickerProps> = ({ elements, onChange }) => {
  const [activeElement, setActiveElement] = useState(0);

  const onPress = (e: PickerElement, i: number) => {
    setActiveElement(i);
    onChange(e.value);
  };

  return (
    <View style={styles.container}>
      {elements.map((e, i) => {
        return (
          <TouchableOpacity
            style={{
              ...styles.elementWrapper,
              borderColor: activeElement === i ? "#9D1A32" : "transparent",
            }}
            onPress={() => onPress(e, i)}
            key={i}
          >
            <Image
              source={e.image}
              style={styles.element}
              resizeMode="contain"
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  elementWrapper: {
    borderWidth: 2,
    borderStyle: "dashed",
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  element: {
    height: 40,
    width: 40,
  },
});
