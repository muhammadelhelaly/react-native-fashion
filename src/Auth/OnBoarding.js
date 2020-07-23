import React, { useRef } from "react";
import { View, StyleSheet, Dimensions, StatusBar, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  useValue,
  onScrollEvent,
  interpolateColor,
  useScrollHandler
} from "react-native-redash";
import Animated, {
  multiply,
  divide,
  interpolate,
  Extrapolate
} from "react-native-reanimated";

import Slide, { SLIDE_HEIGHT, BORDER_RADIUS } from "./../components/Slide";
import SubSlide from "../components/SubSlide";
import colors from "../../config/colors";
import Dot from "../components/Dot";

const { width } = Dimensions.get("window");

const slides = [
  {
    title: "Relaxed",
    subtitle: "Find Your Outfits",
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here!",
    color: "#BFEAF5",
    image: {
      src: require("./../../assets/1.png"),
      height: 1000,
      width: 750
    }
  },
  {
    title: "Playful",
    subtitle: "Hear it First, Wear it First",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas",
    color: "#BEECC4",
    image: {
      src: require("./../../assets/2.png"),
      height: 1000,
      width: 710
    }
  },
  {
    title: "Excentric",
    subtitle: "Your Style, Your Way",
    description:
      " Create your individual & unique style and look amazing everyday",
    color: "#FFE4D9",
    image: {
      src: require("./../../assets/3.png"),
      height: 1000,
      width: 750
    }
  },
  {
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    color: "#FFDDDD",
    image: {
      src: require("./../../assets/4.png"),
      height: 1000,
      width: 750
    }
  }
];

function OnBoarding() {
  const scroll = useRef(null);
  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width), //[0, width, width * 2, width * 3],
    outputRange: slides.map(slide => slide.color) //["#BFEAF5", "#BEECC4", "#FFE4D9", "#FFDDDD"]
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle={"dark-content"} />
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        {slides.map(({ image }, index) => {
          const opacity = interpolate(x, {
            inputRange: [
              (index - 0.5) * width,
              index * width,
              (index + 0.5) * width
            ],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP
          });
          return (
            <Animated.View style={[styles.underlay, { opacity }]}>
              <Image
                source={image.src}
                style={[
                  styles.image,
                  {
                    width: width - BORDER_RADIUS,
                    height:
                      ((width - BORDER_RADIUS) * image.height) / image.width
                  }
                ]}
              />
            </Animated.View>
          );
        })}
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}
        >
          {slides.map(({ title, image }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ title, image }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <View style={styles.footerContent}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={divide(x, width)} {...{ index }} />
            ))}
          </View>
          <Animated.View
            style={{
              flex: 1,
              flexDirection: "row",
              width: width * slides.length,
              transform: [{ translateX: multiply(x, -1) }]
            }}
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
  footerContent: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: BORDER_RADIUS
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: BORDER_RADIUS,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  image: {
    // ...StyleSheet.absoluteFillObject,
    borderBottomRightRadius: BORDER_RADIUS
  }
});

export default OnBoarding;
