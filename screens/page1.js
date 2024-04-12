import React, { useState } from 'react';
import { StyleSheet, View, Button, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons'; 
import Footer from '../component/footer'; 

const Page1 = () => {
  const navigation = useNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    navigation.navigate('Home');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  const handleProductPress = (productType) => {
    let product;

    // Set product details based on productType
    switch (productType) {
      case 'CPU':
        product = {
          name: 'CPU',
          image: require('../assets/cpu.png'),
          details: 'CPU details go here',
        };
        break;
      case 'Motherboard':
        product = {
          name: 'Motherboard',
          image: require('../assets/motherboard.png'),
          details: 'Motherboard details go here',
        };
        break;
      case 'GPU':
        product = {
          name: 'GPU',
          image: require('../assets/gpu.png'),
          details: 'GPU details go here',
        };
        break;
      case 'PSU':
        product = {
          name: 'PSU',
          image: require('../assets/psu.png'),
          details: 'PSU details go here',
        };
        break;
      case 'RAM':
        product = {
          name: 'RAM',
          image: require('../assets/ram.png'),
          details: 'RAM details go here',
        };
        break;
      case 'NVMe':
        product = {
          name: 'NVMe',
          image: require('../assets/nvme.png'),
          details: 'NVMe details go here',
        };
        break;
      default:
        product = {
          name: 'Sample Product',
          image: require('../assets/logo.png'),
          details: 'Product details go here',
        };
    }

    
    navigation.navigate('ProductDetails', { product });
  };

  const navigateToAboutUs = () => {
    navigation.navigate('About');
  };

  const navigateToProfile = () => {
    navigation.navigate('Profile');
  };

  const navigateToCategory = () => {
    navigation.navigate('Category');
  };

  const navigateToContactUs = () => {
    navigation.navigate('Contact');
  };

  const navigateToSettings = () => {
    navigation.navigate('Setting');
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
          <MaterialIcons name={isMenuOpen ? "close" : "menu"} size={30} color="#000" />
        </TouchableOpacity>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <View style={styles.content}>
          <TouchableOpacity onPress={() => handleProductPress('CPU')}>
            <Image source={require('../assets/cpu.png')} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleProductPress('Motherboard')}>
            <Image source={require('../assets/motherboard.png')} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleProductPress('GPU')}>
            <Image source={require('../assets/gpu.png')} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleProductPress('PSU')}>
            <Image source={require('../assets/psu.png')} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleProductPress('RAM')}>
            <Image source={require('../assets/ram.png')} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleProductPress('NVMe')}>
            <Image source={require('../assets/nvme.png')} style={styles.image} />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Logout" onPress={handleLogout} color="#1A2F36" />
        </View>

        {isMenuOpen && (
          <View style={styles.menuContainer}>
          <Button title="Profile" onPress={navigateToProfile} />
          <Button title="Category" onPress={navigateToCategory} />
          <Button title="About Us" onPress={navigateToAboutUs} />
          <Button title="Contact Us" onPress={navigateToContactUs} />
          <Button title="Settings" onPress={navigateToSettings} />
        </View>
        
        )}
      </View>

      {/* Footer component */}
      <Footer navigation={navigation} />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '40%',
  },
  menuButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 999,
  },
  logo: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
    width: 150,
    height: 50,
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    margin: 10,
  },
  menuContainer: {
    position: 'absolute',
    top: 60,
    left: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default Page1;
