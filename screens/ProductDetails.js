// ProductDetails.js
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const ProductDetails = ({ route, navigation }) => {
  const { product } = route.params;

  // Function to handle navigation to the specific product type
  const handleProductTypePress = (type) => {
    navigation.navigate('SpecificProductDetails', { type }); // Navigate to SpecificProductDetails with the product type
  };

  // Render different options based on product type
  const renderProductOptions = () => {
    switch (product.name) {
      case 'CPU':
        return (
          <View>
            <TouchableOpacity onPress={() => handleProductTypePress('Intel')}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('../assets/intel.png')} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
                <Text>Intel</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleProductTypePress('AMD')}>
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
            <TouchableOpacity onPress={() => handleProductTypePress('Nvidia')}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('../assets/intel.png')} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
                <Text>Nvidia</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleProductTypePress('AMD')}>
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
      <Image source={product.image} style={{ width: 200, height: 200, resizeMode: 'contain' }} />
      <Text>{product.name}</Text>
      <Text>{product.details}</Text>
      {/* Render product options */}
      {renderProductOptions()}
    </View>
  );
}

export default ProductDetails;
