import React from 'react';
import { TodoList } from './components/TodoList';
import { Buttons } from './components/Buttons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Buttons'
          component={Buttons}
          options={{ title: 'Buttons' }}
        />
        <Stack.Screen
          name='TodoList'
          component={TodoList}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}