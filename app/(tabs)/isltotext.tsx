import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Video, ResizeMode } from 'expo-av';
import FooterComponent from '../Components/FooterComponent';
import { Icon } from 'react-native-elements';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignToTextConvertor = () => {
  const [selectedMediaUri, setSelectedMediaUri] = useState<string | null>(null);
  const [mediaType, setMediaType] = useState<'video' | 'image' | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef<Video>(null);

  const pickMedia = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const { uri, type } = result.assets[0];
      setSelectedMediaUri(uri);
      setMediaType(type === 'video' ? 'video' : 'image');
      setIsPlaying(type === 'video');
    }
  };

  const recordMedia = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const { uri, type } = result.assets[0];
      setSelectedMediaUri(uri);
      setMediaType(type === 'video' ? 'video' : 'image');
      setIsPlaying(type === 'video');
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
      }, 500);
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
        <TouchableOpacity style={styles.uploadButton} onPress={pickMedia}>
          <Text style={styles.buttonText}>Upload Media</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.recordButton} onPress={recordMedia}>
          <Text style={styles.buttonText}>Record Media</Text>
        </TouchableOpacity>

        {selectedMediaUri && (
          <View style={styles.previewContainer}>
            {isLoading && <ActivityIndicator size="large" color="blue" />}
            {mediaType === 'video' ? (
              <Video
                ref={videoRef}
                source={{ uri: selectedMediaUri }}
                rate={1.0}
                volume={1.0}
                resizeMode={ResizeMode.CONTAIN}
                shouldPlay={isPlaying}
                isLooping={false}
                onLoadStart={() => setIsLoading(true)}
                onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
                style={styles.video}
              />
            ) : (
              <Image source={{ uri: selectedMediaUri }} style={styles.image} />
            )}
            <Text style={styles.textBelowMedia}>Sign Language Translation will appear here...</Text>
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
    marginBottom: 100,
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
  recordButton: {
    padding: 15,
    backgroundColor: '#34A853',
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
  image: {
    width: 300,
    height: 300,
    backgroundColor: 'lightgray',
  },
  textBelowMedia: {
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
