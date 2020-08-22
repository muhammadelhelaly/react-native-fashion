import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const { width } = Dimensions.get("window");

function OutfitItem({ outfit }) {
  const [isSelected, setIsSelected] = useState();
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setIsSelected(!isSelected);
        outfit.isSelected = !isSelected;
      }}
      style={[
        styles.container,
        {
          backgroundColor: outfit.color,
          height: (width * outfit.aspectRatio) / 2.5,
          alignItems: "flex-end",
          padding: 10,
        },
      ]}
    >
      {isSelected && (
        <View
          style={{
            height: 24,
            width: 24,
            backgroundColor: colors.primary,
            borderRadius: 12,
          }}
        >
          <MaterialCommunityIcons name="check" size={24} color={colors.white} />
        </View>
      )}
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 35,
    margin: 8,
    // marginHorizontal: 10,
    borderRadius: 8,
  },
});

export default OutfitItem;
