import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from './component/Header';
import LoginPage from './screens/LoginPage'; 
import Page1 from './screens/page1'; 
import Registration from './screens/Registration';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import ProductDetails from './screens/ProductDetails'; 
import CartPage from './screens/CartPage'; // Import CartPage component

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
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
        </Stack.Navigator>
      </NavigationContainer>
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
