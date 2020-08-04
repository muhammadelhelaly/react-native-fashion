import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import routes from "../config/routes";
import OnBoarding from "../Screens/Auth/OnBoarding";
import Welcome from "../Screens/Auth/Welcome";
import Login from "../Screens/Auth/Login";
import SignUp from "../Screens/Auth/SignUp";
import ForgetPassword from "../Screens/Auth/ForgetPassword";
import PasswordChanged from "../Screens/Auth/PasswordChanged";

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
    <Stack.Screen
      name={routes.FORGETPASSWORD}
      component={ForgetPassword}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.PASSWORDCHANGED}
      component={PasswordChanged}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
