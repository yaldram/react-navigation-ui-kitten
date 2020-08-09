import { CompositeNavigationProp } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import React from "react";

import { ProfileScreen } from "../screens/profile";
import { AppRoute } from "./app.routes";
import { ProfileTabNavigationProp } from "./home.navigator";

type ProfileNavigatorParams = {
  [AppRoute.PROFILE]: undefined;
};

export interface ProfileScreenProps {
  navigation: CompositeNavigationProp<
    ProfileTabNavigationProp,
    StackNavigationProp<ProfileNavigatorParams, AppRoute.PROFILE>
  >;
}

const Stack = createStackNavigator<ProfileNavigatorParams>();

export function ProfileNavigator() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={AppRoute.PROFILE} component={ProfileScreen} />
    </Stack.Navigator>
  );
}
