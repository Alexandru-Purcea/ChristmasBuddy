import React, { useRef } from "react";
import { Animated, View } from "react-native";
import Svg, {
  SvgProps,
  G,
  Path,
  Defs,
  ClipPath,
  Color,
} from "react-native-svg";

interface TreeStarProps extends SvgProps {
  color?: Color;
}

const TreeStar: React.FC<TreeStarProps> = ({
  color = "#F5CA4F",
  ...props
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const rotationAnim = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(rotationAnim, {
          toValue: 0.1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(rotationAnim, {
          toValue: -0.1,
          duration: 1500,
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
        transform: [{ rotate: rotationAnim }, { scale: 0.8 }]
      }}
    >
      <View style={{ height: 47 }} />
      <Svg
        style={style}
        width={60}
        height={57}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <G clipPath="url(#a)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m40.718 48.162 4.374 1.47-2.572-17.684 10.606-10.46-4.227-.124-9.818 9.481 3.1 15.07-2.669-1.038c.498.938.926 2.03 1.206 3.285Zm-8.6-2.889 8.6 2.89a13.026 13.026 0 0 0-1.206-3.286l-5.423-2.113-7.295-2.843-4.003 2.224a72.448 72.448 0 0 1-3.854 5.971l7.844-4.636 5.337 1.793Zm-18.684 2.07-1.156 4.709 6.658-3.936a72.45 72.45 0 0 0 3.855-5.971l-9.357 5.198Z"
            fill="#000"
            fillOpacity={0.75}
          />
          <Path
            d="m27.794 40.921-15.22 8.457 2.745-15.54-12.506-9.84 17.085-3.611 6.61-12.831c.359-.699 1.422-.783 1.798-.144L35.2 19.157l17.136.855L40.08 31.846l3.1 15.07-15.387-5.994"
            fill={color}
          />
          <Path
            d="m28.827 6.639-1.242.063-.036.002-1.244.062-.001-.016c.02-.81.16-2.975 1.346-2.943 1.186.03 1.199 2.005 1.179 2.814l-.002.018Zm1.383 4.063.01-3.646c.001-.272-.24-.476-.54-.462l-.115.007.002-.018c.03-1.176.001-3.392-1.9-3.44-1.903-.051-2.072 2.468-2.101 3.645l.001.016-.114.006c-.3.015-.552.246-.564.519l-.17 3.652 5.491-.279"
            fill="#E28045"
          />
          <Path
            d="M29.647 9.456c-.03.01-.07-.027-.122-.16-.255-.66-.905-1.538-2.136-2.146l.062-.114 1.205.054c.626.03 1.09.48 1.083 1.047l-.018 1.116s-.018.185-.074.203"
            fill="#fff"
            fillOpacity={0.34}
          />
          <Path
            d="M43.919 21.659 33.56 23.322c-1.084.175-2.078-.399-2.317-1.338l-1.236-7.423 3.66 5.747c.333.44.871.715 1.477.756l8.773.595M15.11 44.903l2.784-11.39a1.837 1.837 0 0 0-.615-1.872l-6.875-5.732 10.686 3.699c1.198.413 1.687 1.68 1.07 2.772l-7.05 12.523Z"
            fill="#fff"
            fillOpacity={0.5}
          />
        </G>
        <Defs>
          <ClipPath id="a">
            <Path
              fill="#fff"
              transform="translate(.16 .732)"
              d="M0 0h59.383v56.062H0z"
            />
          </ClipPath>
        </Defs>
      </Svg>
    </Animated.View>
  );
};

export default TreeStar;
