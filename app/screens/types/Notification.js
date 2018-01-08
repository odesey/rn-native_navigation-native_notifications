import React from 'react';
import {StyleSheet, View, Text, Dimensions, Button} from 'react-native';

const {height, width} = Dimensions.get('window');

class Notification extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>In-App Notification</Text>
        <Text style={styles.content}>You have 10 unread notifications!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 100,
    width,
    backgroundColor: '#ff505c',
    padding: 16,
    // margin: 10,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
  },
  content: {
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Notification;
