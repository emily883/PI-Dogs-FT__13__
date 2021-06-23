import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './landing.module.css';

function Landing(){
    return (
        <div className={style.container}>
            <div classname={style.msgContainer}>
                <h1 className={style.title}>Welcome!!</h1>
                <h5 className={style.text}>Come in and learn about your favorite dog</h5>
                <div>
                    <NavLink to='/home'>
                        <button className={style.button}>Enter</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Landing