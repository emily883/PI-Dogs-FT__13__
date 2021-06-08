import React from "react";
import style from "./footer.module.css";
import dogLogo from "./DogLogo.png";

export default function footer() {
  return (
    <div className={style.footerContainer}>
      <img src={dogLogo} alt="Dog logo"></img>
      <span>Emily Cruz, 2021</span>
      <div className={style.icons}>
        <ul className={style.icon}>
          <li>
            <a
              href="https://github.com/emily883"
              target="_blank"
              class="fa fa-github"
              aria-hidden="true"
              rel="noreferrer"
            />
          </li>
          <li>
            <a
              href=""
              target="_blank"
              class="fa fa-linkedin"
              aria-hidden="true"
              rel="noreferrer"
            />
          </li>
          <li>
            <a
              href=""
              target="_blank"
              class="fa fa-instagram"
              aria-hidden="true"
              rel="noreferrer"
            />
          </li>
          <li>
            <a
              href=""
              target="_blank"
              class="fa fa-twitter"
              aria-hidden="true"
              rel="noreferrer"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
