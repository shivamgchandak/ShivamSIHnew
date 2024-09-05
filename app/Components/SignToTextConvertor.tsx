import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Video } from 'expo-av';
import FooterComponent from './FooterComponent';
import { Icon } from 'react-native-elements';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignToTextConvertor = () => {
  const [selectedVideoUri, setSelectedVideoUri] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef<Video>(null);

  const pickVideo = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedVideoUri(result.assets[0].uri);
      setIsPlaying(true);
    }
  };

  const handlePlaybackStatusUpdate = (status: any) => {
    if (status.isLoaded) {
      setIsLoading(false);
    }

    if (status.didJustFinish) {
      setIsPlaying(false);
      setTimeout(() => {
        setIsPlaying(true);
        videoRef.current?.replayAsync();
      }, 1500);
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Link href={"/Components/HomeScreen"}>
          <View style={styles.leftButton}>
            <Icon name="arrow-back" type="material" size={24} />
          </View>
        </Link>
        <Text style={styles.headerTitle}>Sign To Text</Text>
      </View>

      <View style={styles.content}>
        <TouchableOpacity style={styles.uploadButton} onPress={pickVideo}>
          <Text style={styles.buttonText}>Upload Video</Text>
        </TouchableOpacity>

        {selectedVideoUri && (
          <View style={styles.previewContainer}>
            {isLoading && <ActivityIndicator size="large" color="blue" />}
            <Video
              ref={videoRef}
              source={{ uri: selectedVideoUri }}
              rate={1.0}
              volume={1.0}
              resizeMode="contain"
              shouldPlay={isPlaying}
              isLooping={false}
              onLoadStart={() => setIsLoading(true)}
              onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
              style={styles.video}
            />
            <Text style={styles.textBelowVideo}>Sign Language Translation will appear here...</Text>
          </View>
        )}
      </View>

      <View style={styles.navbarfooter}>
        <FooterComponent />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  leftButton: {
    position: 'absolute',
    left: 16,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  uploadButton: {
    padding: 15,
    backgroundColor: '#4285F4',
    borderRadius: 8,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  previewContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  video: {
    width: 300,
    height: 300,
    backgroundColor: 'black',
  },
  textBelowVideo: {
    marginTop: 10,
    fontSize: 18,
    color: '#333',
    fontStyle: 'italic',
  },
  navbarfooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default SignToTextConvertor;
