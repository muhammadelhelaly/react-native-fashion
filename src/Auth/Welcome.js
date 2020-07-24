import React from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import theme from "../../config/theme";
import colors from "../../config/colors";
import Button from "../components/Button";
import routes from "../../config/routes";

const { width } = Dimensions.get("window");
const image = {
  src: require("./../../assets/5.png"),
  height: 1000,
  width: 750
};

function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={image.src}
          style={[
            styles.image,
            {
              width: width - theme.borderRadius,
              height:
                ((width - theme.borderRadius) * image.height) / image.width
            }
          ]}
        />
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.radius}></View>
        <View style={styles.bottomContent}>
          <Text style={theme.text.subtitle}>Let's get started</Text>
          <Text style={theme.text.description}>
            Login to your account below or signup for an amazing experience
          </Text>
          <View
            style={{
              // backgroundColor: "red",
              flex: 0.6,
              justifyContent: "space-evenly"
            }}
          >
            <Button
              label="Have an account? Login"
              variant="primary"
              onPress={() => navigation.navigate(routes.LOGIN)}
            />
            <Button label="Join us, it's free" variant="light" />
            <Button label="Forget password?" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  topSection: {
    flex: 1,
    borderBottomRightRadius: theme.borderRadius,
    backgroundColor: colors.lightGrey,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  bottomSection: {
    flex: 1,
    borderTopLeftRadius: theme.borderRadius
  },
  radius: {
    backgroundColor: colors.lightGrey,
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0
  },
  bottomContent: {
    flex: 1,
    borderTopLeftRadius: theme.borderRadius,
    backgroundColor: colors.white,
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 10
  }
});

export default Welcome;
