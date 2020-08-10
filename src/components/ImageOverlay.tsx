import React from "react";
import {
  ImageBackground,
  ImageBackgroundProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

interface ImageOverlayStyle extends ViewStyle {
  overlayColor?: string;
}

type Override<T, U> = Omit<T, keyof U> & U;

type ImageOverlayProps = Override<
  ImageBackgroundProps,
  {
    style: StyleProp<ImageOverlayStyle>;
  }
>;

export type ImageOverlayElement = React.ReactElement<ImageOverlayProps>;

const DEFAULT_OVERLAY_COLOR = "rgba(0, 0, 0, 0.15)";

export function ImageOverlay(props: ImageOverlayProps) {
  const getOverlayColor = (source: string | undefined): string => {
    return source || DEFAULT_OVERLAY_COLOR;
  };

  // @ts-ignore
  const { style, children, ...restProps } = props;

  const {
    overlayColor: derivedOverlayColor,
    ...containerStyle
  } = StyleSheet.flatten(style);

  const overlayColor: string = getOverlayColor(derivedOverlayColor);

  return (
    <ImageBackground style={containerStyle} {...restProps}>
      <View style={[styles.overlay, { backgroundColor: overlayColor }]} />
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: DEFAULT_OVERLAY_COLOR,
    ...StyleSheet.absoluteFillObject,
  },
});
