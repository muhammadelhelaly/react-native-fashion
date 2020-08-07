import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import {
  mixColor,
  mix,
  usePanGestureHandler,
  withSpring
} from "react-native-redash";
import Animated, { add } from "react-native-reanimated";

import deviceType from "../utils/deviceType";
import { PanGestureHandler } from "react-native-gesture-handler";

const { width: wWidth, height: wHeight } = Dimensions.get("window");
const width = wWidth / 1.5;
const height = wHeight / 1.5 - 100;
const borderRadius = 20;

function Card({ position }) {
  const {
    gestureHandler,
    translation,
    velocity,
    state
  } = usePanGestureHandler();
  const backgroundColor = mixColor(position, "#C9E9E7", "#74BCB8");
  const translateYOffset = mix(position, 0, -50);
  const scaleY = mix(position, 1, deviceType.isPhone ? 0.85 : 0.9);
  const scaleX = mix(position, 1, 0.7);
  const translateX = withSpring({
    value: translation.x,
    velocity: velocity.x,
    state,
    snapPoints: [-width, 0, width]
  });
  const translateY = add(translateYOffset);

  return (
    <View style={styles.container}>
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={{
            backgroundColor,
            width,
            height,
            borderRadius,
            transform: [{ translateY }, { translateX }, { scaleY }, { scaleX }]
          }}
        />
      </PanGestureHandler>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Card;
