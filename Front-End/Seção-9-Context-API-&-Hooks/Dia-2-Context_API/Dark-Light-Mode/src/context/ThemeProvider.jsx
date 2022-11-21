import React, { useState } from 'react';
import ThemeContext from './ThemeContext';

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [themeName, setThemeName] = useState('Mudar para dark');

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  function themeNameMessage() {
    setThemeName(themeName === 'Mudar para dark' ? 'Mudar para light' : 'Mudar para dark');
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeNameMessage, themeName}}>
     {children}
    </ThemeContext.Provider>
  );
}
