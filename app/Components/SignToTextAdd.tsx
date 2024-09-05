import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import FooterComponent from './FooterComponent';
import { Link } from 'expo-router';

const SignToTextAdd = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Link href={"/Components/HomeScreen"}>
          <View style={styles.leftButton}>
            <Icon name="arrow-back" type="material" size={24} />
          </View>
        </Link>
        <Text style={styles.headerTitle}>Text to Sign</Text>
        <Icon name="search" type="material" size={24} />
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content}>
        <View style={styles.cardGrid}>
          
          {/* Add New Writing Card */}
          <TouchableOpacity style={styles.card}>
            <View style={styles.addNew}>
              <Icon name="add-circle-outline" type="material" size={50} color="#4CAF50" />
              <Text style={styles.cardTitle}>Add new writings to your process</Text>
            </View>
          </TouchableOpacity>

          {/* Example Card 1 */}
          {/* <TouchableOpacity style={styles.card}>
            <Image source={require('../assets/times.png')} style={styles.cardImage} />
            <Text style={styles.cardTitle}>I am sorry.</Text>
            <Text style={styles.cardDate}>Written on 20th July 2021</Text>
          </TouchableOpacity> */}

          {/* Example Card 2 */}
          {/* <TouchableOpacity style={styles.card}>
            <Image source={require('../assets/times.png')} style={styles.cardImage} />
            <Text style={styles.cardTitle}>You are welcome</Text>
            <Text style={styles.cardDate}>Written on 20th July 2021</Text>
          </TouchableOpacity> */}
          
        </View>
      </ScrollView>

      {/* Footer */}
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
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  leftButton: {
    position: 'absolute',
    left: 16,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardImage: {
    width: '100%',
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardDate: {
    fontSize: 12,
    color: '#888',
  },
  addNew: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  navbarfooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default SignToTextAdd;
