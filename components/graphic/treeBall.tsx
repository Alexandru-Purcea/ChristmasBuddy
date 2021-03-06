import React, { useRef } from "react";
import { Animated, View } from "react-native";
import Svg, {
  SvgProps,
  Path,
  Color,
} from "react-native-svg";

interface TreeBallProps extends SvgProps {
  color?: Color;
}

const TreeBall: React.FC<TreeBallProps> = ({
  color = "#F5CA4F",
  ...props
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const rotationAnim = useRef(new Animated.Value(-0.4)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(rotationAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(rotationAnim, {
          toValue: -0.4,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]),
      { iterations: 1000 }
    ).start();
  }, [fadeAnim, rotationAnim]);

  const style = {
    shadowColor: color,
    shadowRadius: 10,
    shadowOpacity: 0.4,
  };
  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        transform: [{ rotate: rotationAnim }, { scale: 0.9 }],
      }}
    >
      <View style={{ height: 48 }} />
      <Svg
        style={style}
        width={30}
        height={38}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M12.328 34.557a12.385 12.385 0 0 0 1.437.048 12.52 12.52 0 0 0 10.46-6.082 12.553 12.553 0 0 1-9.151 3.982 12.62 12.62 0 0 1-3.824-.597c.468.818.82 1.714 1.078 2.649ZM.948 22.363a12.506 12.506 0 0 0 5.01 9.74 59.884 59.884 0 0 0 2.063-1.764c-4.183-2.841-6.39-8.066-5.148-13.277a12.555 12.555 0 0 1 1.432-3.527 12.489 12.489 0 0 0-3.357 8.828Z"
          fill="#000"
          fillOpacity={0.65}
        />
        <Path
          d="M5.959 32.104a12.46 12.46 0 0 0 6.369 2.453c-.259-.935-.61-1.83-1.078-2.649a12.467 12.467 0 0 1-3.23-1.569c-.692.62-1.379 1.208-2.061 1.765Z"
          fill="#000"
          fillOpacity={0.65}
        />
        <Path
          d="M27.254 22.877c-1.604 6.731-8.364 10.888-15.097 9.284-6.733-1.606-10.89-8.366-9.284-15.099 1.605-6.732 8.365-10.89 15.097-9.283 6.733 1.605 10.89 8.364 9.284 15.098"
          fill={color}
        />
        <Path
          d="M9.662 27.123c-1.368 0-6.357-3.122-4.408-10.367.734-2.063 1.68-2.965 2.325-2.965.742 0 1.08 1.201.222 3.214-2.089 4.103-.002 7.14 1.961 9.446.376.442.273.672-.1.672ZM23.17 23.5c-.915 0-.594-2.541-1.458-4.719-1.013-2.555-3.274-3.643-1.613-4.777a2.416 2.416 0 0 1 1.377-.438c1.337 0 2.716 1.122 3.464 3.007 1.013 2.555.488 5.547-1.172 6.683-.245.167-.44.243-.599.243Z"
          fill="#fff"
          fillOpacity={0.45}
        />
        <Path
          d="M19.399 1.669c-.936-.223-2.029.86-2.387 2.365-.36 1.504.127 2.964 1.063 3.187.935.223 2.028-.86 2.387-2.364.359-1.505-.128-2.965-1.063-3.188Zm-1.547 6.488c-1.494-.356-2.273-2.265-1.777-4.347.496-2.082 2.054-3.433 3.547-3.078 1.492.356 2.272 2.267 1.776 4.348-.495 2.08-2.054 3.433-3.546 3.077Z"
          fill="#BFBDB7"
        />
        <Path
          d="m21.088 8.994.685-2.874a.584.584 0 0 0-.431-.703c-1.83-.807-3.604-1.241-5.315-1.266a.58.58 0 0 0-.701.432l-.686 2.873a13.498 13.498 0 0 0 6.448 1.538Z"
          fill="#BFBDB7"
        />
        <Path
          d="M20.649 7.959c-.025 0-.047-.043-.057-.17-.052-.64-.357-1.567-1.167-2.413l.073-.085.909.36c.472.184.73.696.6 1.188l-.255.964s-.056.156-.103.156Z"
          fill="#fff"
          fillOpacity={0.6}
        />
      </Svg>
    </Animated.View>
  );
};
export default TreeBall;
