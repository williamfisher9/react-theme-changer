import { useContext } from 'react';
import './SocialMenu.css'
import { ThemeContext } from '../../App';
import {lightStyle, darkStyle} from '../../ConstValues'

function SocialMenu() {

    const {theme, setTheme} = useContext(ThemeContext);

    const handleThemeChanger = () => {
        console.log(`current theme: ${theme.type}`);
        theme.type === 'dark' ? setTheme({...theme, type: 'light'}) : setTheme({...theme, type: 'dark'});
    }

    return <div className='social-menu-container' style={{backgroundColor:  theme.type === 'dark' ? theme.dark.menuColor : theme.light.menuColor}}>
        <div className='social-menu'>
        <i className={theme.type === 'dark' ? "icon fa-regular fa-sun" : "icon fa-regular fa-moon"} onClick={handleThemeChanger} ></i>
        <i className="icon fa-brands fa-square-facebook"></i>
        <i className="icon fa-brands fa-x-twitter"></i>
        <i className="icon fa-brands fa-instagram"></i>
        </div>
    </div>

}

export default SocialMenu;
