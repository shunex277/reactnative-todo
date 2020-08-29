import React, { FC } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import Card from "../card";

const TodoList: FC = () => {
  const todos = [
    {
      title: "英単語を覚える",
      isDone: false,
    },
    {
      title: "GO言語の勉強",
      isDone: false,
    },
    {
      title: "積ん読本を読む",
      isDone: false,
    },
    {
      title: "積ん読本を読む",
      isDone: false,
    },
    {
      title: "積ん読本を読む",
      isDone: false,
    },
    {
      title: "積ん読本を読む",
      isDone: false,
    },
    {
      title: "積ん読本を読む",
      isDone: false,
    },
    {
      title: "積ん読本を読む",
      isDone: false,
    },
    {
      title: "積ん読本を読む",
      isDone: false,
    },
    {
      title: "積ん読本を読む",
      isDone: false,
    },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        {todos.map((todo, index) => (
          <View key={index} style={{ marginBottom: 16 }}>
            <Card title={todo.title} isDone={todo.isDone} />
          </View>
        ))}
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
