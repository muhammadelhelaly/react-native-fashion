import React, { useRef } from "react";
import { View, StyleSheet, Dimensions, StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useValue, onScrollEvent, interpolateColor } from "react-native-redash";
import Animated, { multiply } from "react-native-reanimated";

import Slide, { SLIDE_HEIGHT } from "./../components/Slide";
import SubSlide from "../components/SubSlide";
import colors from "../../config/colors";

const { width } = Dimensions.get("window");

const slides = [
  {
    title: "Relaxed",
    subtitle: "Find Your Outfits",
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here!",
    color: "#BFEAF5"
  },
  {
    title: "Playful",
    subtitle: "Hear it First, Wear it First",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas",
    color: "#BEECC4"
  },
  {
    title: "Excentric",
    subtitle: "Your Style, Your Way",
    description:
      " Create your individual & unique style and look amazing everyday",
    color: "#FFE4D9"
  },
  {
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    color: "#FFDDDD"
  }
];

const BORDER_RADIUS = 75;

function OnBoarding() {
  const scroll = useRef(null);
  const x = useValue(0);
  const onScroll = onScrollEvent({ x });
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width), //[0, width, width * 2, width * 3],
    outputRange: slides.map(slide => slide.color) //["#BFEAF5", "#BEECC4", "#FFE4D9", "#FFDDDD"]
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle={"dark-content"} />
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...{ onScroll }}
        >
          {slides.map(({ title }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ title }} />
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
        />
        <Animated.View
          style={[
            styles.footerContainer,
            { width: width * slides.length },
            { transform: [{ translateX: multiply(x, -1) }] }
          ]}
        >
          {slides.map(({ subtitle, description }, index) => (
            <SubSlide
              key={index}
              last={index === slides.length - 1}
              {...{ subtitle, description }}
              onPress={() => {
                if (scroll.current) {
                  scroll.current
                    .getNode()
                    .scrollTo({ x: width * (index + 1), animated: true });
                }
              }}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS
  },
  footer: { flex: 1 },
  footerContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.white,
    borderTopLeftRadius: BORDER_RADIUS
  }
});

export default OnBoarding;
