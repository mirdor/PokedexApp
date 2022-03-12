import { ThemeState } from "./ThemeContext";

type ThemeAction = { type: "set-light-theme" | "set-dark-theme" };

const themeReducer = (state: ThemeState, action: ThemeAction) => {
  switch (action.type) {
    case "set-dark-theme":
      return darkTheme;
    case "set-light-theme":
      return lightTheme;

    default:
      return state;
  }
};

export const lightTheme: ThemeState = {
  currentTheme: "light",
  dark: false,
  colors: {
    primary: "#f23f29",
    background: "white",
    card: "#fff",
    text: "#111",
    contrastText: "#eee",
    border: "#abbeed",
    notification: "teal",
    opaque: "rgba(0,0,0,0.10)",
    searchBarBG: "#ededed",
  },
};

export const darkTheme: ThemeState = {
  currentTheme: "dark",
  dark: true,
  colors: {
    primary: "#f0513e",
    background: "#0f0f0f",
    card: "#1c1c1c",
    text: "#eee",
    contrastText: "#111",
    border: "#1f397a",
    notification: "teal",
    opaque: "rgba(255,255,255,0.4)",
    searchBarBG: "#363636",
  },
};

export default themeReducer;
