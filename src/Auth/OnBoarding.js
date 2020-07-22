import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useValue, onScrollEvent, interpolateColor } from "react-native-redash";
import Animated from "react-native-reanimated";

import Slide, { SLIDE_HEIGHT } from "./../components/Slide";

const { width } = Dimensions.get("window");

const slides = [
  { label: "Relaxed", color: "#BFEAF5" },
  { label: "Playful", color: "#BEECC4" },
  { label: "Excentric", color: "#FFE4D9" },
  { label: "Funky", color: "#FFDDDD" }
];

const BORDER_RADIUS = 75;

function OnBoarding() {
  const x = useValue(0);
  const onScroll = onScrollEvent({ x });
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width), //[0, width, width * 2, width * 3],
    outputRange: slides.map(slide => slide.color) //["#BFEAF5", "#BEECC4", "#FFE4D9", "#FFDDDD"]
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...{ onScroll }}
        >
          {slides.map(({ label }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ label }} />
          ))}
          {/* <Slide label="Relaxed" />
          <Slide label="Playful" right />
          <Slide label="Excentric" />
          <Slide label="Funky" right /> */}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        ></Animated.View>
        <View style={styles.footerContainer}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS
  },
  footer: { flex: 1 },
  footerContainer: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS
  }
});

export default OnBoarding;
