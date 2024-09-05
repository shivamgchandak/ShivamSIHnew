import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import FooterComponent from './FooterComponent';
import { Link } from 'expo-router';

const Converter = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
        <Link href={"/Components/HomeScreen"}>
          <View style={styles.leftButton}>
              <Icon name="arrow-back" type="material" size={24}/>
            </View>
          </Link>
          <Text style={styles.headerTitle}>Converter</Text>
        </View>

        <ScrollView>
          <View style={styles.converterBox}>
            <View style={styles.converterRow}>
              <View style={styles.iconboxhead}>
                <View style={styles.iconBox}>
                  <Icon name="text-fields" type="material" size={24} color="#63E6BE" />
                </View>
                <Text>Text</Text>
              </View>
              <Icon name="arrow-forward" type="material" size={24} color="#000" />
              <View style={styles.iconboxhead}>
                <View style={styles.iconBox}>
                  <Icon name="sign-language" type="font-awesome" size={24} color="#FF9500" />
                </View>
                <Text>Sign</Text>
              </View>
            </View>
            <Text style={styles.converterDescription}>
              Write your word, sentence, phrase etc and get to know how it is in sign language.
            </Text>
          </View>

          <View style={styles.converterBox}>
            <View style={styles.converterRow}>
              <View style={styles.iconboxhead}>
                <View style={styles.iconBox}>
                  <Icon name="sign-language" type="font-awesome" size={24} color="#FF9500" />
                </View>
                <Text>Sign</Text>
              </View>
              <Icon name="arrow-forward" type="material" size={24} color="#000" />
              <View style={styles.iconboxhead}>
                <View style={styles.iconBox}>
                  <Icon name="text-fields" type="material" size={24} color="#63E6BE" />
                </View>
                <Text>Text</Text>
              </View>
            </View>
            <Text style={styles.converterDescription}>
              Show your sign language and get its text in form of word, sentence, phrase, etc.
            </Text>
          </View>

          <View style={styles.converterBox}>
            <View style={styles.converterRow}>
              <View style={styles.iconboxhead}>
                <View style={styles.iconBox}>
                  <Icon name="microphone" type="font-awesome" size={24} color="#74C0FC" />
                </View>
                <Text>Audio</Text>
              </View>
              <Icon name="arrow-forward" type="material" size={24} color="#000" />
              <View style={styles.iconboxhead}>
                <View style={styles.iconBox}>
                  <Icon name="sign-language" type="font-awesome" size={24} color="#FF9500" />
                </View>
                <Text>Sign</Text>
              </View>
            </View>
            <Text style={styles.converterDescription}>
              Record your audio and get to know how it is in sign language.
            </Text>
          </View>

          <View style={styles.converterBox}>
            <View style={styles.converterRow}>
              <View style={styles.iconboxhead}>
                <View style={styles.iconBox}>
                  <Icon name="sign-language" type="font-awesome" size={24} color="#FF9500" />
                </View>
                <Text>Sign</Text>
              </View>
              <Icon name="arrow-forward" type="material" size={24} color="#000" />
              <View style={styles.iconboxhead}>
                <View style={styles.iconBox}>
                  <Icon name="microphone" type="font-awesome" size={24} color="#74C0FC" />
                </View>
                <Text>Audio</Text>
              </View>
            </View>
            <Text style={styles.converterDescription}>
              Show your sign language and get its audio.
            </Text>
          </View>

          <View style={styles.converterBox}>
            <View style={styles.converterRow}>
              <View style={styles.iconboxhead}>
                <View style={styles.iconBox}>
                  <Icon name="camera" type="font-awesome" size={24} color="#B197FC" />
                </View>
                <Text>Image</Text>
              </View>
              <Icon name="arrow-forward" type="material" size={24} color="#000" />
              <View style={styles.iconboxhead}>
                <View style={styles.iconBox}>
                  <Icon name="sign-language" type="font-awesome" size={24} color="#FF9500" />
                </View>
                <Text>Sign</Text>
              </View>
            </View>
            <Text style={styles.converterDescription}>
              Capture the image and get to know how it is in sign language.
            </Text>
          </View>

          <View style={styles.converterBox}>
            <View style={styles.converterRow}>
              <View style={styles.iconboxhead}>
                <View style={styles.iconBox}>
                  <Icon name="sign-language" type="font-awesome" size={24} color="#FF9500" />
                </View>
                <Text>Sign</Text>
              </View>
              <Icon name="arrow-forward" type="material" size={24} color="#000" />
              <View style={styles.iconboxhead}>
                <View style={styles.iconBox}>
                  <Icon name="camera" type="font-awesome" size={24} color="#B197FC" />
                </View>
                <Text>Image</Text>
              </View>
            </View>
            <Text style={styles.converterDescription}>
              Show your sign language and get its image.
            </Text>
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
    justifyContent: 'space-between',
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
  converterBox: {
    backgroundColor: '#F5F5F5',
    margin: 16,
    padding: 16,
    borderRadius: 8,
  },
  converterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  iconboxhead: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBox: {
    width: 40,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  converterDescription: {
    color: '#888',
    fontSize: 12,
  },
});

export default Converter;
