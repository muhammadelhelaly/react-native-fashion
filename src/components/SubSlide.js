import React from "react";
import { View, StyleSheet, Text } from "react-native";

import Button from "./Button";
import colors from "../../config/colors";

function SubSlide({ subtitle, description, last, onPress }) {
  return (
    <View style={styles.container}>
      <View style={styles.title_descContainer}>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.description}>{description}</Text>
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
  },
  subtitle: {
    fontFamily: "SF-Pro-semi",
    fontSize: 24,
    color: colors.dark,
    marginBottom: 12
  },
  description: {
    fontFamily: "SF-Pro",
    fontSize: 18,
    lineHeight: 24,
    color: colors.dark,
    textAlign: "center"
  }
});

export default SubSlide;
