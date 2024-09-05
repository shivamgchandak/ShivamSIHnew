import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // For menu icon
import Ionicons from 'react-native-vector-icons/Ionicons'; // For bottom nav icons
import { Link } from 'expo-router';
import categorymain from '../(tabs)/categorymain';

const FooterComponent = () => {
  return (
    <View style={styles.container}>
      

      <View style={styles.bottomNav}>

        <Link href={"/categorymain"}>
            <View style={[styles.navItem, {display: "flex", flexDirection: 'column'}]}>
              <Ionicons name="grid-outline" size={24} color="gray" />
              <Text style={styles.navText}>Category</Text>
            </View>
        </Link>

        <Link href={"/convertor"}>
          <View style={[styles.navItem, {display: "flex", flexDirection: 'column'}]}>
            <Ionicons name="swap-horizontal-outline" size={24} color="gray" />
            <Text style={styles.navText}>Converter</Text>
          </View>
        </Link>

        <View style={styles.navHomeWrapper}>
          <Link href={"/Components/HomeScreen"}>
            <View style={styles.homeNav}>
              <Ionicons name="home" size={32} color="orange" />
            </View>
          </Link>
        </View>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="book-outline" size={24} color="gray" />
          <Text style={styles.navText}>Lessons</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color="gray" />
          <Text style={styles.navText}>Account</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // marginTop:100,
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
    display: "flex",
    flexDirection: "column"
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

export default FooterComponent;
