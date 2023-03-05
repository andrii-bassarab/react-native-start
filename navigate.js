import React from 'react';
import { TodoList } from './components/TodoList';
import { Buttons } from './components/Buttons';
import Setting from './components/Setting';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <NavigationContainer initialRouteName='TodoList'>
      <Stack.Navigator>
        <Stack.Screen
          name='Setting'
          component={Setting}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}