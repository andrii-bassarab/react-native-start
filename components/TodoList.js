import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, FlatList, View, StatusBar } from 'react-native';

export const TodoList = ({ navigation }) => {
  const [items, setItems] = useState([
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ]);

  const oncClick = () => navigation.navigate('Setting');

  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title} onPress={oncClick}>{title}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={items}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
})