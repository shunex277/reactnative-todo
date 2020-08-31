import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, FlatList, Text, Dimensions } from 'react-native';

import Header from './src/components/header';
import Card from './src/components/todoList/card';
import TodoList from './src/components/todoList';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="TO DO REDUCER"/>
      <TodoList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
