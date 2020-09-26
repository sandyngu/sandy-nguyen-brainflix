import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/logo/Logo-brainflix.svg';
import UploadIcon from '../../assets/icons/SVG/Icon-upload.svg';
import './header.scss'

function Header() {
    return (
        <section className="header">
            <header className="header__parent">
                <div className="header__logo-container">
                    <Link to= '/'>
                        <img src={Logo} className="header__logo" alt="BrainFlix Logo"/>
                    </Link>
                </div>
                <div className="header__container">
                    <form className="header__search-bar">
                        <input type="text" name="search" className="header__search-bar-input" placeholder="Search"/>
                    </form>
                    <div className="header__upload-photo-container">
                        <Link to='/upload' className="header__upload">
                            <button type="button" className="button header__upload-button"><img src={UploadIcon} alt="Upload Icon" className="header__upload-button-icon"/> UPLOAD</button>
                        </Link>
                        <div className="header__circle-photo"></div>
                    </div>
                </div>
            </header>
        </section> 
    )
}

export default Header;