import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import FooterComponent from './FooterComponent';
import { Link, useRouter } from 'expo-router'; // Use useRouter hook

const CategoryList = () => {
  const router = useRouter(); // Get the router instance

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <Link href="/Components/HomeScreen">
            <View style={styles.leftButton}>
              <Feather name="arrow-left" size={24} color="black" />
            </View>
          </Link>
          <Text style={styles.headerTitle}>Category</Text>
        </View>

        {/* Hardcoded Category Items */}
        <TouchableOpacity style={styles.itemContainer}>
          <View style={styles.iconContainer}>
            <Image source={require('../assets/family.png')} style={styles.iconImage} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Family</Text>
            <Text style={styles.description}>Learn about family through sign language.</Text>
          </View>
          <Feather name="more-vertical" size={24} color="#ccc" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemContainer}>
          <View style={styles.iconContainer}>
            <Image source={require('../assets/games.png')} style={styles.iconImage} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Games</Text>
            <Text style={styles.description}>Learn about games through sign language.</Text>
          </View>
          <Feather name="more-vertical" size={24} color="#ccc" />
        </TouchableOpacity>

        {/* Navigate to the Greetings page */}
        <TouchableOpacity style={styles.itemContainer} onPress={() => router.push('/(tabs)/greetings')}>
          <View style={styles.iconContainer}>
            <Image source={require('../assets/greetings.png')} style={styles.iconImage} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Greetings</Text>
            <Text style={styles.description}>Learn about greetings through sign language.</Text>
          </View>
          <Feather name="more-vertical" size={24} color="#ccc" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemContainer}>
          <View style={styles.iconContainer}>
            <Image source={require('../assets/times.png')} style={styles.iconImage} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Times</Text>
            <Text style={styles.description}>Learn about times through sign language.</Text>
          </View>
          <Feather name="more-vertical" size={24} color="#ccc" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemContainer}>
          <View style={styles.iconContainer}>
            <Image source={require('../assets/cities.png')} style={styles.iconImage} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Cities</Text>
            <Text style={styles.description}>Learn about cities through sign language.</Text>
          </View>
          <Feather name="more-vertical" size={24} color="#ccc" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemContainer}>
          <View style={styles.iconContainer}>
            <Image source={require('../assets/numbers.png')} style={styles.iconImage} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Numbers</Text>
            <Text style={styles.description}>Learn about numbers through sign language.</Text>
          </View>
          <Feather name="more-vertical" size={24} color="#ccc" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemContainer}>
          <View style={styles.iconContainer}>
            <Image source={require('../assets/foods.png')} style={styles.iconImage} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Food</Text>
            <Text style={styles.description}>Learn about food through sign language.</Text>
          </View>
          <Feather name="more-vertical" size={24} color="#ccc" />
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.navbarfooter}>
        <FooterComponent />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginBottom: 100,
  },
  navbarfooter: {
    marginTop: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    top: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  iconImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default CategoryList;
