import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, ThemeProvider, Header } from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.container}>
      <Header
        centerComponent={{ text: 'TO DO REDUCER', style: { color: '#fff' } }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
