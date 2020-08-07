import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import theme from "../config/theme";

import Screen from "../components/Screen";
import colors from "../config/colors";
import deviceType from "./../utils/deviceType";
import Card from "../components/Card";

const { width, height } = Dimensions.get("window");

const HEADERITEMSCOLOR = colors.dark;
const SLIDERITEMHEIGHT = 70;

const sliderItems = [
  { image: require("./../assets/outtfitslider_1.jpg"), isNew: true },
  { image: require("./../assets/outtfitslider_2.jpg"), isNew: true },
  { image: require("./../assets/outtfitslider_3.jpg"), isNew: true },
  { image: require("./../assets/outtfitslider_4.jpg"), isNew: false },
  { image: require("./../assets/outtfitslider_5.jpg"), isNew: false },
  { image: require("./../assets/outtfitslider_6.jpg"), isNew: false }
];

function OutfitsIdeas({ navigation }) {
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
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginLeft: 20
          }}
        >
          {sliderItems.map(item => (
            <View
              key={item.image}
              style={[
                styles.sliderContainer,
                { borderColor: item.isNew ? colors.primary : colors.white }
              ]}
            >
              <Image
                source={item.image}
                style={{ height: SLIDERITEMHEIGHT, width: SLIDERITEMHEIGHT }}
              />
            </View>
          ))}
        </ScrollView>
      </View>
      {/* <View
        style={{
          // ...StyleSheet.absoluteFill,
          position: "absolute",
          top: height / 4 + 75,
          left: width / 6,
          // justifyContent: "center",
          // alignItems: "center",
          //   backgroundColor: colors.primary,
          zIndex: 99
          // paddingTop: height / 4
        }}
      >
        <View
          style={{
            backgroundColor: colors.primary,
            width: width / 1.5,
            height: height / 1.5 - 100,
            borderRadius: 20
          }}
        ></View>
      </View> */}
      <View
        style={{
          flex: 1 / 3,
          backgroundColor: colors.primary
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: colors.white,
            borderBottomEndRadius: theme.borderRadius
          }}
        ></View>
      </View>
      <View
        style={{
          flex: 2 / 3
          //   borderBottomRightRadius: theme.borderRadius,
          //   overflow: "hidden"
        }}
      >
        <View style={{ zIndex: 99, marginTop: 50 }}>
          <Card position={1} />
          <Card position={0.5} />
          <Card position={0} />
        </View>
        <View
          style={{
            height: height / 5,
            backgroundColor: colors.pink,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            overflow: "hidden"
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: colors.darkBlue,
              borderTopLeftRadius: theme.borderRadius
            }}
          ></View>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: height / 5,
            backgroundColor: colors.darkBlue,
            borderTopLeftRadius: theme.borderRadius,
            overflow: "hidden"
          }}
        >
          <Image
            source={require("./../assets/bg-pattern_sm.png")}
            style={{
              borderBottomRightRadius: theme.borderRadius,
              width: width + 4,
              height: height / 4 + (deviceType.isPhone ? -6 : 12),
              marginLeft: -2
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
    marginTop: 40,
    marginHorizontal: 4,
    borderWidth: 2
  }
});

export default OutfitsIdeas;
