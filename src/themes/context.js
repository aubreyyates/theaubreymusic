import { createContext } from 'react';

export const ThemeToggleContext = createContext({
  toggleTheme: () => {},
  themeMode: 'light'
});
