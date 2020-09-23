import { createContext, useContext } from 'react';

type ThemeState = {
  name: string;
};

type ComponentProps = {
  name: 'light' | 'dark';
};

const DEFAULT_THEME_STATE = {
  name: 'light',
};

const ThemeContext = createContext<ThemeState>(DEFAULT_THEME_STATE);

export const useTheme = () => useContext(ThemeContext);
