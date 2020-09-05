import React, { FC, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Button } from "react-native-elements";

import Card from '../../containers/card';
import AddButton from '../../containers/addBotton';
import { Todo } from '../../actions/todo';

interface TodoListProps {
  todos: Todo[];
  deleteTask?: (id: number) => void;
};

const TodoList: FC<TodoListProps> = ({
  todos = [],
  deleteTask = () => {},
}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {todos.map((todo, index) => (
          <View key={index} style={{ marginBottom: 16 }}>
            <Card title={todo.title} isDone={todo.isDone} id={index} deleteTask={deleteTask} />
          </View>
        ))}
        <AddButton />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginTop: 16,
  },
});

export default TodoList;
