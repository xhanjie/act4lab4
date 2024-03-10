import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from '../component/Header';

const Page1 = ({ navigation }) => {
  const handleLogout = () => {
    navigation.navigate('LoginPage'); // Navigate back to the login screen
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          {/* Your page content here */}
          <Button title="Logout" onPress={handleLogout} />
        </View>
      </View>
    </SafeAreaProvider>
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

export default Page1;
