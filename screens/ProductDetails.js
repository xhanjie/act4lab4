// ProductDetails.js
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProductDetails = ({ route }) => {
  const { product } = route.params;
  const navigation = useNavigation();

  // Function to handle navigation to the cart page
  const handleProductTypePress = (selectedImage, product) => {
    navigation.navigate('CartPage', { selectedImage, product }); // Pass selected product and image as parameters
  };

  // Render different options based on product type
  const renderProductOptions = () => {
    switch (product.name) {
      case 'CPU':
        return (
          <View>
            <TouchableOpacity onPress={() => handleProductTypePress(require('../assets/intel.png'), { name: 'Intel', details: 'price: 20,299' })}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('../assets/intel.png')} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
                <Text>Intel</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleProductTypePress(require('../assets/amd.png'), { name: 'AMD', details: 'price: 18,299' })}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('../assets/amd.png')} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
                <Text>AMD</Text>
              </View>
            </TouchableOpacity>
          </View>
        );
      case 'GPU':
        return (
          <View>
            <TouchableOpacity onPress={() => handleProductTypePress(require('../assets/nvidia.png'), { name: 'Nvidia', details: 'Nvidia RTX', price: '30,000' })}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('../assets/nvidia.png')} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
                <Text>Nvidia</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleProductTypePress(require('../assets/amd.png'), { name: 'AMD', details: 'AMD Redion', price: '25,000' })}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('../assets/amd.png')} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
                <Text>AMD</Text>
              </View>
            </TouchableOpacity>
          </View>
        );
      // Add more cases for other product types if needed
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* Render product options */}
      {renderProductOptions()}
    </View>
  );
}

export default ProductDetails;
