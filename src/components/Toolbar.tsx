import {
  OverflowMenu,
  StyleType,
  TopNavigation,
  TopNavigationAction,
  TopNavigationActionElement,
  TopNavigationProps,
} from "@ui-kitten/components";
import React from "react";
import { ImageProps } from "react-native";

import { BackIcon, MoreVerticalIcon } from "../assets/Icons";

export interface IToolbarProps extends TopNavigationProps {
  menu?: () => React.ReactElement;
  menuIcon?: (style: StyleType) => React.ReactElement<ImageProps>;
  backIcon?: (style: StyleType) => React.ReactElement<ImageProps>;
  onBackPress?: () => void;
}

export function ToolBar(props: IToolbarProps): TopNavigationActionElement {
  const {
    menu,
    backIcon,
    menuIcon,
    onBackPress,
    ...topNavigationProps
  } = props;

  const [menuVisible, setMenuVisible] = React.useState(false);

  const onMenuSelect = () => {
    setMenuVisible(false);
  };

  const onMenuActionPress = () => {
    setMenuVisible((menuVisible) => !menuVisible);
  };

  const renderMenuAnchorAction = (): TopNavigationActionElement => (
    <TopNavigationAction
      // @ts-ignore
      icon={props.backIcon || MoreVerticalIcon}
      onPress={onMenuActionPress}
    />
  );

  const renderMenuAction = (): TopNavigationActionElement => (
    <OverflowMenu
      visible={menuVisible}
      anchor={renderMenuAnchorAction}
      placement="bottom end"
      onSelect={onMenuSelect}
      onBackdropPress={onMenuActionPress}
    >
      {menu && menu()}
    </OverflowMenu>
  );

  const renderBackAction = (): TopNavigationActionElement => (
    <TopNavigationAction
      // @ts-ignore
      icon={props.backIcon || BackIcon}
      onPress={onBackPress}
    />
  );

  return (
    <TopNavigation
      {...topNavigationProps}
      alignment="center"
      accessoryLeft={onBackPress && renderBackAction}
      accessoryRight={menu && renderMenuAction}
    />
  );
}
