import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const searchApi = async () => {
   
      const response = await yelp.get('/search', {
        // the value inside params object will make url looks like /search?limit=50 etc
        params: {
          limit: 50,
          term,
          location: 'san jose',
        }
      });
      setResults(response.data.businesses);
  
   
  }

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={searchApi}
      />
      <Text>Search Screen</Text>
      <Text>We have found {results.length} results</Text>
    </View>
  )
}

const styles = StyleSheet.create({});

export default SearchScreen;
