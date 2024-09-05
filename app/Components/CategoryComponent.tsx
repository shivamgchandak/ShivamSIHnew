import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import FooterComponent from './FooterComponent';
import { Link } from 'expo-router';

const categories = [
  { id: '1', title: 'Family', icon: require('../assets/family.png'), description: 'Learn about family through sign language.' },
  { id: '2', title: 'Games', icon: require('../assets/games.png'), description: 'Learn about games through sign language.' },
  { id: '3', title: 'Greetings', icon: require('../assets/greetings.png'), description: 'Learn about greetings through sign language.' },
  { id: '4', title: 'Times', icon: require('../assets/times.png'), description: 'Learn about times through sign language.' },
  { id: '5', title: 'Cities', icon: require('../assets/cities.png'), description: 'Learn about cities through sign language.' },
  { id: '6', title: 'Numbers', icon: require('../assets/numbers.png'), description: 'Learn about numbers through sign language.' },
  { id: '7', title: 'Food', icon: require('../assets/foods.png'), description: 'Learn about food through sign language.' },
];

const CategoryItem = ({ item }) => (
  <TouchableOpacity style={styles.itemContainer}>
    <View style={styles.iconContainer}>
      <Image source={item.icon} style={styles.iconImage} />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
    <Feather name="more-vertical" size={24} color="#ccc" />
  </TouchableOpacity>
);

const CategoryList = () => (
  <View style={styles.container}>
    <View style={styles.header}>
        <Link href="/Components/HomeScreen">
          <View style={styles.leftButton}>
            <Feather name="arrow-left" size={24} color="black" />
          </View>
        </Link>
      <Text style={styles.headerTitle}>Category</Text>
    </View>
    <FlatList
      data={categories}
      renderItem={({ item }) => <CategoryItem item={item} />}
      keyExtractor={item => item.id}
    />
    <View style={styles.navbarfooter}>
      <FooterComponent />
    </View>
  </View>
);

const styles = StyleSheet.create({
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