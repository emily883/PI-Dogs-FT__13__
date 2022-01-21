import React from "react";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";
import logo from "./DogLogo.png";

export default function Navbar() {
 
return (
    <div>
      <nav className={style.nav}>
        <Link to={"/"}>
          
        <h4>f1b0</h4>
        </Link>
        <Link to={"/home"}>
          <h4 className={style.h4}> Home </h4>
        </Link>
        <Link to={"/create"}>
          <h4 className={style.h4}> Create your dog!</h4>
        </Link>
      </nav>
    </div>
  );
}

/*
-----------------------------------------------------------------------------
*/

/* return (
    <div className={style.mainContainer}>
      <nav className={style.navContainer}>
        <Link to="/">
          <img src={logo} className={style.logo} alt="logo" />
        </Link>
        <div className={style.linkContainer}>
          <Link to="/home" className={style.home}>
            Home
          </Link>
          <Link to="/create" className={style.create}>
            Create your dog!
          </Link>
        </div>
      </nav>
    </div>
  );
}*/