import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Footer from '../component/Footer'; // Import the Footer component

const CartTotal = ({ navigation }) => {
  // Dummy cart items for demonstration
  const cartItems = [
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 20 },
    { id: 3, name: 'Item 3', price: 15 },
  ];

  // Calculate total price of items in the cart
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, marginBottom: 10 }}>Total Cart</Text>
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginBottom: 5 }}>
              <Text>{item.name}</Text>
              <Text>${item.price}</Text>
            </View>
          )}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 10 }}>
          <Text>Total:</Text>
          <Text>${totalPrice}</Text>
        </View>
      </View>

      {/* Footer component */}
      <Footer navigation={navigation} /> {/* Pass navigation prop to Footer component */}
    </View>
  );
}

export default CartTotal;
