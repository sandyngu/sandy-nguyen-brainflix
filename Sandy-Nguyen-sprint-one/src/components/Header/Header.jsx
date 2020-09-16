import React from "react";
import Logo from '../../assets/logo/Logo-brainflix.svg';
import './header.scss'

const Header = () => {
    return (
        <header className="header__parent">
            <div className="header__logo-container">
                <a href="index.html"><img src={Logo} className="header__logo" alt="BrainFlix Logo"/></a>
            </div>
            <div className="header__search-upload-photo-container">
                <form className="search-bar">
                    <input type="text" className="header__search-bar-input" placeholder="Search"/>
                </form>
                <button type="button" className="button header__upload-button"><img src="../../assets/icons/SVG/Icon-upload.svg" alt="Upload Icon" className="header__upload-button-icon"/>UPLOAD</button>
                <div className="header__circle-photo"></div>
            </div>
      </header>
    )
}

export default Header;