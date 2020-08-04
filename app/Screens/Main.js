import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import useAuth from "../auth/useAuth";

function Main({ navigation }) {
  const auth = useAuth();

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableWithoutFeedback onPress={() => auth.logOut()}>
        <Text>Logout</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50
  }
});

export default Main;
