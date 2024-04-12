import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ContactScreen = () => {
  return (
    <View style={styles.container}>
     
      <View style={styles.logoContainer}>
        <Image source={require('../assets/phone.png')} style={styles.logo} />
        <Image source={require('../assets/email.png')} style={styles.logo} />
        <Image source={require('../assets/facebook.png')} style={styles.logo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  logo: {
    width: 50,
    height: 50,
  },
});

export default ContactScreen;
