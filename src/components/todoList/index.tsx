import React, { FC, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Button } from "react-native-elements";

import Card from "./card";
import AddButton from '../../containers/addBotton';

interface todo {
  title: string;
  isDone: boolean;
}

const initialTodoState: todo[] = [
  {
    title: "英単語を覚える",
    isDone: false,
  }
]

const TodoList: FC = () => {
  // const todos = [
  //   {
  //     title: "英単語を覚える",
  //     isDone: false,
  //   },
  //   {
  //     title: "GO言語の勉強",
  //     isDone: false,
  //   },
  //   {
  //     title: "積ん読本を読む",
  //     isDone: false,
  //   },
  // ];

  const [todos, setTodos] = useState(initialTodoState)

  const addTask = (title: string) => {
    const aditionalTodo: todo = {
      title: title,
      isDone: false,
    };
    setTodos(prevState => {
      const newState = prevState.concat(aditionalTodo)
      return newState;
    });
    // console.log(todos);
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {todos.map((todo, index) => (
          <View key={index} style={{ marginBottom: 16 }}>
            <Card title={todo.title} isDone={todo.isDone} />
          </View>
        ))}
        <AddButton addTask={addTask}/>
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
