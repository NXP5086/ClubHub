import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const NotificationsScreen = () => {
  return (
    <ScrollView>
      <View style={styles.notificationsContainer}>
        <NotificationItem
          title="New message from John"
          time="12:00 PM"
          message="Hey, how are you doing?"
        />
        <NotificationItem
          title="Reminder: Meeting at 3 PM"
          time="10:30 AM"
          message="Don't forget about the meeting later today."
        />
        <NotificationItem
          title="You have a new friend request"
          time="Yesterday"
          message="John Doe sent you a friend request."
        />
        <NotificationItem
          title="Reminder: Meeting at 10 AM"
          time="Yesterday"
          message="Coffee Beans weekly meeting."
        />
        <NotificationItem
          title="Reminder: Meeting at 2 PM"
          time="Yesterday"
          message="General Meetings - Women in Computing."
        />
        <NotificationItem
          title="New message from Emily"
          time="Yesterday"
          message="Can you send me the details for the event?"
        />
        <NotificationItem
          title="You have a new friend request"
          time="2 days ago"
          message="Jane Doe sent you a friend request."
        />
      </View>
    </ScrollView>
  );
};

const NotificationItem = ({ title, time, message }) => {
  return (
    <View style={styles.notificationItem}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.time}>{time}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationsContainer: {
    padding: 20,
  },
  notificationItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 15,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  time: {
    color: '#666',
    marginBottom: 5,
  },
  message: {
    fontSize: 16,
    lineHeight: 20,
  },
});

export default NotificationsScreen;
