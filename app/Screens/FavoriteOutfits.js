import React, { useState, useRef } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Transitioning, Transition } from "react-native-reanimated";

import Screen from "../components/Screen";
import colors from "../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import OutfitItem from "../components/OutfitItem";
import TopCurve from "../components/TopCurve";

const HEADERITEMSCOLOR = colors.dark;

const initialOutfits = [
  { id: 1, color: "#BFEAF5", aspectRatio: 1, isSelected: false },
  { id: 2, color: "#BEECC4", aspectRatio: 200 / 145, isSelected: false },
  { id: 3, color: "#FFE4D9", aspectRatio: 180 / 145, isSelected: false },
  { id: 4, color: "#FFDDDD", aspectRatio: 180 / 145, isSelected: false },
  { id: 5, color: "#BFEAF5", aspectRatio: 1, isSelected: false },
  { id: 6, color: "#ff87a2", aspectRatio: 120 / 145, isSelected: false },
  { id: 7, color: "#D5C3BB", aspectRatio: 210 / 145, isSelected: false },
  { id: 8, color: "#D5C3BB", aspectRatio: 160 / 145, isSelected: false },
];

function FavoriteOutfits({ navigation }) {
  const transition = (
    <Transition.Together>
      <Transition.Change interpolation="easeInOut" durationMs={1000} />
    </Transition.Together>
  );
  const list = useRef(null);
  const [outfits, setOutfits] = useState(initialOutfits);
  const insets = useSafeAreaInsets();
  const [footerHight, setFooterHight] = useState(0);

  const leftIcon = (
    <MaterialCommunityIcons name="menu" size={20} color={HEADERITEMSCOLOR} />
  );

  const rightIcon = (
    <SimpleLineIcons name="handbag" size={18} color={HEADERITEMSCOLOR} />
  );

  return (
    <Screen
      navigation={navigation}
      title="Favorites Outfits"
      titleColor={HEADERITEMSCOLOR}
      iconContainerColor={colors.light}
      leftIcon={leftIcon}
      leftIconOnPress={() => navigation.openDrawer()}
      rightIcon={rightIcon}
      rightIconOnPress={() => console.log("Test")}
      cartItemsCount={2}
    >
      <View style={[styles.container, { paddingBottom: footerHight }]}>
        <ScrollView style={styles.mainView}>
          <Transitioning.View ref={list} {...{ transition }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                // outfits.filter(({ id }) => id % 2 !== 0).length < 0
                //   ? "center"
                //   : "flex-start",
              }}
            >
              <View>
                {outfits
                  .filter(({ id }) => id % 2 !== 0)
                  .map((outfit) => (
                    <OutfitItem key={outfit.id} outfit={outfit} />
                  ))}
              </View>
              <View>
                {outfits
                  .filter(({ id }) => id % 2 === 0)
                  .map((outfit) => (
                    <OutfitItem key={outfit.id} outfit={outfit} />
                  ))}
              </View>
            </View>
          </Transitioning.View>
        </ScrollView>
      </View>
      <TopCurve footerHight={footerHight} color={colors.darkBlue} />
      <View
        style={styles.footer}
        onLayout={(event) => setFooterHight(event.nativeEvent.layout.height)}
      >
        <TouchableOpacity
          onPress={() => {
            list.current?.animateNextTransition();
            setOutfits(outfits.filter((outfilt) => !outfilt.isSelected));
          }}
          style={styles.button}
        >
          <Text style={{ color: colors.white }}>Add more to favorites</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 20,
  },
  footer: {
    backgroundColor: colors.darkBlue,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 50,
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
  },
  button: {
    backgroundColor: colors.primary,
    marginVertical: 30,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 35,
  },
});

export default FavoriteOutfits;
