import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import colors from "../config/colors";

const HEADERITEMSCOLOR = colors.dark;

function OutfitsIdeas({ navigation }) {
  const leftIcon = (
    <MaterialCommunityIcons name="menu" size={24} color={HEADERITEMSCOLOR} />
  );

  const rightIcon = (
    <SimpleLineIcons name="handbag" size={20} color={HEADERITEMSCOLOR} />
  );

  return (
    <Screen
      navigation={navigation}
      title="Outfit Ideas"
      titleColor={HEADERITEMSCOLOR}
      iconContainerColor={colors.light}
      leftIcon={leftIcon}
      leftIconOnPress={() => navigation.openDrawer()}
      rightIcon={rightIcon}
      rightIconOnPress={() => console.log("Test")}
    >
      <Text>yy</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default OutfitsIdeas;
