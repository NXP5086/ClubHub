import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const EventsScreen = () => {
  return (
    <ScrollView>
      <View style={styles.eventsContainer}>
        <EventItem
          title="Reentry Simulation - Second Opportunity Network"
          date="Monday, April 29th at 12 PM CDT"
          location="Union"
        />
        <EventItem
          title="General Meetings - Women in Computing"
          date="Monday, April 29th at 12 PM CDT"
          location="Discovery Park"
        />
        <EventItem
          title="Weekly Meeting - Coffee Beans"
          date="Monday, May 29th at 12 PM CDT"
          location="UNT"
        />
        <EventItem
          title="InterVarsity Night - InterVarsity Christian Fellowship"
          date="Monday, April 29th at 7 PM CDT"
          location="UNT Union"
        />
        <EventItem
          title="Eagles for Life Meeting - Eagles for Life"
          date="Monday, February 6th at 5 PM CDT"
          location="University of North Texas"
        />
        <EventItem
          title="Mean Green Blowout - Student Activities"
          date="Tuesday, May 30th at 4 PM CDT"
          location="Library Mall"
        />
      </View>
    </ScrollView>
  );
};

const EventItem = ({ title, date, location }) => {
  return (
    <View style={styles.eventItem}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.details}>Date: {date}</Text>
      <Text style={styles.details}>Location: {location}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  eventsContainer: {
    padding: 20,
  },
  eventItem: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default EventsScreen;
