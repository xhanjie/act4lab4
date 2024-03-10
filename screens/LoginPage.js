import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the hook
import { SafeAreaView } from 'react-native-safe-area-context'; // Import SafeAreaView instead of SafeAreaProvider
import Header from '../component/Header';

const LoginPage = () => {
  const navigation = useNavigation(); // Get the navigation object

  const handleLogin = () => {
    // Logic for handling login
    navigation.navigate('Page1');
  };

  const handleSignUp = () => {
    // Logic for handling sign up
    navigation.navigate('Registration');
  };

  const handleResetPassword = () => {
    // Logic for handling forgot password
    navigation.navigate("ForgotPasswordScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        
        <TextInput style={styles.input} placeholder="Username" />
        
        {/* Password input */}
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
        
        {/* Login button */}
        <TouchableOpacity style={[styles.button, { backgroundColor: '#1A2F36', width: '45%' }]} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        
        {/* Sign up button */}
        <TouchableOpacity style={[styles.button, { backgroundColor: '#1A2F36', width: '45%' }]} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        
        {/* Forgot password text */}
        <TouchableOpacity onPress={handleResetPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', // Adjusted to space-between to create space between header and content
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  content: {
    flex: 1, // Added flex: 1 to make content take available space
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
    width: '80%',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '100%', // Set width to 100% to fill the container
  },
  button: {
    backgroundColor: '#1A2F36',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '45%', // Adjusted width to 45% to fit two buttons in a row
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  forgotPasswordText: {
    textAlign: 'center',
    color: '#AE6839',
  },
});

export default LoginPage;
