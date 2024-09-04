import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome,</Text>
        <Text style={styles.nameText}>John Copper</Text>
        <View style={styles.searchContainer}>
          <TextInput 
            style={styles.searchInput}
            placeholder="Search"
          />
        </View>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>How to communicate with deaf and hard of hearing people?</Text>
          <Text style={styles.cardText}>Face the person and make eye contact when speaking... read more</Text>
        </View>

        <View style={styles.categorySection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Category</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.categoryIcons}>
            {/* Replace with actual icons */}
            <View style={styles.categoryItem}>
              <View style={styles.iconPlaceholder} />
              <Text>Family</Text>
            </View>
            <View style={styles.categoryItem}>
              <View style={styles.iconPlaceholder} />
              <Text>Games</Text>
            </View>
            <View style={styles.categoryItem}>
              <View style={styles.iconPlaceholder} />
              <Text>Greetings</Text>
            </View>
            <View style={styles.categoryItem}>
              <View style={styles.iconPlaceholder} />
              <Text>Times</Text>
            </View>
            <View style={styles.categoryItem}>
              <View style={styles.iconPlaceholder} />
              <Text>Cities</Text>
            </View>
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
              <Text style={styles.lessonTitle}>Alphabets</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progress, { width: '24%' }]} />
              </View>
              <Text style={styles.progressText}>24%</Text>
            </View>
            <View style={styles.lessonCard}>
              <Text style={styles.lessonTitle}>Numbers</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progress, { width: '74%' }]} />
              </View>
              <Text style={styles.progressText}>74%</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text>Category</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text>Converter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text>Lessons</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  searchContainer: {
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    padding: 10,
  },
  searchInput: {
    fontSize: 16,
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
  iconPlaceholder: {
    width: 40,
    height: 40,
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
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
    marginBottom: 10,
  },
  progressBar: {
    height: 5,
    backgroundColor: '#D0D0D0',
    borderRadius: 5,
  },
  progress: {
    height: 5,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  progressText: {
    textAlign: 'right',
    marginTop: 5,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  navItemActive: {
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
});

export default HomeScreen;