import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { orderBy } from "../../../Redux/actions";
import style from "./order.module.css";

function Order({ Dogs, orderBy, filter }) {
  const [info, setInfo] = useState({
    info: Dogs,
    order: "AS",
    property: "name",
  });

  useEffect(() => {
    if (filter[0] && !filter[0].error) {
      setInfo({
        ...info,
        info: filter,
      });
    }
    if (!filter[0]) {
      setInfo({
        ...info,
        info:Dogs
      })
    }
  }, [filter]);

  function handleSubmit(e) {
    e.preventDefault();
    orderBy(info);
  }

  function handleChangeOrder(e) {
    if (e.target.value === "DS") {
      setInfo({
        ...info,
        order: "DS",
      });
    } else {
      setInfo({
        ...info,
        order: "AS",
      });
    }
  }

  function handleChangeValue(e) {
    if (e.target.value === "weight") {
      setInfo({
        ...info,
        property: "weight",
      });
    } else {
      setInfo({
        ...info,
        property: "name",
      });
    }
  }

  return (
    <div className={style.Container}>
      <h2 className={style.title}>Sort By</h2>
      <form onSubmit={handleSubmit} className={style.form}>
        <select
          defaultValue="name"
          onChange={handleChangeValue}
          className={style.option}
        >
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
        <select
          defaultValue="AS"
          onChange={handleChangeOrder}
          className={style.order}
        >
          <option value="AS">Ascending</option>
          <option value="DS">Descending</option>
        </select>
        <button type="submit" className={style.ButtonSort}>
          Sort
        </button>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    Dogs: state.Dogs,
    filter: state.filter,
  };
}

function mapDipatchToProps(dispatch) {
  return {
    orderBy: (info) => {
      dispatch(orderBy(info));
    },
  };
}

export default connect(mapStateToProps, mapDipatchToProps)(Order);
