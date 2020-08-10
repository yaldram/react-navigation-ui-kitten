import {
  Input,
  Layout,
  List,
  ListElement,
  ListItem,
  ListItemElement,
  StyleService,
  Text,
  useStyleSheet,
} from "@ui-kitten/components";
import React from "react";
import { ListRenderItemInfo } from "react-native";

import { SearchIcon } from "../../assets/Icons";
import { ProgressBar } from "../../components/ProgressBar";
import { Todo } from "../../data/todo.model";
import { AppRoute } from "../../navigation/app.routes";
import { TodoInProgressScreenProps } from "../../navigation/todo.navigator";

const allTodos = Todo.mock();

export const TodoScreen = (props: TodoInProgressScreenProps): ListElement => {
  const [todos, setTodos] = React.useState<Todo[]>(allTodos);
  const [query, setQuery] = React.useState<string>("");
  const styles = useStyleSheet(themedStyles);

  const onChangeQuery = (query: string): void => {
    const nextTodos: Todo[] = allTodos.filter((todo: Todo): boolean => {
      return todo.title.toLowerCase().includes(query.toLowerCase());
    });

    setTodos(nextTodos);
    setQuery(query);
  };

  const navigateTodoDetails = (todoIndex: number): void => {
    const { [todoIndex]: todo } = todos;
    props.navigation.navigate(AppRoute.TODO_DETAILS, { todo });
  };

  const renderTodo = ({
    item,
    index,
  }: ListRenderItemInfo<Todo>): ListItemElement => (
    <ListItem style={styles.item} onPress={() => navigateTodoDetails(index)}>
      <Text category="s1">{item.title}</Text>
      <Text appearance="hint" category="c1">
        {item.description}
      </Text>
      <ProgressBar
        style={styles.itemProgressBar}
        progress={item.progress}
        text={`${item.progress}%`}
      />
    </ListItem>
  );

  return (
    <Layout style={styles.container}>
      <Input
        style={styles.filterInput}
        placeholder="Search"
        value={query}
        accessoryLeft={SearchIcon}
        onChangeText={onChangeQuery}
      />
      <List style={styles.list} data={todos} renderItem={renderTodo} />
    </Layout>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  filterInput: {
    marginTop: 16,
    marginHorizontal: 8,
  },
  list: {
    flex: 1,
    backgroundColor: "background-basic-color-1",
  },
  item: {
    flexDirection: "column",
    alignItems: "flex-start",
    paddingHorizontal: 12,
  },
  itemProgressBar: {
    width: "50%",
    marginVertical: 12,
  },
});
