import React, { useState } from "react";
import style from "./searchbar.module.css";
import { searchIt, getDogs, PageReset } from "../../Redux/actions";
import { connect } from "react-redux";
import searchDogs from "../../functions/search";

function SearchBar({ searchIt, getDogs, input, setInput, PageReset, Dogs,filtering }) {
  const [error, setError] = useState("");

  function handleChange(e) {
    if (!/(^$)|[a-zA-Z]/.test(e.target.value)) {
      setError("Please just enter letters");
    } else {
      setError("");
      setInput(e.target.value);
      if (e.target.value) {
        PageReset();
        searchIt(searchDogs(Dogs, e.target.value));
      } else {
        getDogs();
      }
    }
  }


  return (
    <div>
      <form className={style.fromContainer} >
        <div className={style.searchBarContainer}>
          {error && <p className={style.error}>{error}</p>}
          <input
            type="text"
            placeholder="Type to search!!"
            className={style.input}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    Dogs: state.Dogs,
    page: state.page,
    filtering: state.filtering
  };
}

function mapDipatchToProps(dispatch) {
  return {
    searchIt: (input) => dispatch(searchIt(input)),
    getDogs: (page) => dispatch(getDogs(page)),
    PageReset: () => dispatch(PageReset()),
  };
}

export default connect(mapStateToProps, mapDipatchToProps)(SearchBar);
