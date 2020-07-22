import React from "react";
import { StyleSheet } from "react-native";
import Animated, { interpolate, Extrapolate } from "react-native-reanimated";
import colors from "../../config/colors";

function Dot({ index, currentIndex }) {
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: Extrapolate.CLAMP
  });

  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.4, 1],
    extrapolate: Extrapolate.CLAMP
  });

  return (
    <Animated.View
      style={[styles.container, { opacity, transform: [{ scale }] }]}
    ></Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3
  }
});

export default Dot;
