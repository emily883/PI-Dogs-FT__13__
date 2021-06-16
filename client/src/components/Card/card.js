import React from "react";
import style from "./card.module.css";
import { Link } from 'react-router-dom';


export default function Card({ id, name, img, temperament }) {
  return (
    <div>
      <p className={style.title}>{name}</p>
      <div className={style.imgContainer}>
        <img src={img} className={style.cardImg} alt="dog" />
      </div>
      <div>
          <p>{temperament}</p>
      </div>
      <Link className={style.button} to={`/detail/${id}`}>
        <button className={style.button}>See details</button>
      </Link>
    </div>
  );
}
