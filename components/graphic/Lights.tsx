import React, { useRef } from "react";
import { Animated, View } from "react-native";
import Svg, {
  Path,
} from "react-native-svg";


const Light = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.3,
          duration: 300,
          useNativeDriver: true,
        }),
      ]),
      { iterations: 1000 }
    ).start();
  }, [fadeAnim]);

  const style = {
    shadowColor: '#ffffb3',
    shadowRadius: 10,
    shadowOpacity: 1,
};

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        transform: [{ scale: 1 }],
      }}
    >
      <Svg
        style={style}
        width={60}
        height={57}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M12.1112 7.78974L9.81026 0.329933L7.50936 7.78974L0.0495605 10.0906L7.50936 12.3915L9.81026 19.8513L12.1112 12.3915L19.5725 10.0906L12.1112 7.78974Z"
          fill="#ffffb3"
        />
      </Svg>
    </Animated.View>
  );
};

export default Light;
