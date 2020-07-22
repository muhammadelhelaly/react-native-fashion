import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../../config/colors";

function SubSlide({ subtitle, description, last }) {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 44
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
