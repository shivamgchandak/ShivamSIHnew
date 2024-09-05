import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // For menu icon
import Ionicons from 'react-native-vector-icons/Ionicons'; // For bottom nav icons
import { Link } from 'expo-router';
import FooterComponent from './FooterComponent';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome,</Text>
        <Text style={styles.nameText}>John Copper</Text>
        <Link href={"(tabs)/intro"} >Test</Link>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>How to communicate with deaf and hard of hearing people?</Text>
          <Text style={styles.cardText}>Face the person and make eye contact when speaking... read more</Text>
        </View>

        <View style={styles.categorySection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Category</Text>
            <Link href={"/categorymain"}>
                <View>
                    <Text style={styles.seeAllText}>See All</Text>
                </View>
            </Link>
          </View>
          <View style={styles.categoryIcons}>
            <View style={styles.categoryItem}>
              <Image source={require('../assets/family.png')} style={styles.categoryPlaceholder}/>
              <Text>Family</Text>
            </View>
            <View style={styles.categoryItem}>
              <Image source={require('../assets/games.png')} style={styles.categoryPlaceholder}/>
              <Text>Games</Text>
            </View>
            <View style={styles.categoryItem}>
              <Image source={require('../assets/greetings.png')} style={styles.categoryPlaceholder}/>
              <Text>Greetings</Text>
            </View>
            <View style={styles.categoryItem}>
              <Image source={require('../assets/times.png')} style={styles.categoryPlaceholder}/>
              <Text>Times</Text>
            </View>
            {/* <View style={styles.categoryItem}>
              <Image source={require('../assets/cities.png')} style={styles.categoryPlaceholder}/>
              <Text>Cities</Text>
            </View> */}
          </View>
        </View>

        <View style={styles.lessonsSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>My Lessons</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.lessonCards}>
            <View style={styles.lessonCard}>
              <View style={styles.lessonCards}>
                <Image source={require('../assets/alphabets.png')} style={styles.lessonPlaceholder} />
                <Icon name="dots-vertical" size={24} color="black" />
              </View>
              <Text style={styles.lessonTitle}>Alphabets</Text>
            </View>
            <View style={styles.lessonCard}>
            <View style={styles.lessonCards}>
                <Image source={require('../assets/numbers.png')} style={styles.lessonPlaceholder} />
                <Icon name="dots-vertical" size={24} color="black" />
              </View>
              <Text style={styles.lessonTitle}>Numbers</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.navbarfooter}>
        <FooterComponent />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
    navbarfooter: {
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
    padding: 20,
    paddingTop: 40,
  },
  welcomeText: {
    fontSize: 18,
    color: '#FFA500',
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    flex: 1,
  },
  card: {
    backgroundColor: '#FFA500',
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardText: {
    color: '#fff',
  },
  categorySection: {
    margin: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllText: {
    color: '#FFA500',
  },
  categoryIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryItem: {
    alignItems: 'center',
  },
  categoryPlaceholder: {
    width: 65,
    height: 65,
    backgroundColor: '#F0F0F0',
    borderRadius: 30,
    marginBottom: 5,
  },
  lessonsSection: {
    margin: 20,
  },
  lessonCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lessonCard: {
    backgroundColor: '#F0F0F0',
    padding: 15,
    borderRadius: 10,
    width: '48%',
  },
  lessonTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'left',
  },
  lessonPlaceholder: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#0047AB',
    height: 70,
    paddingBottom: 10,
    paddingTop: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'gray',
  },
  navHomeWrapper: {
    position: 'relative',
    bottom: 30,
    backgroundColor: '#0047AB',
    borderRadius: 100,
    height:80,
    width:80,
    padding: 10,
  },
  homeNav: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;