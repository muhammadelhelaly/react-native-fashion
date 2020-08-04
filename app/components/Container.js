import React, { useState } from "react";
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
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import theme from "../config/theme";
import colors from "../config/colors";
import BackButton from "./BackButton";
import { ScrollView } from "react-native-gesture-handler";

const { width, height: wHeight } = Dimensions.get("window");
const aspectRatio = 750 / 1488;
const height = width * aspectRatio;
export const HEADERHEIGHT = height * 0.7;

const imagePath = "./../assets/bg-pattern.png";

function Container({ children, footer, rightRadius, leftRadius, navigation }) {
  const insets = useSafeAreaInsets();
  const [screenHeight, setScreenHeight] = useState(0);

  const onContentSizeChange = (contentWidth, contentHeight) => {
    setScreenHeight(contentHeight);
  };

  return (
    <TouchableWithoutFeedback
      // onPress={Keyboard.dismiss}
      style={{ height: wHeight }}
    >
      <View style={{ flex: 1 }}>
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
            <BackButton color={colors.darkBlue} {...{ navigation }} />
          </View>
          {/* <KeyboardAwareScrollView
            enableAutomaticScroll={false}
            extraScrollHeight={20}

            // styles={{ paddingBottom: footerHeight * 1.5 }}
          > */}
          <View style={styles.screenContaint}>
            <Image
              source={require(imagePath)}
              style={[
                styles.image,
                { ...StyleSheet.absoluteFillObject, top: -height * 0.7 }
              ]}
            />
            <View
              style={[
                styles.content,
                {
                  borderTopLeftRadius: leftRadius ? theme.borderRadius : 0,
                  borderTopRightRadius: rightRadius ? theme.borderRadius : 0,
                  overflow: "hidden"
                }
              ]}
            >
              {/* <KeyboardAwareScrollView
                // enableAutomaticScroll={false}
                extraScrollHeight={20}
              > */}
              {children}
              {/* </KeyboardAwareScrollView> */}
            </View>
          </View>
          {/* </KeyboardAwareScrollView> */}
        </View>
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
    // height: wHeight
  },
  imageConianer: {
    overflow: "hidden",
    height: HEADERHEIGHT
  },
  image: {
    width,
    height
    // borderBottomLeftRadius: theme.borderRadius
  },
  screenContaint: {
    flex: 1,
    overflow: "hidden",
    //zIndex: 99,
    // height: 400,
    borderBottomLeftRadius: theme.borderRadius,
    borderBottomRightRadius: theme.borderRadius,
    backgroundColor: colors.white
  },
  content: {
    // borderRadius: theme.borderRadius,
    backgroundColor: colors.white,
    flex: 1
    // paddingBottom: 100
  },
  footer: {
    backgroundColor: colors.darkBlue,
    paddingTop: 30
  }
});

export default Container;
