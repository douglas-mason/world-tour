import React from 'react';
import { createContext, useContext, useState } from 'react';

type ThemeTypes = 'light' | 'dark';

type ThemeState = {
  name: ThemeTypes;
  setTheme: React.Dispatch<React.SetStateAction<ThemeTypes>>;
};

const DEFAULT_THEME_STATE: ThemeState = {
  name: 'light',
  setTheme: () => {},
};

const ThemeContext = createContext<ThemeState>(DEFAULT_THEME_STATE);

export const useTheme = () => useContext(ThemeContext);

export const ThemeContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeTypes>('light');
  return (
    <ThemeContext.Provider value={{ name: theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
