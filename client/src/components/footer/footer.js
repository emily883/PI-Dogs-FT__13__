import React from "react";
import style from "./footer.module.css";
import dogLogo from "./DogLogo.png";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function footer() {
  return (
    <div className={style.footerContainer}>
      <img src={dogLogo} alt="Dog logo" ></img>
      <span>Emily Cruz, 2021</span>
      <div className={style.icons}>
        <ul className={style.icon}>
          <li>
            <a
              href="https://github.com/emily883"
              target="_blank"
              class="fa-github"
              rel="noreferrer"
            > <FaGithub /></a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/emilycruz/"
              target="_blank"
              class="fa-linkedin"
              rel="noreferrer"
            > <FaLinkedin /></a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/mili_panda_880/"
              target="_blank"
              class="fa-instagram"
              aria-hidden="true"
              rel="noreferrer"
            > <FaInstagram /></a>
          </li>
        </ul>
      </div>
    </div>
  );
}
