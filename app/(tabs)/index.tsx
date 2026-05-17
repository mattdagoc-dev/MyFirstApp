import { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/matt.jpeg')}
        style={styles.image}
      />

      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <Text style={styles.greeting}>
        {name === '' ? 'Please enter your name' : `Hello, ${name}!`}
      </Text>

      <Text style={styles.message}>
        {count > 0
          ? `${name || 'User'}, you tapped ${count} times!`
          : 'Tap the + button to start'}
      </Text>

      <View style={styles.buttonContainer}>
        <Button title="+" onPress={() => setCount(count + 1)} />
        <Button title="-" onPress={() => setCount(count - 1)} />
        <Button title="RESET" onPress={() => setCount(0)} />
      </View>
    </View>
  );
}

// I updated my profile card into a simple interactive page.
// I added name input, greeting message, counter buttons, and dynamic messages.
// Date of change: May 17, 2026

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    width: '85%',
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  greeting: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '70%',
    gap: 8,
  },
});