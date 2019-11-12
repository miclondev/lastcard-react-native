import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = props => {
  const [theme, setTheme] = useState('theme1');
  const changeTheme = id => setTheme(id);
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
