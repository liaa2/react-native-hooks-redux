import React from 'react'; // React - how different components work together
import { Text, StyleSheet, View } from 'react-native'; // React native - knows how to take information from components and use it to show contents on mobile devices

function ComponentsScreen() {
  const greeting = 'hi There';

  return (
    <View>
      <Text style={styles.textStyle}>This is the components screen</Text>
      <Text>{greeting}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  }
})

export default ComponentsScreen;