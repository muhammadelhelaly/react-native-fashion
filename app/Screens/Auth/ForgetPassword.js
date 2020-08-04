import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView
} from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import * as Yup from "yup";

import { Form, FormField, SubmitButton } from "../../components/form";
import Container from "../../components/Container";
import SocialLogins from "../../components/SocialLogins";
import colors from "../../config/colors";
import theme from "../../config/theme";
import routes from "../../config/routes";

const { width } = Dimensions.get("window");

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required()
    .email()
    .label("Email")
});

function ForgetPassword({ navigation }) {
  const footer = (
    <View>
      <SocialLogins />
    </View>
  );

  const handleSubmit = async ({ email }) => {
    navigation.navigate(routes.PASSWORDCHANGED);
  };

  return (
    <Container {...{ footer, rightRadius: true, leftRadius: true, navigation }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior="padding"
        keyboardVerticalOffset={130}
      >
        <ScrollView>
          <View style={styles.textContainer}>
            <Text style={[theme.text.subtitle, { paddingBottom: 15 }]}>
              Forget Password
            </Text>
            <Text style={[theme.text.description]}>
              Enter the email address associated with your account
            </Text>
          </View>
          <Form
            initialValues={{ email: "" }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email-outline"
              keyboardType="email-address"
              name="email"
              placeholder="Enter your email"
              textContentType="emailAddress"
            />
            <SubmitButton label="Reset Password" />
            <View style={styles.optionsRow}>
              <Text style={{ paddingRight: 5 }}>Don't work?</Text>
              <RectButton
                onPress={() => navigation.navigate(routes.FORGETPASSWORD)}
              >
                <Text style={{ color: colors.primary }}>Try another way</Text>
              </RectButton>
            </View>
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
  },
  optionsRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 25
  },
  checkBox: {
    borderWidth: 1,
    borderRadius: 5,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
    marginRight: 12
  }
});

export default ForgetPassword;
