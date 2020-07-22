import React, { useState } from "react";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./navigation/AuthNavigator";
import { AppLoading } from "expo";
import * as Font from "expo-font";

const loadFonts = async () => {
  await Font.loadAsync({
    "SF-Pro": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
    "SF-Pro-semi": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
    "SF-Pro-bold": require("./assets/fonts/SF-Pro-Text-Bold.otf")
  });
};

export default function App() {
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  if (!assetsLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setAssetsLoaded(true)}
        //onError={() => console.log("Erroooor!")}
      />
    );
  }

  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
