import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from '../component/Footer'; // Import Footer component

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.introContainer}>
        <Text style={styles.introText}>Welcome to our app</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>This app is for our midterm requirement</Text>
      </View>
      <Footer navigation={navigation} /> {/* Render Footer component with navigation prop */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Set background color to black
  },
  introContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  introText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white', // Set font color to white
    marginTop: 20,
    marginBottom: 10,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    color: 'white', // Set font color to white
    marginTop: 10,
    marginBottom: 20,
  },
});

export default ProfileScreen;
