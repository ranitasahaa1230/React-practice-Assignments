import React from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";
// import logo from "../../assets/logo.png";
import "./Header.css";
import { Link} from "react-router-dom";

export const Header = () => {
  const { pathname } = useLocation();
  return (
    <div className="header">
      <FaBars
        className="header__menu"
        size={22}
      />

      <div className="flex__hub">
        <Link to="/">
          {/* <img src={logo} alt="logo" className="header__logo" /> */}
        </Link>
        <Link to="/" className="header__name">
          Learning Hub
        </Link>
      </div>

      {pathname ==="/" && <form>
        <input type="text" placeholder="Search for your Favorite Videos..." />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>}

      <div className="form-right">
      <div className="mode__icons">
          <i className="fa-solid fa-moon"></i>
      </div>

      <Link to="/signup">
        <button className="header__signup">SIGN UP</button>
      </Link>
      </div>

    </div>
  );
};
