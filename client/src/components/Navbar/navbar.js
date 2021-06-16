import React from 'react';
import { Link } from 'react-router-dom';
import style from "./navbar.module.css";
import logo from "./DogLogo.png";
import Search from '../SearchBar/searchbar.js'

export default function Navbar (){

    return(
        <div className={style.mainContainer}>
            <nav className={style.navContainer}>
                <div className={style.linkContainer}>
                    <img src={logo} className={style.logo} alt='logo' />
                    <Link to="/home" className={style.home}>Home</Link>
                    <Link to="/about" className={style.about}>About</Link>
                    <Link to="/create" className={style.create}>Create breed</Link>
                </div>
                <Search />
            </nav>
        </div>
    )

}