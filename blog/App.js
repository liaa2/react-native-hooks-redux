import React from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';
import IndexScreen from './src/screens/IndexScreen';
import { BlogProvider } from './src/context/BlogContext';

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


// BlogProvider is wrapping RN stack navigator inside of it, which therefore includes all the screens that we are displaying inside the navigator
export default (() => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
})
