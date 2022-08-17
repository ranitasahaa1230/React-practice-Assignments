import React from "react";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <FaBars className="header__menu" size={22} />

      <div className="flex__hub">
        <Link to="/">
          <img src={logo} alt="logo" className="header__logo" />
        </Link>
        <Link to="/" className="header__name">
          Learning Hub
        </Link>
      </div>

      <div className="form-right">
        <div className="mode__icons">
          <i className="fa-solid fa-moon"></i>
        </div>

        <Link to="/signup">
          <button className="header__signup">SIGN UP</button>
        </Link>

        <Link to="/login">
          <div className="header__icons">
            <i className="fa-solid fa-user"></i>
            <span className="font__icons">LOGIN</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
