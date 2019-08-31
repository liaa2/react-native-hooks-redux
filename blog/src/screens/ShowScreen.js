import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';

import { Context as BlogContext } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

// instead of passing id directly, need to pass navigation and then use getParam to get the value based on the key name
const ShowScreen = ({
  navigation
}) => {
  const id = navigation.getParam('id');
  const { state } = useContext(BlogContext);
  const blogPost = state.find(blogPost => blogPost.id === id);
  
  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  )
}

ShowScreen.navigationOptions = ({ navigation }) => {
  const id = navigation.getParam('id');
  return {
    headerRight: <TouchableOpacity onPress={() => navigation.navigate('Edit', { id })}>
      <EvilIcons name="pencil" size={30}/>
    </TouchableOpacity>
  }
}

const styles = StyleSheet.create({

});

export default ShowScreen;
