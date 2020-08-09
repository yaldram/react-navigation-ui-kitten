import {
  BottomNavigation,
  BottomNavigationTab,
  Divider,
} from "@ui-kitten/components";
import React from "react";

import { SafeAreaLayout, SafeAreaInset } from "../../components/SafeAreaLayout";
import { BottonHomeScreenProps } from "../../navigation/home.navigator";

export function HomeTabBar(props: BottonHomeScreenProps) {
  const onSelect = (index: number): void => {
    const selectedTabRoute: string = props.state.routeNames[index];
    props.navigation.navigate(selectedTabRoute);
  };

  const createNavigationTabForRoute = (route: any) => {
    const { options } = props.descriptors[route.key];
    return (
      <BottomNavigationTab
        key={route.key}
        title={options.title}
        // @ts-ignore: all Tab Screens strictly have UI Kitten Icon
        icon={options.tabBarIcon}
      />
    );
  };

  return (
    <SafeAreaLayout insets={SafeAreaInset.BOTTOM}>
      <Divider />
      <BottomNavigation
        appearance="noIndicator"
        selectedIndex={props.state.index}
        onSelect={onSelect}
      >
        {props.state.routes.map(createNavigationTabForRoute)}
      </BottomNavigation>
    </SafeAreaLayout>
  );
}
