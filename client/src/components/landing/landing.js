import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './landing.module.css';

function Landing(){
    return (
        <div className={style.container}>
            <div>
                <h1>PI-Dogs</h1>
                <h5>Come in and learn about your favorite dog</h5>
                <div>
                    <NavLink exact to='/home'>
                        <button>Enter</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Landing