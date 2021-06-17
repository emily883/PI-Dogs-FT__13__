import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Card from "../Card/card.js";
import { getDogs, getDetails } from "../../Redux/actions";
import style from "./dogs.module.css";

function Dogs(props) {
  const [page, setpage] = useState(1);

  useEffect(() => {
    props.getDogs(page);
  }, [page]);


  return (
    <>
      <div className={style.Dogs_container}>
        {props.Dogs.results ? (
          props.Dogs.results.map((m) => {
            return (
              <Card
                key={m.id}
                id={m.id}
                name={m.name}
                img={m.image.url}
                temperament={m.temperament}
              />
            );
          })
        ) : (
          <h1>Cargando.....</h1>
        )}
      </div>
      <div className={style.pagination}>
        {
            page === 1 
            ? <button disabled={true}>BACK</button>
            : <button onClick={() => setpage(page - 1)}>BACK</button>
        }
        {/* //DESABILITAR CUANDO YA NO HAY MAS PAGINAS */}
        <button onClick={() => setpage(page + 1)}>NEXT</button>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    Dogs: state.Dogs,
    Detail: state.details
  };
}

function mapDipatchToProps(dispatch) {
  return {
    getDogs: (page) => dispatch(getDogs(page)),
    getDetails: (id) => dispatch(getDetails(id))
  };
}

export default connect(mapStateToProps, mapDipatchToProps)(Dogs);
