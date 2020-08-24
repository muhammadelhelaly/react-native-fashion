import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import colors from "../config/colors";
import GraphUnderlay from "./GraphUnderlay";

const { width } = Dimensions.get("window");
const aspectRatio = 140 / 305;
const height = width * aspectRatio;
const BORDER_RADIUS = 15;
const formatter = Intl.DateTimeFormat("en", { month: "short" });

const lerp = (v0, v1, t) => {
  return (1 - t) * v0 + t * v1;
};

function Graph({ data }) {
  const step = (width - 50) / data.length;
  const values = data.map((p) => p.value);
  const dates = data.map((p) => p.date);
  const minX = Math.min(...dates);
  const maxX = Math.max(...dates);
  const minY = Math.min(...values);
  const maxY = Math.max(...values);

  const POINTER_HEIGHT = 0;

  return (
    <View style={styles.container}>
      <GraphUnderlay minY={minY} maxY={maxY} dates={dates} step={step} />
      <View
        style={{
          flexDirection: "row",
          backgroundColor: colors.white,
          marginLeft: 10,
          paddingLeft: 30,
          position: "absolute",
          bottom: -20,
        }}
      >
        {dates.map((date, index) => (
          <View key={index} style={{ width: step }}>
            <Text style={{ color: colors.darkGrey }}>
              {formatter.format(new Date(date))}
            </Text>
          </View>
        ))}
      </View>
      {data.map((point, i) => {
        if (point.value === 0) {
          return null;
        }

        return (
          <View
            key={point.date}
            style={{
              position: "absolute",
              bottom: 0,
              left: i * step + 30,
              width: step,
              height: lerp(0, height, point.value / maxY),
            }}
          >
            <View
              style={[
                styles.pointer,
                {
                  backgroundColor: point.color,
                  height: point.value >= 100 ? 30 : point.value >= 50 ? 15 : 2,
                },
              ]}
            ></View>
            <View
              style={[styles.column, { backgroundColor: point.color }]}
            ></View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: height,
    marginHorizontal: 15,
  },
  pointer: {
    position: "absolute",
    top: 0,
    left: 15,
    right: 15,
    borderRadius: BORDER_RADIUS,
  },
  column: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 15,
    right: 15,
    opacity: 0.18,
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
  },
});

export default Graph;
