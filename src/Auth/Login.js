import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import Container from "../components/Container";
import SocialLogins from "../components/SocialLogins";
import colors from "../../config/colors";

function Login() {
  const footer = (
    <>
      <SocialLogins />
      <View
        style={{
          paddingTop: 20,
          // flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={{ color: colors.white }}>Don't have an account?</Text>
        <TouchableWithoutFeedback onPress={() => alert("Hello")}>
          <Text style={{ color: colors.primary, paddingHorizontal: 5 }}>
            Sign Up here
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
  return (
    <Container {...{ footer }}>
      <View></View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default Login;
