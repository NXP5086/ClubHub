import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', { email, password });
      const token = response.data.token;
      // Save token to AsyncStorage or secure storage
      console.log('Login successful. Token:', token);
      // Navigate to home screen after successful login
      navigation.navigate('Home'); // Replace 'Home' with your actual home screen name
    } catch (error) {
      console.error('Error logging in:', error.response ? error.response.data.message : error.message);
    }
  };

  const navigateToRegistration = () => {
    navigation.navigate('Registration');
  };

  return (
    <View style={styles.container}>
      <View style={styles.whiteArea}>
        <Text style={styles.title}>CLUB-HUB</Text>
        <Text style={styles.subtitle}>Login</Text>
      </View>
      <View style={styles.greenArea}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
            autoCapitalize="none"
            placeholderTextColor="black" // Set placeholder text color
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
            placeholderTextColor="black" // Set placeholder text color
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={navigateToRegistration}>
            <Text style={styles.buttonText}>Go to Registration</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  whiteArea: {
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  greenArea: {
    flex: 1,
    width: '100%',
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: 'green',
    fontWeight: 'bold',
    marginBottom: 2,
    marginTop: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    marginTop: 2,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  input: {
    width: '100%',
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    color: 'black',
  },
  buttonContainer: {
    width: '80%',
    marginTop: 10,
  },
  button: { // Set background color to white here
    width: '100%',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
