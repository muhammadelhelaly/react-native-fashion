import React from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";

import Button from "../../components/Button";
import Container from "../../components/Container";
import colors from "../../config/colors";
import theme from "../../config/theme";
import routes from "../../config/routes";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");

function PasswordChanged({ navigation }) {
  const footer = (
    <View style={styles.footer}>
      <TouchableWithoutFeedback
        style={styles.iconContainer}
        onPress={() => navigation.pop()}
      >
        <MaterialCommunityIcons name="close" size={26} color={colors.black} />
      </TouchableWithoutFeedback>
    </View>
  );

  return (
    <Container
      {...{ footer, rightRadius: true, leftRadius: false, navigation }}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <View style={{ alignItems: "center" }}>
          <View style={{ height: 100, width: 100 }}>
            <LottieView
              source={require("./../../assets/animations/success.json")}
              autoPlay
              loop={false}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={[theme.text.subtitle, { paddingBottom: 15 }]}>
              Your password was successfully changed
            </Text>
            <Text style={[theme.text.description]}>
              Close this window ana login again
            </Text>
          </View>
          <Button
            label="Login again"
            variant="primary"
            onPress={() => navigation.navigate(routes.LOGIN)}
          />
        </View>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  footer: {
    justifyContent: "center",
    alignItems: "center"
  },
  iconContainer: {
    backgroundColor: colors.white,
    height: 44,
    width: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10
  },
  textContainer: {
    alignItems: "center",
    padding: 30,
    paddingHorizontal: width / 6
  }
});

export default PasswordChanged;
