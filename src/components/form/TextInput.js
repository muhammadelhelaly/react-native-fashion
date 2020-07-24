import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../../config/colors";

function AppTextInput({ icon, width = "100%", valid, invalid, ...otherProps }) {
  let borderColor = colors.lightGrey;
  let iconColor = colors.medium;

  if (valid) {
    borderColor = colors.primary;
    iconColor = colors.primary;
  } else if (invalid) {
    borderColor = colors.danger;
    iconColor = colors.danger;
  }

  return (
    <View style={[styles.container, { width, borderColor }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={iconColor}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={colors.medium}
        style={{ marginHorizontal: 5, flex: 1 }}
        {...otherProps}
      />
      {(valid || invalid) && (
        <MaterialCommunityIcons
          name={valid ? "check-circle" : "close-circle"}
          size={20}
          color={iconColor}
          style={styles.icon}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.light,
    borderRadius: 8,
    borderWidth: 1,
    // borderColor: colors.lightGrey,
    flexDirection: "row",
    paddingVertical: 15,
    paddingLeft: 15,
    marginVertical: 10
  },
  icon: {
    marginRight: 10
  }
});

export default AppTextInput;
