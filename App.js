import React, { useState } from "react";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";

import AuthNavigator from "./app/navigation/AuthNavigator";
import HomeNavigator from "./app/navigation/HomeNavigator";

import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";

// const loadFonts = async () => {
//   await Font.loadAsync({
//     "SF-Pro": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
//     "SF-Pro-medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
//     "SF-Pro-semi": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
//     "SF-Pro-bold": require("./assets/fonts/SF-Pro-Display-Bold.otf")
//   });
// };

export default function App() {
  const [user, setUser] = useState({});
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  const prepareApp = async () => {
    await Font.loadAsync({
      "SF-Pro": require("./app/assets/fonts/SF-Pro-Display-Regular.otf"),
      "SF-Pro-medium": require("./app/assets/fonts/SF-Pro-Display-Medium.otf"),
      "SF-Pro-semi": require("./app/assets/fonts/SF-Pro-Display-Semibold.otf"),
      "SF-Pro-bold": require("./app/assets/fonts/SF-Pro-Display-Bold.otf")
    });

    await restoreUser();

    const images = [
      require("./app/assets/1.png"),
      require("./app/assets/2.png"),
      require("./app/assets/3.png"),
      require("./app/assets/4.png"),
      require("./app/assets/5.png"),
      require("./app/assets/bg-pattern.png")
    ];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  };

  const restoreUser = async () => {
    const userEmail = await authStorage.getEmail();
    if (userEmail) setUser({ email: userEmail });
  };

  if (!assetsLoaded) {
    return (
      <AppLoading
        startAsync={prepareApp}
        onFinish={() => setAssetsLoaded(true)}
        //onError={() => console.log("Erroooor!")}
      />
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <SafeAreaProvider>
          {!user ? <AuthNavigator /> : <HomeNavigator />}
        </SafeAreaProvider>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
