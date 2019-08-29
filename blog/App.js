import React from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';
import IndexScreen from './src/screens/IndexScreen';

const navigator = createStackNavigator({
  Index: IndexScreen,
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs',
  }
});

// wrap the navigator with a component so we could customize it
const App = createAppContainer(navigator);

export default (() => {
  return <App />;
})
