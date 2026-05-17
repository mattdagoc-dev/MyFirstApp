import { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [name, setName] = useState('');

  return (
    <View style={styles.screen}>
      <Image
        source={{ uri: 'https://picsum.photos/200' }}
        style={styles.photo}
      />

      <TextInput
        placeholder="Type your name..."
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <Text style={styles.greeting}>
        Hello, {name}!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 18,
  },
  input: {
    width: 220,
    height: 45,
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 18,
    backgroundColor: '#fff',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});