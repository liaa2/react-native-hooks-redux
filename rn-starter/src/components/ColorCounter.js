import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

function ColorCounter({ color, onIncrease, onDecrease}) {
  return (
    <View>
     <Text>{color}</Text>
      <Button title={`Increase ${color}`} onPress={() => onIncrease()}/>
      <Button title={`Decrease ${color}`} onPress={() => onDecrease()}/>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  }
})

export default ColorCounter;