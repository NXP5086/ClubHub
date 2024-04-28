import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const HomeScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('            Menu      ');
  const options = ['Home', 'Search', 'Notifications', 'Events'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedValue(option);
    setIsOpen(false); // Close dropdown on selection
  };

  return (
    <View style={styles.container}>
      {/* Green banner at the top */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>CLUB-HUB</Text>
        {/* Custom dropdown implementation */}
        <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownButton}>
          <Text style={styles.dropdownButtonText}>{selectedValue}</Text>
          {isOpen && (
            <View style={styles.dropdownMenu}>
              {options.map((option) => (
                <TouchableOpacity key={option} onPress={() => handleSelect(option)} style={styles.dropdownMenuItem}>
                  <Text style={styles.dropdownMenuItemText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </TouchableOpacity>
      </View>
      {/* Rest of your home screen content goes here */}
      <Image
        source={require('/Users/nathanpaul/Documents/CSCE/School/CSCE3615/Frontend/ClubHub/assets/unt.jpg')} // Specify the source of your image
        style={styles.image}
      />
      <Text style={styles.contentText}>Welcome to CLUB-HUB!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Set background color to white
  },
  banner: {
    backgroundColor: 'green',
    padding: 10,
    flexDirection: 'row', // Arrange elements horizontally
    justifyContent: 'space-between', // Align items on opposite ends
    alignItems: 'center', // Align vertically
  },
  bannerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  dropdownButton: {
    padding: 5,
  },
  dropdownButtonText: {
    color: 'white',
  },
  dropdownMenu: {
    position: 'absolute', // Position the menu below the button
    top: 20, // Adjust positioning as needed
    right: 0, // Align to the right side
    backgroundColor: 'white', // Set background color
    borderRadius: 5, // Add border radius for a softer look
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5, // Add a slight shadow for depth
  },
  dropdownMenuItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  dropdownMenuItemText: {
    color: 'black',
  },
  contentText: {
    fontSize: 18,
    marginTop: 20, // Adjust margin as needed
    textAlign: 'center', // Center text
    fontWeight: 'bold',
  },
  image: {
    width: 200, // Adjust width as needed
    height: 200, // Adjust height as needed
    alignSelf: 'center', // Center the image horizontally
    marginTop: 20, // Adjust margin as needed
  },
});

export default HomeScreen;
