import { StyleSheet, Text, Button, Pressable } from 'react-native';
import { View } from 'react-native-web';

export const Buttons = ({ navigation, route }) => {
  const changeScreen = () => {
    navigation.navigate('TodoList')
  }

  return (
    <View>
      <Pressable style={styles.button} onPress={changeScreen}>
        <Text style={styles.text}>Another Button</Text>
      </Pressable>
      <Text>{route.params}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
  }})