import React, { createContext, useEffect, useReducer } from 'react';
import { Theme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import themeReducer from './themeReducer';

export type ThemeState = {
  currentTheme: 'light' | 'dark';
  colors: {
    opaque: string;
    contrastText: string;
  };
} & Theme;

type ThemeProps = {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
};

export const ThemeContext = createContext({} as ThemeProps);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const colorScheme = useColorScheme();

  const [theme, dispatch] = useReducer(
    themeReducer,
    colorScheme === 'dark' ? darkTheme : lightTheme,
  );

  useEffect(() => {
    colorScheme === 'light' ? setLightTheme() : setDarkTheme();
  }, [colorScheme]);

  const setDarkTheme = () => {
    dispatch({ type: 'set-dark-theme' });
  };

  const setLightTheme = () => {
    dispatch({ type: 'set-light-theme' });
  };

  return (
    <ThemeContext.Provider value={{ theme, setDarkTheme, setLightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  colors: {
    primary: '#6f6de8',
    background: 'white',
    card: '#fff',
    text: '#111',
    contrastText: '#eee',
    border: '#abbeed',
    notification: 'teal',
    opaque: 'rgba(0,0,0,0.25)',
  },
};

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  colors: {
    primary: '#3f3dc4',
    background: '#0f0f0f',
    card: '#1c1c1c',
    text: '#eee',
    contrastText: '#111',
    border: '#1f397a',
    notification: 'teal',
    opaque: 'rgba(255,255,255,0.25)',
  },
};

export default ThemeProvider;
