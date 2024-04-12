import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';


const AboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Text style={styles.title}>Project Manager</Text>
          <Image source={require('../assets/pm.jpg')} style={styles.roundImage} />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.title}>Backend Developer</Text>
          <Image source={require('../assets/be.jpg')} style={styles.roundImage} />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.title}>Frontend Developer</Text>
          <Image source={require('../assets/fe.jpg')} style={styles.roundImage} />
        </View>
      
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  roundImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 100, // Half of width and height to make it round
  },
});

export default AboutScreen;
