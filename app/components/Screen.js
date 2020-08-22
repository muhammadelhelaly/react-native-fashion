import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import colors from "../config/colors";
import theme from "../config/theme";

const ICON_CONTAINER_SIZE = 44;

function Screen({
  title,
  titleColor,
  iconContainerColor,
  leftIcon,
  leftIconOnPress,
  rightIcon,
  rightIconOnPress,
  cartItemsCount,
  children,
}) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle={"dark-content"} />
      <View style={styles.header}>
        <TouchableOpacity onPress={leftIconOnPress}>
          <View
            style={[
              styles.iconContainer,
              { backgroundColor: iconContainerColor },
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
              { backgroundColor: iconContainerColor },
            ]}
          >
            {rightIcon}
          </View>
          {cartItemsCount && (
            <View
              style={{
                position: "absolute",
                right: 0,
                backgroundColor: colors.badge,
                height: 18,
                width: 18,
                borderRadius: 9,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: colors.white,
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                2
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: getStatusBarHeight() + 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 35,
    paddingBottom: 10,
  },
  iconContainer: {
    height: ICON_CONTAINER_SIZE,
    width: ICON_CONTAINER_SIZE,
    borderRadius: ICON_CONTAINER_SIZE / 2,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Screen;
