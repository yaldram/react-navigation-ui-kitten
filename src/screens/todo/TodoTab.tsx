import { Divider, Tab, TabBar } from "@ui-kitten/components";
import React from "react";

import { MenuIcon } from "../../assets/Icons";
import { SafeAreaInset, SafeAreaLayout } from "../../components/SafeAreaLayout";
import { ToolBar } from "../../components/Toolbar";
import { TodoScreenProps } from "../../navigation/todo.navigator";

export function TodoTabBar(props: TodoScreenProps) {
  // const onMenuItemSelect = (menu: any) => {
  //   const { [index]: selectedItem } = menu;

  //   switch (selectedItem.title) {
  //     case "Log Out":
  //       props.navigation.navigate(AppRoute.AUTH);
  //       break;
  //     default:
  //       props.navigation.navigate(selectedItem.title);
  //       break;
  //   }
  // };

  const onTabSelect = (index: number): void => {
    const selectedTabRoute: string = props.state.routeNames[index];
    props.navigation.navigate(selectedTabRoute);
  };

  const createNavigationTabForRoute = (route: any) => {
    const { options } = props.descriptors[route.key];
    return (
      <Tab
        key={route.key}
        title={options.title}
        // @ts-ignore: all Tab Screens options strictly have UI Kitten Icon
        icon={options.tabBarIcon}
      />
    );
  };

  // const renderToolbarMenu = (): React.ReactElement => (
  //   <>
  //     <MenuItem title="About" accessoryLeft={InfoIcon} />
  //     <MenuItem title="Log Out" accessoryLeft={LogoutIcon} />
  //   </>
  // );

  return (
    <SafeAreaLayout insets={SafeAreaInset.TOP}>
      <ToolBar
        title="React Navigation"
        // onMenuItemSelect={onMenuItemSelect}
        // menu={renderToolbarMenu}
        backIcon={MenuIcon}
        onBackPress={props.navigation.toggleDrawer}
      />
      <TabBar selectedIndex={props.state.index} onSelect={onTabSelect}>
        {props.state.routes.map(createNavigationTabForRoute)}
      </TabBar>
      <Divider />
    </SafeAreaLayout>
  );
}
