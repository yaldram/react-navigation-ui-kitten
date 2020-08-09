import { RouteProp } from "@react-navigation/core";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import React from "react";

import {
  SignUpScreen,
  SignInScreen,
  ResetPasswordScreen,
} from "../screens/auth";
import { AppNavigatorParams } from "./app.navigator";
import { AppRoute } from "./app.routes";

type AuthNavigatorParams = AppNavigatorParams & {
  [AppRoute.SIGN_IN]: undefined;
  [AppRoute.SIGN_UP]: undefined;
  [AppRoute.RESET_PASSWORD]: undefined;
};

export interface SignInScreenProps {
  navigation: StackNavigationProp<AuthNavigatorParams, AppRoute.SIGN_IN>;
  route: RouteProp<AuthNavigatorParams, AppRoute.SIGN_IN>;
}

export interface SignUpScreenProps {
  navigation: StackNavigationProp<AuthNavigatorParams, AppRoute.SIGN_UP>;
  route: RouteProp<AuthNavigatorParams, AppRoute.SIGN_IN>;
}

export interface ResetPasswordScreenProps {
  navigation: StackNavigationProp<AuthNavigatorParams, AppRoute.RESET_PASSWORD>;
  route: RouteProp<AuthNavigatorParams, AppRoute.RESET_PASSWORD>;
}

const Stack = createStackNavigator<AuthNavigatorParams>();

export const AuthNavigator = (): React.ReactElement => (
  <Stack.Navigator initialRouteName={AppRoute.SIGN_IN} headerMode="none">
    <Stack.Screen name={AppRoute.SIGN_IN} component={SignInScreen} />
    <Stack.Screen name={AppRoute.SIGN_UP} component={SignUpScreen} />
    <Stack.Screen
      name={AppRoute.RESET_PASSWORD}
      component={ResetPasswordScreen}
    />
  </Stack.Navigator>
);
