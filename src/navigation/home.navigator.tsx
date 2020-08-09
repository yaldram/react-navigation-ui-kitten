import {
  createBottomTabNavigator,
  BottomTabBarButtonProps,
  BottomTabNavigationProp,
  BottomTabBarProps,
} from "@react-navigation/bottom-tabs";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerNavigationProp,
} from "@react-navigation/drawer";
import { RouteProp, CompositeNavigationProp } from "@react-navigation/native";
import React from "react";

import { HomeIcon, InfoIcon, LayoutIcon, PersonIcon } from "../assets/Icons";
import { HomeDrawerContent, AboutScreen } from "../screens/home";
import { HomeTabBar } from "../screens/home/HomeTabBar";
import { AppRoute } from "./app.routes";
import { ProfileNavigator } from "./profile.navigator";
import { TodoNavigator } from "./todo.navigator";

type HomeDrawerNavigatorParams = {
  [AppRoute.HOME]: undefined;
  [AppRoute.ABOUT]: undefined;
};

type HomeBottomTabsNavigatorParams = {
  [AppRoute.TODO]: undefined;
  [AppRoute.PROFILE]: undefined;
};

export type TodoTabNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<HomeBottomTabsNavigatorParams, AppRoute.TODO>,
  DrawerNavigationProp<HomeDrawerNavigatorParams, AppRoute.HOME>
>;

export type ProfileTabNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<HomeBottomTabsNavigatorParams, AppRoute.PROFILE>,
  DrawerNavigationProp<HomeDrawerNavigatorParams, AppRoute.HOME>
>;

const Drawer = createDrawerNavigator<HomeDrawerNavigatorParams>();
const BottomTab = createBottomTabNavigator<HomeBottomTabsNavigatorParams>();

export type DrawerHomeScreenProps = DrawerContentComponentProps & {
  navigation: DrawerNavigationProp<HomeDrawerNavigatorParams, AppRoute.HOME>;
};

export type BottonHomeScreenProps = BottomTabBarProps & {
  navigation: TodoTabNavigationProp;
};

export interface AboutScreenProps {
  navigation: DrawerNavigationProp<HomeDrawerNavigatorParams, AppRoute.ABOUT>;
  route: RouteProp<HomeDrawerNavigatorParams, AppRoute.ABOUT>;
}

function HomeBottomNavigator() {
  return (
    // @ts-ignore: `tabBar` also contains a DrawerNavigationProp
    <BottomTab.Navigator tabBar={HomeTabBar}>
      <BottomTab.Screen
        name={AppRoute.TODO}
        component={TodoNavigator}
        options={{ title: "TODO", tabBarIcon: LayoutIcon }}
      />
      <BottomTab.Screen
        name={AppRoute.PROFILE}
        component={ProfileNavigator}
        options={{ title: "PROFILE", tabBarIcon: PersonIcon }}
      />
    </BottomTab.Navigator>
  );
}

export function HomeNavigator() {
  return (
    // @ts-ignore
    <Drawer.Navigator drawerContent={HomeDrawerContent}>
      <Drawer.Screen
        name={AppRoute.HOME}
        component={HomeBottomNavigator}
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
