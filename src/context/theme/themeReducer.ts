import { darkTheme, lightTheme, ThemeState } from './ThemeContext';

type ThemeAction = { type: 'set-light-theme' | 'set-dark-theme' };

const themeReducer = (state: ThemeState, action: ThemeAction) => {
  switch (action.type) {
    case 'set-dark-theme':
      return darkTheme;
    case 'set-light-theme':
      return lightTheme;

    default:
      return state;
  }
};

export default themeReducer;
