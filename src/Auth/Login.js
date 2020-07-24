import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import * as Yup from "yup";

import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton
} from "./../components/form";
import Container from "../components/Container";
import SocialLogins from "../components/SocialLogins";
import colors from "../../config/colors";
import theme from "../../config/theme";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required()
    .email()
    .label("Email"),
  password: Yup.string()
    .required()
    .min(4)
    .label("Password")
});

function Login({ navigation }) {
  const footer = (
    <>
      <SocialLogins />
      <View
        style={{
          paddingVertical: 20,
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

  const handleSubmit = async ({ email, password }) => {
    console.log(email, password);
  };

  return (
    <Container {...{ footer, navigation }}>
      <View style={styles.textContainer}>
        <Text style={[theme.text.subtitle, { paddingBottom: 15 }]}>
          Welcome Back
        </Text>
        <Text style={[theme.text.description]}>
          Use your credentials below and login to your account
        </Text>
      </View>
      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error="Invalid email and/or password." visible={false} />
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
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton label="Log into your account" />
      </Form>
    </Container>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    alignItems: "center",
    padding: 30,
    paddingHorizontal: 70
  }
});

export default Login;
