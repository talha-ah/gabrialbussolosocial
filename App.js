import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import Navigation from './navigation';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        showHideTransition="slide"
      />
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
