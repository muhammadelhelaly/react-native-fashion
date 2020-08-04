import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import theme from "../config/theme";

const PROFILEIMAGESIZE = 100;

function DrawerContent({ navigation }) {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle={"light-content"} />
      <View style={{ flex: 1, backgroundColor: colors.white }}>
        <View
          style={{
            flex: 0.22,
            backgroundColor: colors.darkBlue,
            borderBottomRightRadius: theme.borderRadius
          }}
        >
          <SafeAreaView style={{ flex: 1 }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 20,
                paddingHorizontal: 25
              }}
            >
              <RectButton onPress={() => navigation.closeDrawer()}>
                <MaterialCommunityIcons
                  name="close"
                  size={24}
                  color={colors.white}
                />
              </RectButton>
              <Text style={{ color: colors.white }}>
                {"My Profile".toUpperCase()}
              </Text>
              <RectButton onPress={() => navigation.closeDrawer()}>
                <SimpleLineIcons
                  name="handbag"
                  size={20}
                  color={colors.white}
                />
              </RectButton>
            </View>
          </SafeAreaView>
        </View>
        <View
          style={{
            backgroundColor: colors.darkBlue,
            height: theme.borderRadius * 2
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: colors.white,
              borderTopLeftRadius: theme.borderRadius,
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <View
              style={{
                marginTop: -PROFILEIMAGESIZE / 2,
                height: PROFILEIMAGESIZE,
                width: PROFILEIMAGESIZE,
                borderRadius: PROFILEIMAGESIZE / 2,
                overflow: "hidden"
              }}
            >
              <Image
                source={require("./../assets/profile_pic.jpg")}
                style={{ height: PROFILEIMAGESIZE, width: PROFILEIMAGESIZE }}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default DrawerContent;
