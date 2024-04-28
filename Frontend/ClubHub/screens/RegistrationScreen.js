import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const RegistrationScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    try {
      await axios.post('http://localhost:3000/api/auth/register', { username, email, password });
      console.log('Registration successful');
      // Navigate to login screen or another screen in your app
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error registering:', error.response ? error.response.data.message : error.message);
    }
  };

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>REGISTRATION PAGE</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={setUsername}
          value={username}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <Button title="Register" onPress={handleRegistration} style={[styles.button, styles.loginButton]} />
        <Button title="Go to Login" onPress={navigateToLogin} style={[styles.button, styles.loginButton]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'green',
    paddingTop: 50, // Add padding to give space for the title
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: 'white', // Set background color to white
  },
  button: { // Base styles for buttons (white background)
    marginTop: 10,
    width: '100%',
    backgroundColor: 'white',
  },
  loginButton: { // Additional styles for login-like buttons
    borderRadius: 10, // Add border radius
    padding: 15, // Adjust padding as needed
    color: 'green', // Set text color (assuming green from login page)
    fontWeight: 'bold', // Set font weight (assuming bold from login page)
  },
});

export default RegistrationScreen;
