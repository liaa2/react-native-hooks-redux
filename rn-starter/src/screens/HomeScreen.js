import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

// props object is added by RN stackNavigator
const HomeScreen = ({navigation}) => {
  
  // Button - very simple component for showing a button and detecting a press
  // TouchableOpacity - Highly customizable component that can detect a press on just about any kinf of element.
  return(
    <View>
      <Text style={styles.text}>Hi There!</Text>
      <Button
        // pass the route name inside navigate
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo"
      />
      <Button 
        onPress={() => navigation.navigate('List')}
        title="Go to List Demo"
      />
      <Button 
        onPress={() => navigation.navigate('Image')}
        title="Go to Image Demo"
      />
      <Button 
        onPress={() => navigation.navigate('Counter')}
        title="Go to Counter Demo"
      />
      <Button 
        onPress={() => navigation.navigate('Color')}
        title="Go to Color Demo"
      />
      <Button 
        onPress={() => navigation.navigate('Square')}
        title="Go to Square Demo"
      />
      <Button 
        onPress={() => navigation.navigate('Text')}
        title="Go to Text Demo"
      />
      <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
