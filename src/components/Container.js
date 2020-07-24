import React from "react";
import { View, StyleSheet, Image, Dimensions, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import theme from "../../config/theme";
import colors from "../../config/colors";

const { width } = Dimensions.get("window");
const aspectRatio = 750 / 1488;
const height = width * aspectRatio;

const imagePath = "./../../assets/bg-pattern.png";

function Container({ children, footer }) {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle={"light-content"} />
      <View style={{ backgroundColor: colors.white }}>
        <View style={styles.imageConianer}>
          <Image source={require(imagePath)} style={styles.image} />
        </View>
      </View>
      <View style={styles.screenContaint}>
        <Image
          source={require(imagePath)}
          style={[
            styles.image,
            { ...StyleSheet.absoluteFillObject, top: -height * 0.75 }
          ]}
        />
        <View style={styles.content}>{children}</View>
      </View>
      <View style={[styles.footer, { paddingBottom: insets.bottom }]}>
        {footer}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: colors.white
    backgroundColor: colors.darkBlue
  },
  imageConianer: {
    borderBottomLeftRadius: theme.borderRadius,
    overflow: "hidden",
    height: height * 0.75
  },
  image: {
    width,
    height,
    borderBottomLeftRadius: theme.borderRadius
  },
  screenContaint: {
    flex: 1,
    overflow: "hidden"
  },
  content: {
    borderRadius: theme.borderRadius,
    borderTopLeftRadius: 0,
    backgroundColor: colors.white,
    flex: 1
  },
  footer: {
    backgroundColor: colors.darkBlue,
    paddingTop: 30
    // height: 200
  }
});

export default Container;
