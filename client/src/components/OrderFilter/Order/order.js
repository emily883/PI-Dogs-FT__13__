import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { orderBy } from "../../../Redux/actions";
import style from './order.module.css';

function Order({Dogs, orderBy }) {
  useEffect(() => {}, []);

  const [info, setInfo] = useState({
    info: Dogs,
    order: "AS",
    property: "name",
  });

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
      <form onSubmit={handleSubmit}>
        <select defaultValue="name" onChange={handleChangeValue} className={style.option}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
        <br/>
        <select defaultValue="AS" onChange={handleChangeOrder} className={style.order}>
          <option value="AS">Ascending</option>
          <option value="DS">Descending</option>
        </select>
        <br/>
        <button type="submit" className={style.ButtonSort}>Sort</button>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    Dogs: state.DogsNoPaginated,
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
