import React from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import { Provider } from './src/context/BlogContext';

const navigator = createStackNavigator({
  Index: IndexScreen,
  Show: ShowScreen,
  Create: CreateScreen,
  Edit: EditScreen,
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
    <Provider>
      <App />
    </Provider>
  );
})
