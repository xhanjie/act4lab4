import React from 'react';
import { StyleSheet, View, Button, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../component/Header';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();

  const handleResetPassword = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.label}></Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
        />
        <Text style={styles.label}></Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Enter new password"
        />
        <Text style={styles.label}></Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Confirm new password"
        />
        <View style={styles.buttonContainer}>
          <Button 
            title="Reset" 
            onPress={handleResetPassword} 
            color="#1A2F36" // Set button color to #1A2F36
          />
        </View>
      </View>
    </SafeAreaView>
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
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '75%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
    width: '45%', // Set width to 45%
  },
});

export default ForgotPasswordScreen;
