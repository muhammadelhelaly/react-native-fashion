import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import routes from "../config/routes";
import OnBoarding from "../src/Auth/OnBoarding";
import Welcome from "../src/Auth/Welcome";
import Login from "../src/Auth/Login";
import SignUp from "../src/Auth/SignUp";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
  //   screenOptions={{
  //     headerTintColor: colors.white,
  //     headerStyle: {
  //       backgroundColor: colors.primary
  //     },
  //   }}
  >
    <Stack.Screen
      name={routes.ONBOARDING}
      component={OnBoarding}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.WELCOME}
      component={Welcome}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.LOGIN}
      component={Login}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.SIGNUP}
      component={SignUp}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
