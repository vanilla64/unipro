import React from 'react';
import './Header.sass'
import logo from '../../images/logo.png'

function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo"/>
      <div className="header__navbar" />
      <div className="header__btn" />
    </header>
  );
}

export default Header;
