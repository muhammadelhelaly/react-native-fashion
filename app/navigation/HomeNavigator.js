import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer"; //Doc: https://reactnavigation.org/docs/drawer-based-navigation

import routes from "../config/routes";
import Main from "../Screens/Main";

const Drawer = createDrawerNavigator();

const HomeNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name={routes.HOME} component={Main} />
    {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
  </Drawer.Navigator>
);

export default HomeNavigator;
