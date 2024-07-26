import { useContext } from "react";
import "./MainMenu.css";
import { ThemeContext } from "../../App";

function MainMenu() {
  const {theme} = useContext(ThemeContext);

  return (
    <div className="left-menu-container" style={{backgroundColor: theme === 'dark' ? "rgba(0, 0, 0, 0.1)" : "#66bfbf"}}>
      <div className="logo-container">
        <div className="logo-img"></div>
        <div className="logo-title"></div>
      </div>

      <div className="submenus">
        <div className="top-submenu">
          <div className="icon-container">
            <div className="inner-icon-container">
              <span className="icon material-symbols-outlined">home</span>
              <span className="icon-desc">home</span>
            </div>
          </div>

          <div className="icon-container">
            <div className="inner-icon-container">
              <span className="icon material-symbols-outlined">apps</span>
              <span className="icon-desc">apps</span>
            </div>
          </div>

          <div className="icon-container">
            <div className="inner-icon-container">
              <span className="icon material-symbols-outlined">token</span>
              <span className="icon-desc">token</span>
            </div>
          </div>

          <div className="icon-container">
            <div className="inner-icon-container">
              <span className="icon material-symbols-outlined">extension</span>
              <span className="icon-desc">plugins</span>
            </div>
          </div>

          <div className="icon-container">
            <div className="inner-icon-container">
              <span className="icon material-symbols-outlined">group</span>
              <span className="icon-desc">groups</span>
            </div>
          </div>

          <div className="icon-container">
            <div className="inner-icon-container">
              <span className="icon material-symbols-outlined">cookie</span>
              <span className="icon-desc">cookies</span>
            </div>
          </div>

          <div className="icon-container">
            <div className="inner-icon-container">
              <span className="icon material-symbols-outlined">new_releases</span>
              <span className="icon-desc">releases</span>
            </div>
          </div>
        </div>

        <div className="bottom-submenu">
          <div className="icon-container">
            <div className="inner-icon-container">
              <span className="icon material-symbols-outlined">settings</span>
              <span className="icon-desc">settings</span>
            </div>
          </div>
          <div className="icon-container">
            <div className="inner-icon-container">
              <span className="icon material-symbols-outlined">logout</span>
              <span className="icon-desc">logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
