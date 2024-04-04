import React, { useState } from 'react';
import { StyleSheet, View, Button, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons'; // Assuming you're using Expo
import Footer from '../component/footer'; // Import Footer component

const Page1 = () => {
  const navigation = useNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu open/close

  const handleLogout = () => {
    navigation.navigate('Home');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
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
          image: require('../assets/sample.png'),
          details: 'Product details go here',
        };
    }

    // Navigate to the ProductDetails screen and pass the product as a parameter
    navigation.navigate('ProductDetails', { product });
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
            <Button title="Profile" onPress={() => console.log("Navigate to Profile")} />
            <Button title="Category" onPress={() => console.log("Navigate to Category")} />
            <Button title="About Us" onPress={() => console.log("Navigate to About Us")} />
            <Button title="Contact Us" onPress={() => console.log("Navigate to Contact Us")} />
            <Button title="Settings" onPress={() => console.log("Navigate to Settings")} />
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
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
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
