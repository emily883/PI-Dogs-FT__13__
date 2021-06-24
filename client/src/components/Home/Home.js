import React from "react";
import style from "./Home.module.css";
import Navbar from "../Navbar/navbar.js";
import Dogs from "../Dogs/dogs.js";

function Home() {
  return (
    <div className={style.homeContainer}>
      <Navbar />
      <div>
        <Dogs />
      </div>

    </div>
  );
}

export default Home;
