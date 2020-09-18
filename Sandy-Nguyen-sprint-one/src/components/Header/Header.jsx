import React from "react";
import logo from '../../assets/logo/Logo-brainflix.svg';
import uploadIcon from '../../assets/icons/SVG/Icon-upload.svg';
import './header.scss'

const Header = () => {
    return (
        <header className="header__parent">
            <div className="header__logo-container">
                <a href="index.html"><img src={logo} className="header__logo" alt="BrainFlix Logo"/></a>
            </div>
            <div className="search-bar-container">
                <form className="search-bar">
                    <input type="text" className="header__search-bar-input" placeholder="Search"/>
                </form>
            </div>
            <div className="header__upload-photo-container">
                <button type="button" className="button header__upload-button"><img src={uploadIcon} alt="Upload Icon" className="header__upload-button-icon"/> UPLOAD</button>
                <div className="header__circle-photo"></div>
            </div>
      </header>
    )
}

export default Header;