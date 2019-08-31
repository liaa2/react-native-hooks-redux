import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';

import { Context as BlogContext } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({
  navigation,
}) => {
  const {state, deleteBlogPost} = useContext(BlogContext);
  
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        /*
          Object {
            "index": 0,
            "item": Object {
              "title": "Blog Post # 1",
            },
            "separators": Object {
              "highlight": [Function highlight],
              "unhighlight": [Function unhighlight],
              "updateProps": [Function updateProps],
            },
          }
          blogPost Object {
            "index": 1,
            "item": Object {
              "title": "Blog Post # 2",
            },
            "separators": Object {
              "highlight": [Function highlight],
              "unhighlight": [Function unhighlight],
              "updateProps": [Function updateProps],
            },
          }
        */
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id })}>
            <View style={styles.rowStyle}>
              <Text style={styles.titleStyle}>{item.title}</Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather
                  name="trash"
                  style={styles.iconStyle}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: <TouchableOpacity onPress={() => navigation.navigate('Create')}>
      <Feather name="plus" size={30} />
      </TouchableOpacity>  
  };
};

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  titleStyle: {
    fontSize: 18,
  },
  iconStyle : {
    fontSize: 14,
  }
});

export default IndexScreen;
