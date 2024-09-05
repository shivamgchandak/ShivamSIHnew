import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, ScrollView } from 'react-native';
import { Video } from 'expo-av';

const { width, height } = Dimensions.get('window');

// List of alphabets
const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const AlphabetScreen = () => {
  // State to keep track of the currently selected alphabet
  const [selectedAlphabet, setSelectedAlphabet] = useState(null);

  // Render a button for each alphabet
  const renderAlphabetButtons = () => (
    <View style={styles.buttonContainer}>
      {alphabets.map((letter) => (
        <Button
          key={letter}
          title={letter}
          onPress={() => setSelectedAlphabet(letter)}
        />
      ))}
    </View>
  );

  // Determine the video URI based on the selected alphabet
  const videoUri = selectedAlphabet ? `../assets/videos/${selectedAlphabet}.mp4` : null;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Language Alphabet Videos</Text>
      {renderAlphabetButtons()}
      {selectedAlphabet && (
        <View style={styles.videoContainer}>
          <Text style={styles.selectedLetter}>{selectedAlphabet}</Text>
          <Video
            source={{ uri: videoUri }}
            style={styles.video}
            useNativeControls
            resizeMode="contain"
            shouldPlay
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  videoContainer: {
    alignItems: 'center',
  },
  selectedLetter: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  video: {
    width: width * 0.9,
    height: height * 0.3,
  },
});

export default AlphabetScreen;
