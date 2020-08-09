import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerNavigationProp,
} from "@react-navigation/drawer";
import { RouteProp } from "@react-navigation/native";
import React from "react";

import { HomeIcon, InfoIcon } from "../assets/Icons";
import { HomeDrawerContent, Home, AboutScreen } from "../screens/home";
import { AppRoute } from "./app.routes";

type HomeDrawerNavigatorParams = {
  [AppRoute.HOME]: undefined;
  [AppRoute.ABOUT]: undefined;
};

const Drawer = createDrawerNavigator<HomeDrawerNavigatorParams>();

export type DrawerHomeScreenProps = DrawerContentComponentProps & {
  navigation: DrawerNavigationProp<HomeDrawerNavigatorParams, AppRoute.HOME>;
};

export interface AboutScreenProps {
  navigation: DrawerNavigationProp<HomeDrawerNavigatorParams, AppRoute.ABOUT>;
  route: RouteProp<HomeDrawerNavigatorParams, AppRoute.ABOUT>;
}

export function HomeNavigator() {
  return (
    // @ts-ignore
    <Drawer.Navigator drawerContent={HomeDrawerContent}>
      <Drawer.Screen
        name={AppRoute.HOME}
        component={Home}
        options={{ title: "Home", drawerIcon: HomeIcon }}
      />
      <Drawer.Screen
        name={AppRoute.ABOUT}
        component={AboutScreen}
        options={{ title: "About", drawerIcon: InfoIcon }}
      />
    </Drawer.Navigator>
  );
}
