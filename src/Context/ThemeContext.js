import React, {useState, useContext, createContext} from 'react';

const ThemeContext = createContext();
function ThemeContextProvider({children}) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [dark, setDark] = useState({
    bg: '#222222',
    color: 'rgba(239, 83, 80, 1)',
    hover: 'rgba(239, 83, 80, 0.8)'
  });
  const [light, setLight] = useState({
    bg: '#ecf0f1',
    color: '#222222',
    hover: 'rgba(255, 193, , 0.8)'
  });

  const changeTheme = () => {
    setIsDarkMode(false);
    //setIsDarkMode(!isDarkMode); // We can write this way.
  }
  return (
    <ThemeContext.Provider value={{...state, changeTheme : changeTheme}}>
        {children}
    </ThemeContext.Provider>
  );
}
export const useThemeContext = () => {
    return useContext(ThemeContext);
}
export default ThemeContextProvider;
