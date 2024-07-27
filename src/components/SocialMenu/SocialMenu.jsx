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
        <i className={theme.type === 'dark' ? "icon icon-dark fa-regular fa-sun" : "icon icon-light fa-regular fa-moon"} onClick={handleThemeChanger} ></i>
        <i className={theme.type === 'dark' ? "icon icon-dark fa-brands fa-square-facebook" : "icon icon-light fa-brands fa-square-facebook"}></i>
        <i className={theme.type === 'dark' ? "icon icon-dark fa-brands fa-x-twitter" : "icon icon-light fa-brands fa-x-twitter"}></i>
        <i className={theme.type === 'dark' ? "icon icon-dark fa-brands fa-instagram" : "icon icon-light fa-brands fa-instagram"}></i>
        </div>
    </div>

}

export default SocialMenu;
