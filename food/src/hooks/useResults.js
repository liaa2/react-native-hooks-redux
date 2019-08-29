import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async searchTerm => {
    try {
      const response = await yelp.get('/search', {
        // the value inside params object will make url looks like /search?limit=50 etc
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose',
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  }

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [
    searchApi,
    results,
    errorMessage,
  ];
}