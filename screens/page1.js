import React from 'react';
import { StyleSheet, View, Button, Image } from 'react-native'; // Import Image component
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from '../component/Header';

const Page1 = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          {/* Display the image */}
          <Image
            source={require('../assets/home.png')} // Path to the image file
            style={styles.image} // Apply styles to the image
          />
          {/* Your other page content here */}
          <Button title="Logout" onPress={handleLogout} color="#1A2F36" />
        </View>
      </View>
    </SafeAreaProvider>
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
  image: {
    width: 200, 
    height: 200, 
    resizeMode: 'contain', 
  },
});

export default Page1;
