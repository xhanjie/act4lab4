import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Footer = ({ navigation }) => {
  const navigateToSettings = () => {
    // Navigate to the settings screen
    navigation.navigate('Settings');
  };

  const navigateToProfile = () => {
    // Navigate to the profile screen
    navigation.navigate('Profile');
  };

  const navigateToCart = () => {
    // Navigate to the cart screen
    navigation.navigate('Cart');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToSettings}>
        <Ionicons name="settings-outline" size={24} color="black" style={styles.icon} />
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
