import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import Header from './src/components/header';
import TodoList from './src/containers/todoList';
import todoReducer, { initialState } from './src/reducer';
import ReduceButton from "./src/containers/reduceButton";

const store = createStore(todoReducer, initialState);

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header title="TO DO REDUCER" />
        <TodoList />
        <ReduceButton/>
      </View>
    </Provider>
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
