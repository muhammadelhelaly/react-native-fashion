import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  KeyboardAvoidingView
} from "react-native";
import {
  TouchableWithoutFeedback,
  RectButton,
  ScrollView
} from "react-native-gesture-handler";
import * as Yup from "yup";
import { Entypo } from "@expo/vector-icons";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton
} from "./../components/form";

import Container, { HEADERHEIGHT } from "../components/Container";
import SocialLogins from "../components/SocialLogins";
import colors from "../../config/colors";
import theme from "../../config/theme";
import routes from "../../config/routes";

const { width, height: wHeight } = Dimensions.get("window");

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required()
    .email()
    .label("Email"),
  password: Yup.string()
    .required()
    .min(4)
    .label("Password"),
  confirmPassword: Yup.string()
    .required()
    .min(4)
    .label("Confirm Password")
    .oneOf([Yup.ref("password"), null], "Passwords do not match")
});

const find_dimesions = layout => {
  const { x, y, width, height } = layout;

  console.log(height);
};

function SignUp({ navigation }) {
  const [contentHeight, setContentHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const [allowScolling, setAllowScolling] = useState(false);

  const footer = (
    <View onLayout={event => find_footerDimesions(event.nativeEvent.layout)}>
      <SocialLogins />
      <View
        style={{
          paddingVertical: 20,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={{ color: colors.white }}>Already have an account?</Text>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate(routes.LOGIN)}
        >
          <Text style={{ color: colors.primary, paddingHorizontal: 5 }}>
            Login here
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );

  const handleSubmit = async ({ email, password }) => {
    console.log(email, password);
  };

  const [isVisiable, setIsVisiable] = useState(false);

  const find_dimesions = layout => {
    const { x, y, width, height } = layout;
    setContentHeight(height + HEADERHEIGHT);
  };

  const find_footerDimesions = layout => {
    const { height } = layout;
    if (contentHeight + height + 35 > wHeight) {
      setAllowScolling(true);
      setFooterHeight(height);
    }
  };

  return (
    <Container
      {...{ footer, rightRadius: false, leftRadius: true, navigation }}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior="padding"
        keyboardVerticalOffset={130}
        // behavior="padding"
        // keyboardVerticalOffset={20}
        // enableAutomaticScroll={false}
        // styles={{ paddingBottom: footerHeight * 1.5 }}
        // extraScrollHeight={20}
        // enableResetScrollToCoords={false}
      >
        <ScrollView
          onLayout={event => find_dimesions(event.nativeEvent.layout)}
          style={{ flex: 1 }}
          // style={{ paddingTop: 200 }}
          // scrollEnabled={allowScolling}
        >
          <View style={styles.textContainer}>
            <Text style={[theme.text.subtitle, { paddingBottom: 5 }]}>
              Create account
            </Text>
            <Text style={[theme.text.description]}>
              Let's us know you name, email, and your password
            </Text>
          </View>

          <Form
            initialValues={{ email: "", password: "", confirmPassword: "" }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <ErrorMessage
              error="Invalid email and/or password."
              visible={false}
            />
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email-outline"
              keyboardType="email-address"
              name="email"
              placeholder="Enter your email"
              textContentType="emailAddress"
            />
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock-outline"
              name="password"
              placeholder="Enter your password"
              secureTextEntry={!isVisiable}
              textContentType="password"
            />
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock-outline"
              name="confirmPassword"
              placeholder="Confirm your password"
              secureTextEntry={!isVisiable}
              textContentType="password"
            />
            <SubmitButton label="Create your account" />
          </Form>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    alignItems: "center",
    padding: 30,
    paddingHorizontal: width / 6
  }
});

export default SignUp;
