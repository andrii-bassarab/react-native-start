export function Detail({ route }) {
  const { id, name } = route.params;

  return (
    <View>
      <Text>Details for {name} (ID: {id})</Text>
    </View>
  );
}