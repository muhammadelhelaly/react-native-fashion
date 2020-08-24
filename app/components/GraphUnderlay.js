import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../config/colors";

const lerp = (v0, v1, t) => {
  return (1 - t) * v0 + t * v1;
};

function GraphUnderlay({ minY, maxY, dates, step }) {
  return (
    <View style={StyleSheet.absoluteFill}>
      <View style={styles.container}>
        {[1, 0.75, 0.5, 0.25].map((t) => {
          return (
            <View key={t} style={styles.axisConatiner}>
              <View style={{ flex: 0.15 }}>
                <Text style={styles.axisValue}>
                  {/* {Math.round(lerp(minY, Math.ceil(maxY / 100) * 100, t))} */}
                  {Math.round(lerp(minY, maxY, t))}
                </Text>
              </View>
              <View style={styles.axisLine}></View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
  },
  axisConatiner: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  axisValue: {
    color: colors.darkGrey,
    textAlign: "right",
    paddingRight: 15,
  },
  axisLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.lightGrey,
  },
});

export default GraphUnderlay;
