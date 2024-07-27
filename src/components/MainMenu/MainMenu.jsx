import { useContext } from "react";
import "./MainMenu.css";
import { ThemeContext } from "../../App";

import LogoIcon from "../LogoIcon";

import LogoTitle from '../LogoTitle'

function MainMenu() {
  const {theme} = useContext(ThemeContext);

  return (
    <div className="left-menu-container" style={{backgroundColor:  theme.type === 'dark' ? theme.dark.menuColor : theme.light.menuColor}}>
      <div className="logo-container">
        <div className={theme.type === 'dark' ? 'logo-img logo-img-dark' : 'logo-img logo-img-light'}>
          <LogoIcon />
        </div>
        <div  className={theme.type === 'dark' ? 'logo-title' : 'logo-title logo-title-light'}>
          <LogoTitle />
        </div>
      </div>

      <div className="submenus">
        <div className="top-submenu">
          <div className="icon-container">
            <div className="inner-icon-container">
              <span className={theme.type === 'dark' ? 'icon icon-dark material-symbols-outlined' : 'icon material-symbols-outlined icon-light'}>home</span>
              <span className={theme.type === 'dark' ? 'icon-desc icon-desc-dark' : 'icon-desc icon-desc-light'}>home</span>
            </div>
          </div>

          <div className="icon-container">
            <div className="inner-icon-container">
            <span className={theme.type === 'dark' ? 'icon icon-dark material-symbols-outlined' : 'icon material-symbols-outlined icon-light'}>apps</span>
            <span className={theme.type === 'dark' ? 'icon-desc icon-desc-dark' : 'icon-desc icon-desc-light'}>apps</span>
            </div>
          </div>

          <div className="icon-container">
            <div className="inner-icon-container">
            <span className={theme.type === 'dark' ? 'icon icon-dark material-symbols-outlined' : 'icon material-symbols-outlined icon-light'}>token</span>
            <span className={theme.type === 'dark' ? 'icon-desc icon-desc-dark' : 'icon-desc icon-desc-light'}>token</span>
            </div>
          </div>

          <div className="icon-container">
            <div className="inner-icon-container">
            <span className={theme.type === 'dark' ? 'icon icon-dark material-symbols-outlined' : 'icon material-symbols-outlined icon-light'}>extension</span>
            <span className={theme.type === 'dark' ? 'icon-desc icon-desc-dark' : 'icon-desc icon-desc-light'}>plugins</span>
            </div>
          </div>

          <div className="icon-container">
            <div className="inner-icon-container">
            <span className={theme.type === 'dark' ? 'icon icon-dark material-symbols-outlined' : 'icon material-symbols-outlined icon-light'}>group</span>
            <span className={theme.type === 'dark' ? 'icon-desc icon-desc-dark' : 'icon-desc icon-desc-light'}>groups</span>
            </div>
          </div>

          <div className="icon-container">
            <div className="inner-icon-container">
            <span className={theme.type === 'dark' ? 'icon icon-dark material-symbols-outlined' : 'icon material-symbols-outlined icon-light'}>cookie</span>
            <span className={theme.type === 'dark' ? 'icon-desc icon-desc-dark' : 'icon-desc icon-desc-light'}>cookies</span>
            </div>
          </div>

          <div className="icon-container">
            <div className="inner-icon-container">
            <span className={theme.type === 'dark' ? 'icon icon-dark material-symbols-outlined' : 'icon material-symbols-outlined icon-light'}>new_releases</span>
            <span className={theme.type === 'dark' ? 'icon-desc icon-desc-dark' : 'icon-desc icon-desc-light'}>releases</span>
            </div>
          </div>
        </div>

        <div className="bottom-submenu">
          <div className="icon-container">
            <div className="inner-icon-container">
            <span className={theme.type === 'dark' ? 'icon icon-dark material-symbols-outlined' : 'icon material-symbols-outlined icon-light'}>settings</span>
            <span className={theme.type === 'dark' ? 'icon-desc icon-desc-dark' : 'icon-desc icon-desc-light'}>settings</span>
            </div>
          </div>
          <div className="icon-container">
            <div className="inner-icon-container">
            <span className={theme.type === 'dark' ? 'icon icon-dark material-symbols-outlined' : 'icon material-symbols-outlined icon-light'}>logout</span>
            <span className={theme.type === 'dark' ? 'icon-desc icon-desc-dark' : 'icon-desc icon-desc-light'}>logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
