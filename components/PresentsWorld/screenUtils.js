import { Dimensions } from "react-native";

export const getScreenDetails = () => {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  return {
    screenHeight,
    screenWidth,
  };
};
