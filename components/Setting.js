import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Setting = () => {
  const [data, setData] = useState('React');

  return (
    <View style={styles.container}>
      <Text>Stored value:</Text>
      <Text style={styles.value}>{data}</Text>
      <Button
        onPress={() => {
          setData('React');
        }}
        title="Store 'React'"
      />
      <Button
        onPress={() => {
          setData('Native');
        }}
        title="Store 'Native'"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  value: {
    fontSize: 24,
    marginVertical: 12,
  },
});

export default Setting;