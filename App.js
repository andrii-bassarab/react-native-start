import React from 'react';
import { View, FlatList, TouchableOpacity, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Buttons } from './components/Buttons';
import { TodoList } from './components/TodoList';
import { Chat } from './components/Chat';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
};

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
};

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
      <Drawer.Screen name="Notifications" options={{ drawerLabel: 'notif' }} component={Notifications} />
      <Drawer.Screen name="Buttons" component={Buttons} />
      <Drawer.Screen name="TodoList" component={TodoList} />
    </Drawer.Navigator>
  );
};

function HomeScreen({ navigation }) {
  const data = [
    { id: 1, name: 'Item 1', description: 'Description of Item 1' },
    { id: 2, name: 'Item 2', description: 'Description of Item 2' },
    { id: 3, name: 'Item 3', description: 'Description of Item 3' },
  ];

  return (
    <View>
      <FlatList data={data} renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Details', { item });
          }}
        >
          <View>
            <Text>{item.name}</Text>
          </View>
        </TouchableOpacity>)} />
    </View>
  );
};

function DetailsScreen({ route }) {
  return (
    <Stack.Navigator initialRouteName='InnerDetails'>
      <Stack.Screen
        name="InnerDetails"
        component={InnerDetailsScreen}
        initialParams={route.params}
      />
      <Stack.Screen name="Chat" component={Chat} initialParams={route.params}/>
    </Stack.Navigator>
  );
};

function InnerDetailsScreen({ route, navigation }) {
  const { id, name } = route.params.item;

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
      <Text>Details for {name} (ID: {id})</Text>
    </TouchableOpacity>
  );
};

const Home = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
        // screenOptions={{ headerShown: false }}
      >
        <Tab.Screen name="Home" component={Home} options={{ tabBarVisible: false }} />
        <Tab.Screen name="Draw" component={MyDrawer} options={{ tabBarVisible: false }} />
      </Tab.Navigator>
    </NavigationContainer >
  );
};

export default App;
