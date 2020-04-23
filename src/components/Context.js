import React from 'react';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(window.__theme || 'dark');

  function updateTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    window.__setPreferredTheme(newTheme);
  }

  return (
    <AppContext.Provider value={{ theme, updateTheme }}>
      {children}
    </AppContext.Provider>
  );
};
