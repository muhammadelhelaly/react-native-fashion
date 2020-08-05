import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer"; //Doc: https://reactnavigation.org/docs/drawer-based-navigation

import routes from "../config/routes";
import Main from "../Screens/Main";
import DrawerContent from "../components/Drawer";
import OutfitsIdeas from "../Screens/OutfitsIdeas";

const Drawer = createDrawerNavigator();

const HomeNavigator = () => (
  <Drawer.Navigator
    drawerContent={props => <DrawerContent {...props} />}
    drawerStyle={{ width: "100%" }}
  >
    <Drawer.Screen name={routes.HOME} component={Main} />
    <Drawer.Screen name={routes.OUTFITSIDEAS} component={OutfitsIdeas} />
    {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
  </Drawer.Navigator>
);

export default HomeNavigator;
