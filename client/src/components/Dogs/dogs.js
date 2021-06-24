import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Card from "../Card/card.js";
import { getDogs, PageSelection, searchIt } from "../../Redux/actions";
import style from "./dogs.module.css";
import Search from "../SearchBar/searchbar.js";
import paginated from "../../functions/paginated.js";
import Filters from "../OrderFilter/Filters/filters.js";
import Order from "../OrderFilter/Order/order.js";
// const image =
//   "https://static.wixstatic.com/media/760dfc_84266ca3cce4402290a46a7145e1de57~mv2.jpg/v1/fill/w_340,h_220,al_c,q_80,usm_0.66_1.00_0.01/Pets%20Picture%20Not%20Available.webp";

function Dogs(props) {
  const [input, setInput] = useState("");

  useEffect(() => {
    if (!props.searching) {
      props.getDogs();
    }

  }, [props.page]);

  function changePage(option) {
    if (option === "BACK") {
      props.changePage(props.page, "BACK");
    }
    if (option === "NEXT") {
      props.changePage(props.page, "NEXT");
    }
  }

  var Dogs = [...props.Dogs];
  Dogs = paginated(Dogs, props.page);
  return (
    <>
      <div>
        <Filters input={input} />
        <Order />
        <Search input={input} setInput={setInput} />
      </div>
      <div className={style.Dogs_container}>
        {Dogs[0] ? (
          Dogs.map((m) => {
            if (m.error) {
              return <p key={m.error}>{m.error}</p>;
            }
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
          <h1>Loading.....</h1>
        )}
      </div>
      <div className={style.pagination}>
        {props.page === 1 ? (
          <button disabled={true}></button>
        ) : (
          <button onClick={() => changePage("BACK") } className={style.Back}>BACK</button>
        )}

        {Dogs.length < 8 ? (
          <button disabled={true}></button>
        ) : (
          <button onClick={() => changePage("NEXT")} className={style.Next}>NEXT</button>
        )}
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    Dogs: state.Dogs,
    page: state.page,
    searching: state.searching,
    filteredDogs: state.filteredDogs,
  };
}

function mapDipatchToProps(dispatch) {
  return {
    getDogs: () => dispatch(getDogs()),
    changePage: (page, action) => dispatch(PageSelection(page, action)),
    searchIt: (dogs, input) => dispatch(searchIt(dogs, input)),
  };
}

export default connect(mapStateToProps, mapDipatchToProps)(Dogs);
