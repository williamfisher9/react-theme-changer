import { useContext } from 'react';
import './SocialMenu.css'
import { ThemeContext } from '../../App';

function SocialMenu() {

    const {theme, setTheme} = useContext(ThemeContext);

    const handleThemeChanger = () => {
        console.log(`current theme: ${theme}`);
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    }

    return <div className='social-menu-container' style={{backgroundColor: theme === 'dark' ? "rgba(0, 0, 0, 0.1)" : "#66bfbf"}}>
        <div className='social-menu'>
        <i className="icon fa-regular fa-sun" onClick={handleThemeChanger}></i>
        <i className="icon fa-brands fa-square-facebook"></i>
        <i className="icon fa-brands fa-x-twitter"></i>
        <i className="icon fa-brands fa-instagram"></i>
        </div>
    </div>

}

export default SocialMenu;
