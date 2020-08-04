import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import colors from "../config/colors";

function BackButton({ navigation, color }) {
  return (
    <View style={styles.backButtonContainer}>
      <RectButton
        style={[styles.backButton, { backgroundColor: color }]}
        onPress={() => navigation.pop()}
      >
        <Ionicons name="ios-arrow-round-back" size={24} color={colors.white} />
      </RectButton>
    </View>
  );
}

const styles = StyleSheet.create({
  backButtonContainer: {
    ...StyleSheet.absoluteFillObject,
    top: 50,
    left: 25
  },
  backButton: {
    height: 44,
    width: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default BackButton;
