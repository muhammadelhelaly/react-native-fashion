import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import routes from "../config/routes";
import ForgetPassword from "../src/Auth/ForgetPassword";

const Drawer = createDrawerNavigator();

const HomeNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name={routes.FORGETPASSWORD} component={ForgetPassword} />
    {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
  </Drawer.Navigator>
);

export default HomeNavigator;
