import React from "react";
import { View, StyleSheet, Text } from "react-native";

import Button from "./Button";
import theme from "./../config/theme";

function SubSlide({ subtitle, description, last, onPress }) {
  return (
    <View style={styles.container}>
      <View style={styles.title_descContainer}>
        <Text style={theme.text.subtitle}>{subtitle}</Text>
        <Text style={theme.text.description}>{description}</Text>
      </View>
      <Button
        label={last ? "Let's get started" : "Next"}
        variant={last ? "primary" : "default"}
        {...{ onPress }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 30
  },
  title_descContainer: {
    alignItems: "center"
  }
});

export default SubSlide;
