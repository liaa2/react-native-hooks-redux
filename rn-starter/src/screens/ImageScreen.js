import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {

  return (
    <View>
      <ImageDetail title='Forest' imageSource={require('../../assets/forest.jpg')}/>
      <ImageDetail title='Beach' imageSource={require('../../assets/beach.jpg')}/>
      <ImageDetail title='Mountain' imageSource={require('../../assets/mountain.jpg')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ImageScreen;
