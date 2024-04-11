import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from './component/Header';
import LoginPage from './screens/LoginPage'; 
import Page1 from './screens/Page1'; 
import Registration from './screens/Registration';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import ProductDetails from './screens/ProductDetails'; 
import CartPage from './screens/CartPage'; // Import CartPage component
import ProfileScreen from './screens/ProfileScreen'; // Import ProfileScreen component
import CartTotal from './screens/CartTotal'; // Import CartTotal component
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import CategoryScreen from './screens/CategoryScreen';
import SettingScreen from './screens/SettingScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={LoginPage}
      options={{ title: 'Login' }}
    />
    <Stack.Screen
      name="Page1"
      component={Page1}
      options={{ title: 'Page 1' }}
    />
    <Stack.Screen
      name="Registration"
      component={Registration}
      options={{ title: 'Registration' }}
    />
    <Stack.Screen
      name="ForgotPasswordScreen"
      component={ForgotPasswordScreen}
      options={{ title: 'Forgot Password' }}
    />
    <Stack.Screen
      name="ProductDetails"
      component={ProductDetails}
      options={{ title: 'Product Details' }}
    />
    <Stack.Screen
      name="CartPage"
      component={CartPage} // Add CartPage screen
      options={{ title: 'Cart Page' }}
    />
    <Stack.Screen
            name="TotalCart" // Rename the screen to TotalCart
            component={CartTotal} // Use the CartTotal component for TotalCart
            options={{ title: 'Total Cart' }} // Update the title
          />
    <Stack.Screen
    name="Profile"
    component={ProfileScreen} // Add ProfileScreen as a screen
    options={{ title: 'Profile' }} // Set the title of the screen if needed
  />
    <Stack.Screen
    name="About"
    component={AboutScreen} // Add ProfileScreen as a screen
    options={{ title: 'About Us' }} // Set the title of the screen if needed
  />
   <Stack.Screen
    name="Contact"
    component={ContactScreen} // Add ProfileScreen as a screen
    options={{ title: 'Contact Us' }} // Set the title of the screen if needed
  />

<Stack.Screen
  name="Category"
  component={CategoryScreen}
  options={{ title: 'Category' }}
/>

  <Stack.Screen
      name="Setting"
      component={SettingScreen} // Use the CategoryScreen component
      options={{ title: 'Setting' }}
  />
  </Stack.Navigator>
);

const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Stack" component={StackNavigator} />
    {/* Add additional drawer screens here if needed */}
  </Drawer.Navigator>
);

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const HomeScreen = ({ navigation }) => {
  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Button title="Login" onPress={handleLoginPress} color="#1A2F36" />
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