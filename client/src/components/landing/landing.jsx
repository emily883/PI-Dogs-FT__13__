import React from "react";
import { NavLink } from "react-router-dom";
import style from "./landing.module.css";

function Landing() {
  return (
    <div className={style.landing}>
      <div className={style.container}>
        <div className={style.msgContainer}>
          <div className={style.title}>
            <h1 className={style.welcome}>
              Welcome to
              <br />
              <span className={style.span}>house of paws!</span>
            </h1>
          </div>
          <h5 className={style.text}>
            Come in and learn about your favorite dog
          </h5>
          <div>
            <NavLink to="/home">
              <button className={style.button}>
                <span>Enter</span>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
