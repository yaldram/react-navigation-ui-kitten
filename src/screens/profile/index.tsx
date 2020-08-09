import { Divider, Layout, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";

import { MenuIcon } from "../../assets/Icons";
import { SafeAreaLayout, SafeAreaInset } from "../../components/SafeAreaLayout";
import { ToolBar } from "../../components/Toolbar";
import { ProfileScreenProps } from "../../navigation/profile.navigator";

export function ProfileScreen(props: ProfileScreenProps) {
  return (
    <SafeAreaLayout style={styles.safeArea} insets={SafeAreaInset.TOP}>
      <ToolBar
        title="React Navigation"
        backIcon={MenuIcon}
        onBackPress={props.navigation.toggleDrawer}
      />
      <Divider />
      <Layout style={styles.container}>
        <Text category="h1">PROFILE</Text>
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
