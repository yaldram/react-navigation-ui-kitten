import { LayoutProps, Layout } from "@ui-kitten/components";
import React from "react";
import { useSafeArea } from "react-native-safe-area-context";

export enum SafeAreaInset {
  TOP = "top",
  BOTTOM = "bottom",
}

type InsetsProp = SafeAreaInset | SafeAreaInset[];

interface ISafeAreaLayoutProps extends LayoutProps {
  insets?: InsetsProp;
}

export type SafeAreaLayoutElement = React.ReactElement<ISafeAreaLayoutProps>;

export function SafeAreaLayout(props: ISafeAreaLayoutProps) {
  const safeAreaInsets = useSafeArea();

  const { insets, style, ...layoutProps } = props;

  const toStyleProp = (inset: SafeAreaInset) => {
    switch (inset) {
      case SafeAreaInset.BOTTOM:
        return { paddingBottom: safeAreaInsets.bottom };
      case SafeAreaInset.TOP:
        return { paddingTop: safeAreaInsets.top };
    }
  };

  const createInsets = () =>
    //@ts-ignore
    React.Children.map(insets, toStyleProp);

  return <Layout {...layoutProps} style={[style, createInsets()]} />;
}
