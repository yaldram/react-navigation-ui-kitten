import { light, mapping } from "@eva-design/eva";
import { NavigationContainer } from "@react-navigation/native";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { AppNavigator } from "./src/navigation/app.navigator";
import { AppRoute } from "./src/navigation/app.routes";

export default () => {
  // This value is used to determine the initial screen
  const isAuthorized: boolean = false;

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={light}>
        <SafeAreaProvider>
          <NavigationContainer>
            <AppNavigator
              initialRouteName={isAuthorized ? AppRoute.HOME : AppRoute.AUTH}
            />
          </NavigationContainer>
        </SafeAreaProvider>
      </ApplicationProvider>
    </>
  );
};
