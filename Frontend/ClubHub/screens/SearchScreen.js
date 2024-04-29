import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const events = [
    {
      id: 'event1',
      title: 'Reentry Simulation - Second Opportunity Network',
      date: 'Monday, April 29th at 12 PM CDT',
      location: 'Union',
    },
    {
      id: 'event2',
      title: 'General Meetings - Women in Computing',
      date: 'Monday, April 29th at 12 PM CDT',
      location: 'Discovery Park',
    },
    {
      id: 'event3',
      title: 'Weekly Meeting - Coffee Beans',
      date: 'Monday, May 29th at 12 PM CDT',
      location: 'UNT',
    },
    {
      id: 'event4',
      title: 'InterVarsity Night - InterVarsity Christian Fellowship',
      date: 'Monday, April 29th at 7 PM CDT',
      location: 'UNT Union',
    },
    {
      id: 'event5',
      title: 'Eagles for Life Meeting - Eagles for Life',
      date: 'Monday, February 6th at 5 PM CDT',
      location: 'University of North Texas',
    },
    {
      id: 'event6',
      title: 'Mean Green Blowout - Student Activities',
      date: 'Tuesday, May 30th at 4 PM CDT',
      location: 'Library Mall',
    },
  ];

  const notifications = [
    {
      id: 'notification1',
      title: 'New message from John',
      time: '12:00 PM',
      message: 'Hey, how are you doing?',
    },
    {
      id: 'notification2',
      title: 'Reminder: Meeting at 3 PM',
      time: '10:30 AM',
      message: "Don't forget about the meeting later today.",
    },
    {
      id: 'notification3',
      title: 'You have a new friend request',
      time: 'Yesterday',
      message: 'John Doe sent you a friend request.',
    },
    {
      id: 'notification4',
      title: 'Reminder: Meeting at 10 AM',
      time: 'Yesterday',
      message: 'Coffee Beans weekly meeting.',
    },
    {
      id: 'notification5',
      title: 'Reminder: Meeting at 2 PM',
      time: 'Yesterday',
      message: 'General Meetings - Women in Computing.',
    },
    {
      id: 'notification6',
      title: 'New message from Emily',
      time: 'Yesterday',
      message: 'Can you send me the details for the event?',
    },
    {
      id: 'notification7',
      title: 'You have a new friend request',
      time: '2 days ago',
      message: 'Jane Doe sent you a friend request.',
    },
  ];

  const handleSearch = () => {
    // Searching events
    const eventResult = events.find(event => event.title.toLowerCase().includes(searchText.toLowerCase()));

    // Searching notifications
    const notificationResult = notifications.find(notification => notification.title.toLowerCase().includes(searchText.toLowerCase()));

    // Determine the type of search result
    if (eventResult) {
      setSearchResult({ type: 'event', item: eventResult });
    } else if (notificationResult) {
      setSearchResult({ type: 'notification', item: notificationResult });
    } else {
      setSearchResult(null); // Reset search result if not found
    }
  };

  const navigateToDetails = () => {
    if (searchResult) {
      const { type, item } = searchResult;
      if (type === 'event') {
        navigation.navigate('Events'); // Navigate to Events screen
      } else if (type === 'notification') {
        navigation.navigate('Notifications'); // Navigate to Notifications screen
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Events and Notifications"
        value={searchText}
        onChangeText={setSearchText}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>

      {/* Display search result */}
      {searchResult && (
        <TouchableOpacity style={styles.resultContainer} onPress={navigateToDetails}>
          <Text style={styles.resultText}>
            {searchResult.type === 'event' ? 'Event: ' : 'Notification: '}
            {searchResult.item.title}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  resultText: {
    fontSize: 16,
  },
});

export default SearchScreen;
