// Footer.js
import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Footer = ({ navigation }) => {
  const navigateToPage1 = () => {
    navigation.navigate('Page1');
  };

  const navigateToProfile = () => {
    navigation.navigate('Profile');
  };

  const navigateToCart = () => {
    navigation.navigate('TotalCart');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToPage1}>
        <Ionicons name="home-outline" size={24} color="black" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToProfile}>
        <Ionicons name="person-outline" size={24} color="black" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToCart}>
        <Ionicons name="cart-outline" size={24} color="black" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  icon: {
    marginRight: 20,
  },
});

export default Footer;
