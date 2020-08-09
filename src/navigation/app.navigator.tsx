import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { AppRoute } from "./app.routes";
import { AuthNavigator } from "./auth.navigator";
import { HomeNavigator } from "./home.navigator";

export type AppNavigatorParams = {
  [AppRoute.AUTH]: undefined;
  [AppRoute.HOME]: undefined;
};

const Stack = createStackNavigator<AppNavigatorParams>();

type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

export function AppNavigator(props: StackNavigatorProps) {
  return (
    <Stack.Navigator {...props} headerMode="none">
      <Stack.Screen name={AppRoute.AUTH} component={AuthNavigator} />
      <Stack.Screen name={AppRoute.HOME} component={HomeNavigator} />
    </Stack.Navigator>
  );
}
