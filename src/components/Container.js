import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import theme from "../../config/theme";
import colors from "../../config/colors";
import BackButton from "./BackButton";

const { width } = Dimensions.get("window");
const aspectRatio = 750 / 1488;
const height = width * aspectRatio;

const imagePath = "./../../assets/bg-pattern.png";

function Container({ children, footer, rightRadius, leftRadius, navigation }) {
  const insets = useSafeAreaInsets();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar backgroundColor="white" barStyle={"light-content"} />
        <View style={{ backgroundColor: colors.white }}>
          <View
            style={[
              styles.imageConianer,
              {
                borderBottomLeftRadius: leftRadius ? 0 : theme.borderRadius,
                borderBottomRightRadius: rightRadius ? 0 : theme.borderRadius
              }
            ]}
          >
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
          <View
            style={[
              styles.content,
              {
                borderTopLeftRadius: leftRadius ? theme.borderRadius : 0,
                borderTopRightRadius: rightRadius ? theme.borderRadius : 0
              }
            ]}
          >
            {children}
          </View>
        </View>
        <BackButton color={colors.darkBlue} {...{ navigation }} />
        <View style={[styles.footer, { paddingBottom: insets.bottom }]}>
          {footer}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: colors.white
    backgroundColor: colors.darkBlue
  },
  imageConianer: {
    overflow: "hidden",
    height: height * 0.7
  },
  image: {
    width,
    height
    // borderBottomLeftRadius: theme.borderRadius
  },
  screenContaint: {
    flex: 1,
    overflow: "hidden",
    zIndex: 99
  },
  content: {
    borderRadius: theme.borderRadius,
    backgroundColor: colors.white,
    flex: 1
  },
  footer: {
    backgroundColor: colors.darkBlue,
    paddingTop: 30
  }
});

export default Container;
