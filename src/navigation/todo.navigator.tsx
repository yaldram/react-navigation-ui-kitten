import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
  MaterialTopTabNavigationProp,
} from "@react-navigation/material-top-tabs";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import React from "react";

import { GridIcon, DoneAllIcon } from "../assets/Icons";
import {
  TodoScreen,
  TodoDoneScreen,
  TodoTabBar,
  TodoDetailsRouteParams,
  TodoDetailsScreen,
} from "../screens/todo";
import { AppRoute } from "./app.routes";
import { TodoTabNavigationProp } from "./home.navigator";

type TodoNavigatorParams = {
  [AppRoute.TODO]: undefined;
  [AppRoute.TODO_DETAILS]: TodoDetailsRouteParams;
};

type TodoTabsNavigatorParams = {
  [AppRoute.TODO_IN_PROGRESS]: undefined;
  [AppRoute.TODO_DONE]: undefined;
};

export type TodoScreenProps = MaterialTopTabBarProps & {
  navigation: TodoTabNavigationProp;
};

export interface TodoInProgressScreenProps {
  navigation: CompositeNavigationProp<
    TodoTabNavigationProp &
      StackNavigationProp<TodoNavigatorParams, AppRoute.TODO_DETAILS>,
    MaterialTopTabNavigationProp<
      TodoTabsNavigatorParams,
      AppRoute.TODO_IN_PROGRESS
    >
  >;
  route: RouteProp<TodoTabsNavigatorParams, AppRoute.TODO_IN_PROGRESS>;
}

export interface TodoDoneScreenProps {
  navigation: CompositeNavigationProp<
    TodoTabNavigationProp &
      StackNavigationProp<TodoNavigatorParams, AppRoute.TODO_DETAILS>,
    MaterialTopTabNavigationProp<TodoTabsNavigatorParams, AppRoute.TODO_DONE>
  >;
  route: RouteProp<TodoTabsNavigatorParams, AppRoute.TODO_DONE>;
}

export interface TodoDetailsScreenProps {
  navigation: StackNavigationProp<TodoNavigatorParams, AppRoute.TODO_DETAILS>;
  route: RouteProp<TodoNavigatorParams, AppRoute.TODO_DETAILS>;
}

const Stack = createStackNavigator<TodoNavigatorParams>();
const TopTab = createMaterialTopTabNavigator<TodoTabsNavigatorParams>();

const TodosTabNavigator = () => (
  // @ts-ignore: `tabBar` also contains a DrawerNavigationProp & BottomTabNavigationProp
  <TopTab.Navigator tabBar={(props) => <TodoTabBar {...props} />}>
    <TopTab.Screen
      name={AppRoute.TODO_IN_PROGRESS}
      component={TodoScreen}
      options={{ title: "IN PROGRESS", tabBarIcon: GridIcon }}
    />
    <TopTab.Screen
      name={AppRoute.TODO_DONE}
      component={TodoDoneScreen}
      options={{ title: "DONE", tabBarIcon: DoneAllIcon }}
    />
  </TopTab.Navigator>
);

export function TodoNavigator() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={AppRoute.TODO} component={TodosTabNavigator} />
      <Stack.Screen
        name={AppRoute.TODO_DETAILS}
        component={TodoDetailsScreen}
      />
    </Stack.Navigator>
  );
}
