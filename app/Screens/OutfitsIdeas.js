import React, { useState } from "react";
import { View, Image, StyleSheet, Dimensions, Text } from "react-native";
import { MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import theme from "../config/theme";

import Screen from "../components/Screen";
import colors from "../config/colors";
import deviceType from "./../utils/deviceType";
import Card from "../components/Card";
import { useTransition } from "react-native-redash";
import { sub } from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

const HEADERITEMSCOLOR = colors.dark;
const SLIDERITEMHEIGHT = 70;

const sliderItems = [
  {
    image: require("./../assets/outtfitslider_1.jpg"),
    isNew: true,
    title: "New in",
  },
  {
    image: require("./../assets/outtfitslider_2.jpg"),
    isNew: true,
    title: "Summer",
  },
  {
    image: require("./../assets/outtfitslider_3.jpg"),
    isNew: true,
    title: "Active",
  },
  {
    image: require("./../assets/outtfitslider_4.jpg"),
    isNew: false,
    title: "Wear",
  },
  {
    image: require("./../assets/outtfitslider_5.jpg"),
    isNew: false,
    title: "Outlet",
  },
  {
    image: require("./../assets/outtfitslider_6.jpg"),
    isNew: false,
    title: "Accesories",
  },
];

const cards = [
  { index: 3, image: require("./../assets/4.png") },
  { index: 2, image: require("./../assets/3.png") },
  { index: 1, image: require("./../assets/2.png") },
  { index: 0, image: require("./../assets/1.png") },
];

const step = 1 / (cards.length - 1);

function OutfitsIdeas({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const aIndex = useTransition(currentIndex);

  const leftIcon = (
    <MaterialCommunityIcons name="menu" size={20} color={HEADERITEMSCOLOR} />
  );

  const rightIcon = (
    <SimpleLineIcons name="handbag" size={18} color={HEADERITEMSCOLOR} />
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
      cartItemsCount={2}
    >
      <View style={{ flex: 1 / 3 }}>
        <FlatList
          data={sliderItems}
          keyExtractor={(item) => item.image.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={{ alignItems: "center" }}>
              <View
                style={[
                  styles.sliderContainer,
                  { borderColor: item.isNew ? colors.primary : colors.white },
                ]}
              >
                <Image
                  source={item.image}
                  style={{ height: SLIDERITEMHEIGHT, width: SLIDERITEMHEIGHT }}
                />
              </View>
              <Text style={{ paddingTop: 5, color: colors.medium }}>
                {item.title}
              </Text>
            </View>
          )}
        ></FlatList>
      </View>
      <View
        style={{
          flex: 1 / 3,
          backgroundColor: colors.primary,
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: colors.white,
            borderBottomEndRadius: theme.borderRadius,
          }}
        ></View>
      </View>
      <View
        style={{
          flex: 2 / 3,
          //   borderBottomRightRadius: theme.borderRadius,
          //   overflow: "hidden"
        }}
      >
        <View style={{ zIndex: 99, marginTop: 50 }}>
          {cards.map(
            (item) =>
              currentIndex < item.index * step + step && (
                <Card
                  key={item.index}
                  position={sub(item.index * step, aIndex)}
                  onSwipe={() => setCurrentIndex((prev) => prev + step)}
                  image={item.image}
                  step={step}
                />
              )
          )}
        </View>
        <View
          style={{
            height: height / 5,
            backgroundColor: colors.pink,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            overflow: "hidden",
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: colors.darkBlue,
              borderTopLeftRadius: theme.borderRadius,
            }}
          ></View>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: height / 5,
            backgroundColor: colors.darkBlue,
            borderTopLeftRadius: theme.borderRadius,
            overflow: "hidden",
          }}
        >
          <Image
            source={require("./../assets/bg-pattern_sm.png")}
            style={{
              borderBottomRightRadius: theme.borderRadius,
              width: width + 4,
              height: height / 4 + (deviceType.isPhone ? -6 : 12),
              marginLeft: -2,
            }}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  sliderContainer: {
    height: SLIDERITEMHEIGHT,
    width: SLIDERITEMHEIGHT,
    borderRadius: SLIDERITEMHEIGHT / 2,
    backgroundColor: colors.warning,
    overflow: "hidden",
    marginTop: 20,
    marginHorizontal: 4,
    borderWidth: 2,
  },
});

export default OutfitsIdeas;
