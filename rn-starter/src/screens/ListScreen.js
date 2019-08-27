import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

function ListScreen() {
  const friends = [
    { name: 'Friend #1' },
    { name: 'Friend #2' },
    { name: 'Friend #3' },
    { name: 'Friend #4' },
    { name: 'Friend #5' },
    { name: 'Friend #6' },
    { name: 'Friend #7' },
    { name: 'Friend #8' },
    { name: 'Friend #9' },
  ];

  // FlatList is like mapping in React
  return (
    <FlatList
      // keyExtractor is like `key` in React
      keyExtractor={(friend) => friend.name}
      data={friends}
      // destructuring element to {item}
      renderItem={({item}) => {
        // element === {item: { name: 'Friend #1' }, index: 0 }
        return <Text style={styles.textStyle}>{item.name}</Text>
      }}
      // horizontal means user will scroll from left to wright instead of up and down, the list will be displayed as a long line
      horizontal
      // hide the scroll bar
      showsHorizontalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  }
});

export default ListScreen;
