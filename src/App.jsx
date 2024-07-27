import { createContext, useState } from 'react';
import './App.css';

import MainMenu from './components/MainMenu/MainMenu';
import SocialMenu from './components/SocialMenu/SocialMenu';

export const ThemeContext = createContext({type: 'dark', dark: {menuColor: "rgba(0, 0, 0, 0.1)", iconColor: "#fff", iconDescColor: "#fff"}, light: {menuColor: "#9CAFAA", iconColor: "#000", iconDescColor: "#000"}});


function App(){
  const [theme, setTheme] = useState({type: 'dark', 
    dark: {menuColor: "rgba(0, 0, 0, 0.1)", iconColor: "#fff", iconDescColor: "#fff", bgColor: "#333"}, 
    light: {menuColor: "#9CAFAA", iconColor: "#000", iconDescColor: "#000", bgColor: "#D6DAC8"}});

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
       <div className="container" style={{backgroundColor: theme.type === 'dark' ? theme.dark.bgColor : theme.light.bgColor}}>
        <MainMenu />
        <SocialMenu />
      </div>
    </ThemeContext.Provider>
  )
}

export default App;