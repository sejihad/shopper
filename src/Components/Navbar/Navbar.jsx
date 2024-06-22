import React, { useState } from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";
import cart_icon from "../Assets/cart_icon.png";
import logo from "../Assets/logo.png";
const textDNone = {
  textDecoration: "none",
};
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link style={textDNone} to="/">
            Shop
          </Link>
        </li>
        <li onClick={() => setMenu("men")}>
          <Link style={textDNone} to="men">
            Men
          </Link>
        </li>
        <li onClick={() => setMenu("women")}>
          <Link style={textDNone} to="women">
            Women
          </Link>
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link style={textDNone} to="kids">
            Kids
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
