import { Button, Layout, LayoutElement, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, View } from "react-native";
import { EdgeInsets, useSafeArea } from "react-native-safe-area-context";

import { ImageOverlay } from "../../components/ImageOverlay";
import { ProgressBar } from "../../components/ProgressBar";
import { ToolBar } from "../../components/Toolbar";
import { Todo } from "../../data/todo.model";
import { TodoDetailsScreenProps } from "../../navigation/todo.navigator";

export type TodoDetailsRouteParams = {
  todo: Todo;
};

export const TodoDetailsScreen = (
  props: TodoDetailsScreenProps
): LayoutElement => {
  const { todo } = props.route.params;
  const insets: EdgeInsets = useSafeArea();

  return (
    <>
      <ImageOverlay
        style={[styles.appBar, { paddingTop: insets.top }]}
        source={require("../../assets/image-background.jpeg")}
      >
        <ToolBar appearance="control" onBackPress={props.navigation.goBack} />
      </ImageOverlay>
      <Layout style={styles.container}>
        <View style={styles.detailsContainer}>
          <Text style={styles.title} category="h4">
            {todo.title}
          </Text>
          <ProgressBar
            style={styles.progressBar}
            progress={todo.progress}
            text={`${todo.progress}%`}
          />
          <Text style={styles.title}>{todo.description}</Text>
        </View>
        <Button onPress={props.navigation.goBack}>COMPLETE</Button>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
  detailsContainer: {
    flex: 1,
  },
  appBar: {
    height: 192,
  },
  title: {
    marginVertical: 4,
  },
  progressBar: {
    width: "50%",
    marginVertical: 16,
  },
});
