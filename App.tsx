import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import Header from './src/components/header';
import TodoList from './src/components/todoList';
import todoReducer, { initialState } from './src/reducer';

const store = createStore(todoReducer, initialState);

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header title="TO DO REDUCER" />
        <TodoList />
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
