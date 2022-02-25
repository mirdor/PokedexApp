import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigator from './src/navigation/StackNavigator';
import ThemeProvider from './src/context/theme/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
