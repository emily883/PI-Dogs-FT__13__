import React, { useState } from "react";
import style from "./Home.module.css";
import Navbar from "../Navbar/navbar.js";
import Dogs from "../Dogs/dogs.js";
import Filters from "../OrderFilter/Filters/filters.js";
import Order from "../OrderFilter/Order/order.js";

function Home() {
  const [input, setInput] = useState("");
  return (
    <div className={style.homeContainer}>
      <Navbar />
      <div className={style.filterContainer}>
          <Filters input={input} />
          <Order />
        </div>
      <div className={style.Dogs}>
        <Dogs input={input} setInput={setInput} />
      </div>

    </div>
  );
}

export default Home;
