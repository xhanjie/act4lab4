import React from 'react';
import { View, Text } from 'react-native';
import Footer from '../component/Footer'; // Import Footer component

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile aa Screen</Text>
      </View>
      <Footer navigation={navigation} /> {/* Render Footer component with navigation prop */}
    </View>
  );
}

export default ProfileScreen;
