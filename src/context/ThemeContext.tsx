import React, { createContext, useEffect, useReducer } from "react";
import { Theme } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import themeReducer, { darkTheme, lightTheme } from "./themeReducer";

export type ThemeState = {
  currentTheme: "light" | "dark";
  colors: {
    opaque: string;
    contrastText: string;
    searchBarBG: string;
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
    colorScheme === "dark" ? darkTheme : lightTheme
  );

  useEffect(() => {
    colorScheme === "light" ? setLightTheme() : setDarkTheme();
  }, [colorScheme]);

  const setDarkTheme = () => {
    dispatch({ type: "set-dark-theme" });
  };

  const setLightTheme = () => {
    dispatch({ type: "set-light-theme" });
  };

  return (
    <ThemeContext.Provider value={{ theme, setDarkTheme, setLightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
