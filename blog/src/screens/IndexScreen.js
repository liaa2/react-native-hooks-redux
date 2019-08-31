import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

const IndexScreen = () => {
  const {state, addBlogPost} = useContext(BlogContext);
  
  return (
    <View>
      <Text>index:</Text>
      <Button title="Add Posts" onPress={addBlogPost}/>
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
          <Text>{item.title}</Text>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({});

export default IndexScreen;
