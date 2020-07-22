import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import colors from "../../config/colors";

function Button({ label, variant, onPress }) {
  return (
    <RectButton
      style={[styles.container, { backgroundColor: colors[variant] }]}
      {...{ onPress }}
    >
      <Text
        style={[
          styles.label,
          { color: variant === "primary" ? colors.white : colors.dark }
        ]}
      >
        {label}
      </Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center"
  },
  label: {
    fontFamily: "SF-Pro",
    fontSize: 15
  }
});

export default Button;
