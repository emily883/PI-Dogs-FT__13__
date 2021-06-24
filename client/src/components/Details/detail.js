import React, { useEffect } from "react";
import { connect } from "react-redux";
import style from "./detail.module.css";
import { getDetails } from "../../Redux/actions";
import Navbar from "../Navbar/navbar";
// import Footer from "../footer/footer";
import { FaDog } from "react-icons/fa";

function Details({ id, Detail, getDetails }) {
  useEffect(() => {
    getDetails(id);
  }, []);

  const { height, image, life_span, name, temperament, weight } = Detail;
  var temperaments = temperament?.split(", ");
  return (
    <>
      <Navbar />
      <div className={style.Details}>
        {Detail.id == id ? (
          <div>
            <h1 className={style.name}>{name}</h1>
            <img src={image.url} alt="Doggie" className={style.image} />
            <br />
            <div className={style.paw}>
              <FaDog />
            </div>
            <br />
            <span className={style.weight}>
              Weight: {weight.imperial} Pounds
            </span>
            <br />
            <br />
            <div className={style.paw}>
              <FaDog />
            </div>
            <br />
            <span className={style.height}>
              Height: {height.imperial} Inches
            </span>
            <br />
            <br />
            <div className={style.paw}>
              <FaDog />
            </div>
            <br />
            <span className={style.life_span}>Life span: {life_span}</span>
            <br />
            <br />
            <div className={style.paw}>
              <FaDog />
            </div>
            <br />
            {temperaments.map((m) => (
              <span key={m} className={style.temperament}>
                {m}
              </span>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    Detail: state.details,
  };
}

function mapDipatchToProps(dispatch) {
  return {
    getDetails: (id) => dispatch(getDetails(id)),
  };
}

export default connect(mapStateToProps, mapDipatchToProps)(Details);
