import { Divider, Layout, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";

import { SafeAreaLayout, SafeAreaInset } from "../../components/SafeAreaLayout";
import { ToolBar } from "../../components/Toolbar";
import { AboutScreenProps } from "../../navigation/home.navigator";

export function AboutScreen(props: AboutScreenProps) {
  return (
    <SafeAreaLayout insets={SafeAreaInset.TOP} style={styles.safeArea}>
      <ToolBar title="React Navigation" onBackPress={props.navigation.goBack} />
      <Divider />
      <Layout style={styles.container}>
        <Text category="h1">ABOUT</Text>
      </Layout>
    </SafeAreaLayout>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
