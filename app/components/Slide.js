import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

import theme from "./../config/theme";

const { width, height } = Dimensions.get("window");

export const SLIDE_HEIGHT = 0.61 * height;

function Slide({ title, right }) {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? "-90deg" : "90deg" }
  ];

  return (
    <View style={styles.container}>
      <View style={[styles.styleContainer, { transform }]}>
        <Text style={theme.text.hero}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width },
  styleContainer: {
    height: 100,
    justifyContent: "center"
  }
});

export default Slide;
