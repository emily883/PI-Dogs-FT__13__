import React from "react";
import style from "./footer.module.css";
import {  FaGithub, FaLinkedin } from "react-icons/fa";

export default function footer() {
  return (
    <div className={style.footerContainer}>
      <span>Emily Cruz, 2021</span>
      <div className={style.icons}>
        <ul className={style.icon}>
          <li>
            <a
              href="https://github.com/emily883"
              target="_blank"
              className="fa-github"
              rel="noreferrer"
            > <FaGithub /></a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/emilycruz/"
              target="_blank"
              className="fa-linkedin"
              rel="noreferrer"
            > <FaLinkedin /></a>
          </li>
        </ul>
      </div>
    </div>
  );
}
