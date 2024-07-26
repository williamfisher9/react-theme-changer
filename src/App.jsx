import { createContext, useState } from 'react';
import './App.css';

import MainMenu from './components/MainMenu/MainMenu';
import SocialMenu from './components/SocialMenu/SocialMenu';

export const ThemeContext = createContext('dark');


function App(){
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
       <div className="container" style={{backgroundColor: theme === 'dark' ? "#333" : "#fff"}}>
        <MainMenu currentTheme={theme} />
        <SocialMenu currentTheme={theme} />
      </div>
    </ThemeContext.Provider>
  )
}

export default App;