import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Button, Pressable, TouchableHighlight, TouchableOpacity, FlatList  } from 'react-native';
import MainStack from './navigate';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button title='some button' />
      <Text>Todo App</Text>
      <Text>My Todo</Text>
      <MainStack />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: 'black',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    width: '100%',
    margin: 3,
    position: 'absolute',
    top: 0,
  },
});
