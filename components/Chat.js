import { Text, View, FlatList, TouchableOpacity } from 'react-native';

export function Chat({ route, navigation }) {
  const { id, name, description } = route.params.item;

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text>Chat with user {name} (ID: {id}) {description}</Text>
    </TouchableOpacity>
  );
}