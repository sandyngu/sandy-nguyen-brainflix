import React from "react";
const Logo = './assets/logo/Logo-brainflix.svg';

const Header = () => {
    return (
        <div className="header__parent">
          <div className="header__logo-container">
              <a href="index.html"><img src={Logo} className="header__logo" alt="BrainFlix Logo"/></a>
          </div>
          <div className="header__search-upload-photo-container">
              <form className="search-bar">
                  <input type="text" className="search-bar__input" placeholder="Search"/><img src="/assets/icons/SVG/Icon-search.svg"/>
              </form>
              <button type="button" className="button header__upload-button"><img src="/assets/icons/SVG/Icon-upload.svg"/>UPLOAD</button>
              <div className="circle-photo"></div>
          </div>
      </div>
    )
}

export default Header;