import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Card from "../Card/card.js";
import { getDogs, PageSelection, searchIt } from "../../Redux/actions";
import style from "./dogs.module.css";
import Search from "../SearchBar/searchbar.js";
import paginated from "../../functions/paginated.js";

// const image =
//   "https://static.wixstatic.com/media/760dfc_84266ca3cce4402290a46a7145e1de57~mv2.jpg/v1/fill/w_340,h_220,al_c,q_80,usm_0.66_1.00_0.01/Pets%20Picture%20Not%20Available.webp";

function Dogs(props) {
  

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
  if (props.searched[0]) {
    Dogs = props.searched;
  } else {
    Dogs = [...props.Dogs];
  }
  if (props.filter[0]) {
    Dogs = props.filter;
  }
  Dogs = paginated(Dogs, props.page);
  return (
    <>
      <div className={style.mainContainer}>

        <div className={style.search}>
          <Search input={props.input} setInput={props.setInput} />
        </div>
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
              />
            );
          })
        ) : (
          <h1 className={style.loading}><img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="Loading..."/></h1>
        )}
      </div>
      <div className={style.pagination}>
        {props.page === 1 ? (
          <div> </div>
        ) : (
          <button onClick={() => changePage("BACK")} className={style.Back}>
            BACK
          </button>
        )}

        {Dogs.length < 7 ? (
          <div> </div>
        ) : (
          <button onClick={() => changePage("NEXT")} className={style.Next}>
            NEXT
          </button>
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
    filter: state.filter,
    searched: state.searched,
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
