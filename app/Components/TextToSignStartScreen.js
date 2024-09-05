import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import FooterComponent from './FooterComponent';
import { Link, router } from 'expo-router';

const TextToSignStartScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
        <Link href={"/Components/HomeScreen"}>
          <View style={styles.leftButton}>
              <Icon name="arrow-back" type="material" size={24}/>
            </View>
          </Link>
          <Text style={styles.headerTitle}>Text To Sign</Text>
        </View>

        <ScrollView>
          <View style={styles.mainContent}>
            <Image
              source={require('../assets/textstart.png')} // Add your image here
              style={styles.image}
            />
            <Text style={styles.description}>
              Start writing your text and get its result in form of sign language.
            </Text>

            <TouchableOpacity style={styles.startButton} onPress={()=> {router.push('/Components/TextToSignAdd')}}>
              <Text style={styles.startButtonText}>Start Now</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
    backgroundColor: '#FFF',
    // justifyContent: 'space-between',
  },
  content: {
    flex: 1,
  },
  navbarfooter: {
    marginTop: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
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
  mainContent: {
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:10,
    marginVertical:125,
    paddingHorizontal: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  // startButton: {
  //   backgroundColor: '#ffbf00',
  //   paddingVertical: 15,
  //   paddingHorizontal: 50,
  //   borderRadius: 10,
  // },
  startButtonText: {
    color: '#ffbf00',
    fontSize: 20,
    fontWeight: 'bold',
  },
  
});

export default TextToSignStartScreen;