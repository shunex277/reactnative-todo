import React, { FC, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Button } from "react-native-elements";

import Card from "./card";
import AddButton from '../../containers/addBotton';
import { Todo } from '../../actions/todo';

// const initialTodoState: Todo[] = [
//   {
//     title: "英単語を覚える",
//     isDone: false,
//   }
// ];

interface TodoListProps {
  todos: Todo[];
};

const TodoList: FC<TodoListProps> = ({
  todos = [],
}) => {
  // const [todos, setTodos] = useState(initialTodoState)

  // const addTask = (title: string) => {
  //   const aditionalTodo: Todo = {
  //     title: title,
  //     isDone: false,
  //   };
  //   setTodos(prevState => {
  //     const newState = prevState.concat(aditionalTodo)
  //     return newState;
  //   });
  //   // console.log(todos);
  // }

  return (
    <ScrollView>
      <View style={styles.container}>
        {todos.map((todo, index) => (
          <View key={index} style={{ marginBottom: 16 }}>
            <Card title={todo.title} isDone={todo.isDone} />
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
