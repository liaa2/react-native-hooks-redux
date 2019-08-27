import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, TextInput } from 'react-native';

function TextScreen() {
  const [name, setName] = useState('');

  //in RN, need to apply style every time for TextInput, otherwise can't see the value
  return (
    <View>
      <TextInput
        style={styles.inputStyle}
        // disable autoCapitalize on ios device
        autoCapitalize="none"
        // turn off mobile's autoCorrect
        autoCorrect={false}
        value={name}
        // newValue is equivalent to event.target.value in React
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text>Name is: {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  inputStyle: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  }
})

export default TextScreen;