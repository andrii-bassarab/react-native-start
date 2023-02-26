import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, FlatList, View } from 'react-native';

export const TodoList = ({ navigation }) => {
  const [items, setItems] = useState([
    {title: 'learn react native'},
    {title: 'good finish curr project'},
    {title: 'become good developer'}
  ])

  return (
    <View>
      <FlatList 
        data={items} 
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Buttons', item)}>
            <Text style={styles.item}>{item.title}</Text>
          </TouchableOpacity>
        )} 
        keyExtractor={(item) => item.title} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 'auto',
    marginTop: 10,
  }})