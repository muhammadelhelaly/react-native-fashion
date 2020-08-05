import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
  Dimensions
} from "react-native";
import {
  RectButton,
  ScrollView,
  TouchableOpacity
} from "react-native-gesture-handler";
import {
  MaterialCommunityIcons,
  SimpleLineIcons,
  Ionicons,
  FontAwesome
} from "@expo/vector-icons";

import colors from "../config/colors";
import theme from "../config/theme";
import routes from "../config/routes";
import useAuth from "./../auth/useAuth";

const { width, height } = Dimensions.get("window");

const PROFILEIMAGESIZE = 100;
const FOOTER_HEIGHT = 160;
const HEADER_HEIGHT = height * 0.22 + theme.borderRadius - 30;

const items = [
  {
    color: "#2cb9b0",
    icon: <Ionicons name="ios-flash" size={24} color={colors.white} />,
    title: "Outfit Ideas",
    navigateTo: routes.OUTFITSIDEAS
  },
  {
    color: "#ff5e32",
    icon: <Ionicons name="md-heart" size={24} color={colors.white} />,
    title: "Favorite Outfits",
    navigateTo: ""
  },
  {
    color: "#ffc641",
    icon: <Ionicons name="md-person" size={24} color={colors.white} />,
    title: "Edit Profile",
    navigateTo: ""
  },
  {
    color: "#ff89a3",
    icon: (
      <MaterialCommunityIcons name="clock" size={24} color={colors.white} />
    ),
    title: "Transaction History",
    navigateTo: ""
  },
  {
    color: "#452cbb",
    icon: <Ionicons name="ios-settings" size={24} color={colors.white} />,
    title: "Notifications Settings",
    navigateTo: ""
  },
  {
    color: "#0a0d36",
    icon: <FontAwesome name="sign-out" size={24} color={colors.white} />,
    title: "Logout",
    navigateTo: null
  }
];

function DrawerContent({ navigation }) {
  const { logOut } = useAuth();
  return (
    <>
      <StatusBar backgroundColor="white" barStyle={"light-content"} />
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.headerTopRow}>
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
        <View style={styles.headerBottomSection}>
          <View style={styles.headerBottomRow}>
            <View style={styles.profileImageContainer}>
              <Image
                source={require("./../assets/profile_pic.jpg")}
                style={styles.profileImage}
              />
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <Image
            source={require("./../assets/bg-pattern.png")}
            style={styles.footerBackgroundImage}
          />
          <Image
            source={require("./../assets/bg-pattern.png")}
            style={[styles.footerBackgroundImage, { borderTopLeftRadius: 50 }]}
          />
        </View>
        <ScrollView style={styles.body}>
          <View>
            <Text style={theme.text.subtitle}>Muhammad ElHelaly</Text>
            <Text style={theme.text.description}>elhelaly@live.com</Text>
          </View>
          <View style={{ padding: 30 }}>
            {items.map(item => (
              <TouchableOpacity
                key={item.title}
                onPress={() =>
                  item.navigateTo
                    ? navigation.navigate(item.navigateTo)
                    : logOut()
                }
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    paddingVertical: 10,
                    alignItems: "center"
                  }}
                >
                  <View
                    style={{
                      backgroundColor: item.color,
                      height: 40,
                      width: 40,
                      borderRadius: 20,
                      marginRight: 15,
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    {item.icon}
                  </View>
                  <Text style={theme.text.drawerItem}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  headerContainer: {
    flex: 0.22,
    backgroundColor: colors.darkBlue,
    borderBottomRightRadius: theme.borderRadius
  },
  headerTopRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25
  },
  headerBottomSection: {
    backgroundColor: colors.darkBlue,
    height: theme.borderRadius * 2
  },
  headerBottomRow: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: theme.borderRadius,
    flexDirection: "row",
    justifyContent: "center"
  },
  profileImageContainer: {
    marginTop: -PROFILEIMAGESIZE / 2,
    height: PROFILEIMAGESIZE,
    width: PROFILEIMAGESIZE,
    borderRadius: PROFILEIMAGESIZE / 2,
    overflow: "hidden"
  },
  profileImage: {
    height: PROFILEIMAGESIZE,
    width: PROFILEIMAGESIZE
  },
  footer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    width: width,
    height: FOOTER_HEIGHT
  },
  footerBackgroundImage: {
    width: width,
    height: FOOTER_HEIGHT / 2
  },
  body: {
    ...StyleSheet.absoluteFillObject,
    top: HEADER_HEIGHT,
    bottom: FOOTER_HEIGHT / 2,
    backgroundColor: colors.white,
    borderBottomRightRadius: FOOTER_HEIGHT / 2
  }
});

export default DrawerContent;
