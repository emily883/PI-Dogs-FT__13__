import React from "react";
import style from "./card.module.css";
import { Link } from "react-router-dom";

export default function Card({ id, name, img, temperament }) {
  return (
    <div className={style.cardContainer}>
      <Link to={`/detail/${id}`}>
          <p className={style.title}>{name}</p>
        <img src={img} className={style.cardImg} alt="dog" />
        <div className={style.info}>
          <br />
          <div className={style.temperaments}>
            <p>{temperament}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
