import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getTemperaments, FilterBy, getDogs,noFilter } from "../../../Redux/actions";
import style from "./filters.module.css";

function Filters({ temperaments, getTemperaments, Dogs, FilterBy,noFilter }) {
  const [tempe, setTempe] = useState([]);

  useEffect(() => {
    if (tempe[0]) {
      FilterBy({
        temperaments: tempe,
        dogs: Dogs,
      });
    } else {
      noFilter()
    }
  }, [tempe]);

  function handleTemperament(e) {
    if (tempe.includes(e.target.value)) {
      alert(
        "You have already selected that temperament, please choose another"
      );
    } else {
      setTempe([...tempe, e.target.value]);
    }
  }

  function deleteTemp(name) {
    setTempe(tempe.filter((m) => m !== name));
  }

  useEffect(() => {
    getTemperaments();
  }, []);

  return (
    <>
      <div className={style.container}>
        <h1 className={style.title}>Filter By</h1>
        <select
          name="temperaments"
          onChange={handleTemperament}
          className={style.getTemperaments}
        >
          <option value="" selected={true}>
            Select temperaments
          </option>
          {temperaments &&
            temperaments.map((m) => (
              <option value={m.temperament} key={m.id}>
                {m.temperament}
              </option>
            ))}
        </select>
        {tempe &&
          tempe.map((m) => (
            <div key={m} className={style.temperamentsSelected}>
              <p className={style.p}>
                {m}
                <button onClick={() => deleteTemp(m)} className={style.delete}>
                  X
                </button>
              </p>
            </div>
          ))}

        <button onClick={() => setTempe([])} className={style.ButtonClear}>
          Clear filter
        </button>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    temperaments: state.temperaments,
    Dogs: state.Dogs,
  };
}

function mapDipatchToProps(dispatch) {
  return {
    getTemperaments: () => dispatch(getTemperaments()),
    FilterBy: (info) => dispatch(FilterBy(info)),
    getDogs: () => dispatch(getDogs()),
    noFilter: () => dispatch(noFilter())
  };
}

export default connect(mapStateToProps, mapDipatchToProps)(Filters);
