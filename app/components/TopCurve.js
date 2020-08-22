import React from "react";
import { StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import theme from "../config/theme";
import { color } from "react-native-reanimated";
import colors from "../config/colors";

function TopCurve({ footerHight }) {
  const size = theme.borderRadius;
  return (
    <Svg
      width={size}
      height={size}
      style={{
        position: "absolute",
        bottom: footerHight,
        right: 0,
        // backgroundColor: "rgba(100, 200, 300, 0.5)",
      }}
      viewBox="0 0 1 1"
    >
      <Path d="M 0 1 A 0 0, 0, 0, 0, 1 0 L 1 1" fill={colors.darkBlue} />
    </Svg>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default TopCurve;
