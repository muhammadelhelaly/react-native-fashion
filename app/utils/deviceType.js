import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const aspectRatio = height / width;

export default {
  isPhone: aspectRatio > 1.6
};
