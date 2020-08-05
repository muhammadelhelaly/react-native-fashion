import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import colors from "../config/colors";
import theme from "../config/theme";

const ICON_CONTAINER_SIZE = 40;

function Screen({
  title,
  titleColor,
  iconContainerColor,
  leftIcon,
  leftIconOnPress,
  rightIcon,
  rightIconOnPress,
  children
}) {
  console.log();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle={"dark-content"} />
      <View style={styles.header}>
        <TouchableOpacity onPress={leftIconOnPress}>
          <View
            style={[
              styles.iconContainer,
              { backgroundColor: iconContainerColor }
            ]}
          >
            {leftIcon}
          </View>
        </TouchableOpacity>
        <Text style={[theme.text.drawerItem, { color: titleColor }]}>
          {title.toUpperCase()}
        </Text>
        <TouchableOpacity onPress={rightIconOnPress}>
          <View
            style={[
              styles.iconContainer,
              { backgroundColor: iconContainerColor }
            ]}
          >
            {rightIcon}
          </View>
        </TouchableOpacity>
      </View>
      <View>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: getStatusBarHeight() + 20
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25
  },
  iconContainer: {
    height: ICON_CONTAINER_SIZE,
    width: ICON_CONTAINER_SIZE,
    borderRadius: ICON_CONTAINER_SIZE / 2,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Screen;
