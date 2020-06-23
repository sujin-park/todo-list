import { useState } from 'react';
import { dark, light } from '../style/Theme';

const useTheme = () => {
  const [themeMode, setThemeMode] = useState('light');
  const theme = themeMode === 'light' ? light : dark;

  const toggleTheme = () =>
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');

  return [theme, toggleTheme] as [typeof theme, typeof toggleTheme];
};

export default useTheme;
