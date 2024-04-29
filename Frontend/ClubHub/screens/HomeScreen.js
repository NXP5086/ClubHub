import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('Menu');
  const options = ['Home', 'Search', 'Notifications', 'Events'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedValue(option);
    if (option === 'Events') {
      navigation.navigate('Events');
    } else if (option === 'Notifications') {
      navigation.navigate('Notifications');
    } else if (option === 'Search') {
      navigation.navigate('Search'); // Navigate to SearchScreen
    }
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerText}>CLUB-HUB</Text>
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
      <Image
        source={require('/Users/nathanpaul/Documents/CSCE/GitHub/ClubHub/Frontend/ClubHub/assets/unt.jpg')}
        style={styles.image}
      />
      <Text style={styles.contentText}>Welcome to CLUB-HUB!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  banner: {
    backgroundColor: 'green',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    position: 'absolute',
    top: 40,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    width: 150,
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
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 150,
  },
});

export default HomeScreen;
