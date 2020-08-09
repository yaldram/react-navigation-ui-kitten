import { Drawer, DrawerItem, IndexPath } from "@ui-kitten/components";
import React from "react";
import {
  ImageBackground,
  ImageBackgroundProps,
  StyleSheet,
} from "react-native";

import { DrawerHomeScreenProps } from "../../navigation/home.navigator";

const DrawerHeader = (): React.ReactElement<ImageBackgroundProps> => (
  <ImageBackground
    style={styles.header}
    source={require("../../assets/image-background.jpeg")}
  />
);

export const HomeDrawerContent = (props: DrawerHomeScreenProps) => {
  const onItemSelect = (index: IndexPath): void => {
    const selectedTabRoute = props.state.routeNames[index.row];
    props.navigation.navigate(selectedTabRoute);
    props.navigation.closeDrawer();
  };

  const createDrawerItemForRoute = (route: any, index: number) => {
    const { options } = props.descriptors[route.key];
    return (
      <DrawerItem
        key={index}
        title={route.name}
        // @ts-ignore
        accessoryLeft={options.drawerIcon}
      />
    );
  };

  return (
    <Drawer header={DrawerHeader} onSelect={onItemSelect}>
      {props.state.routes.map(createDrawerItemForRoute)}
    </Drawer>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 160,
  },
});
