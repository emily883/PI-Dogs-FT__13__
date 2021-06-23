import React from "react";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";
import logo from "./DogLogo.png";

export default function Navbar() {
  return (
    <div className={style.mainContainer}>
      <nav className={style.navContainer}>
        <Link to="/">
          <img src={logo} className={style.logo} alt="logo" />
        </Link>
        <div className={style.linkContainer}>
          <Link to="/home" className={style.home}>
            Home
          </Link>
          <Link to="/about" className={style.about}>
            About
          </Link>
          <Link to="/create" className={style.create}>
            Create breed
          </Link>
        </div>
      </nav>
    </div>
  );
}
