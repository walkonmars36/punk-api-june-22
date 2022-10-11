import React from "react";
import "./Header.scss";
import logo from "../../assets/images/brewdog-logo.png";

const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="brewdog logo" />
      <h1 className="header__title">BEER!</h1>
    </div>
  );
};

export default Header;
