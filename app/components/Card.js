import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import { mixColor, mix, usePanGestureHandler } from "react-native-redash";
import Animated, {
  add,
  interpolate,
  Extrapolate
} from "react-native-reanimated";

import deviceType from "../utils/deviceType";
import { PanGestureHandler } from "react-native-gesture-handler";
import { useSpring } from "./CardAnimation";

const { width: wWidth, height: wHeight } = Dimensions.get("window");
const width = wWidth / 1.5;
const height = wHeight / 1.5 - 100;
const borderRadius = 20;

function Card({ position, onSwipe, image, step }) {
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
  const imageScale = interpolate(position, {
    inputRange: [0, step],
    outputRange: [1.2, 1],
    extrapolate: Extrapolate.CLAMP
  });
  const translateX = useSpring({
    value: translation.x,
    velocity: velocity.x,
    state,
    snapPoints: [-wWidth, 0, wWidth],
    onSnap: ([x]) => x !== 0 && onSwipe()
  });
  const translateY = add(
    translateYOffset
    // useSpring({
    //   value: translation.y,
    //   velocity: velocity.y,
    //   state,
    //   snapPoints: [0]
    // })
  );

  return (
    <View style={styles.container}>
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={{
            backgroundColor,
            width,
            height,
            borderRadius,
            transform: [{ translateY }, { translateX }, { scaleY }, { scaleX }],
            overflow: "hidden"
          }}
        >
          <Animated.Image
            source={image}
            style={{
              ...StyleSheet.absoluteFillObject,
              width: undefined,
              height: undefined,
              // top: 10,
              transform: [{ scale: imageScale }] //, { translateY: -10 }
            }}
          />
        </Animated.View>
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
