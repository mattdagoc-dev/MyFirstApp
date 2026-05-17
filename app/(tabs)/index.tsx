import { View, Text, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://picsum.photos/200' }}
        style={styles.photo}
      />

      <Text style={styles.name}>Matthew Rafael Dagoc</Text>
      <Text style={styles.course}>BMMA Student</Text>

      <Text style={styles.bio}>
        I am a multimedia arts student who enjoys exploring design, creativity,
        visual storytelling, and rdigital media. I aim to improve my skills in
        creating meaningful and visually engaging outputs.
      </Text>
    </View>
  );
}

// I created a profile card screen with my photo, name, course, and short bio.
// Date of change: May 17, 2026

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f4f4f4',
  },
  photo: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 6,
    textAlign: 'center',
  },
  course: {
    fontSize: 18,
    marginBottom: 16,
    color: '#555',
    textAlign: 'center',
  },
  bio: {
    fontSize: 15,
    color: '#333',
    textAlign: 'center',
    lineHeight: 22,
    maxWidth: 320,
  },
});
