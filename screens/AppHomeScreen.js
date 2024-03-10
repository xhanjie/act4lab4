// AppHomeScreen.js
import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../component/Header';

const AppHomeScreen = ({ navigation }) => {
  const handleLoginPress = () => {
    navigation.navigate('LoginPage');
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <h1>{"Let's get Started"} </h1>
        <Button title="Login" onPress={handleLoginPress} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default AppHomeScreen;
