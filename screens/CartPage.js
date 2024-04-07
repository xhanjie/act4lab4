import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const CartPage = ({ route }) => {
  const { product, selectedImage } = route.params; // Get the selected product and its image from the route params
  const navigation = useNavigation();

  // Function to handle navigation to a specific product type
  const handleProductTypePress = (type) => {
    navigation.navigate('SpecificProductDetails', { type });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={selectedImage} style={{ width: 200, height: 200, resizeMode: 'contain' }} /> {/* Use the selected product's image */}
      <Text>{product.name}</Text>
      <Text>{product.details}</Text> 
      <Text>{product.price}</Text>{/* Display the product details */}
      {/* Render product options */}
      
      {/* Cart icon */}
      <TouchableOpacity
        onPress={() => navigation.navigate('CartTotal')} // Navigate to 'CartTotal' screen
        style={{ position: 'absolute', top: 20, right: 20 }}
      >
        <MaterialIcons name="shopping-cart" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

export default CartPage;
