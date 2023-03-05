import * as React from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Buttons} from './components/Buttons';
import {TodoList} from './components/TodoList';
import Setting from './components/Setting';
import MainStack from './navigate';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
        // headerShown: false,
      }}
      // drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Notifications" options={{ drawerLabel: 'notif'}} component={Notifications} />
      <Drawer.Screen name="Buttons" component={Buttons} />
      <Drawer.Screen name="TodoList" component={TodoList} />
      <Drawer.Screen name="Setting" component={Setting} options={{drawerItemStyle: {display: 'none'}}} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        }}
        screenOptions={{headerShown: false}}
      >
        <Tab.Screen name="Setting" component={Setting} />
        <Tab.Screen name="Draw" component={MyDrawer} />
      </Tab.Navigator>
    </NavigationContainer>
    {/* <MainStack/> */}
    </>
  );
}

// import React from 'react';
// import { Button, View, Text } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// const Tab = createBottomTabNavigator();
// function HomeScreen() {
//   return (
//     <Tab.Navigator
//       tabBarOptions={{
//       activeTintColor: 'tomato',
//       inactiveTintColor: 'gray',
//       }}
//     >
//         <Tab.Screen name="TabA" component={TabAScreen} />
//         <Tab.Screen name="TabB" component={TabBScreen} />
//     </Tab.Navigator>
//   );
// }
// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>No New Notifications!</Text>
//       <Button 
//       onPress={() => navigation.goBack()}
//       title="Go back home"
//       />
//     </View>
//   );
// }
// const Stack = createNativeStackNavigator();
// function TabAScreen() {
//   return (
//     <Stack.Navigator useLegacyImplementation>
//       <Stack.Screen name="TabA Home" component={TabADetailsScreen} />
//       <Stack.Screen name="TabA Details" component={Details} />
//     </Stack.Navigator>
//   );
// }
// function TabADetailsScreen({navigation}) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
//       <Text>
//         Welcome to TabA page!
//       </Text>
//       <Button 
//       onPress={() => navigation.navigate('TabA Details')}
//       title="Go to TabA Details"
//       />
//     </View>
//   );
// }
// function Details() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
//       <Text>
//         TabA Details here!
//       </Text>
//     </View>
//   );
// }
// function TabBScreen() {
//   return (
//     <View>
//       <Text style={{textAlign: 'center', marginTop: 300}}>
//         Welcome to TabB page!
//       </Text>
//     </View>
//   );
// }
// const Drawer = createDrawerNavigator();
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   )
// }