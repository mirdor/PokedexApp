import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import ThemeProvider from './src/context/theme/ThemeContext';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
