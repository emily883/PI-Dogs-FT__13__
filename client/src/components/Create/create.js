import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getTemperaments } from "../../Redux/actions";
import Navbar from "../Navbar/navbar.js";
import style from "./create.module.css";

function validateInput(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "You must enter a name";
  }
  if (input.weight && !/\d{1,2}-\d{1,2}/g.test(input.weight)) {
    errors.weight = "Your weight must be in range, Example: 10-30";
  } else {
    errors.weight = "";
  }
  if (input.height && !/\d{1,2}-\d{1,2}/g.test(input.height)) {
    errors.height = "Height must be in range. Example: 10-35";
  } else {
    errors.height = "";
  }
  if (input.life_span && !/\d{1,2}-\d{1,2}/g.test(input.life_span)) {
    errors.life_span = "Life span must be a range. Example: 5-10";
  } else {
    errors.life_span = "";
  }
  return errors;
}

function Create({ getTemperaments, temperaments }) {
  const [input, setInput] = useState({
    name: "",
    height: "",
    weight: "",
    life_span: "",
    temperament: [],
  });

  useEffect(() => {
    getTemperaments();
  }, []);

  const [error, setError] = useState({});

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(
      validateInput({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleTemperament(e) {
    // console.log(e.target.value);
    if (input.temperament.includes(e.target.value)) {
      alert(
        "You have already selected that temperament, please choose another"
      );
    } else {
      setInput({
        ...input,
        temperament: [...input.temperament, e.target.value],
      });
    }
  }

  function deleteTemp(name) {
    setInput({
      ...input,
      temperament: input.temperament.filter((m) => m !== name),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !error.name &&
      !error.weight &&
      !error.height &&
      !error.life_span &&
      input.temperament[0]
    ) {
      axios
        .post("http://localhost:3001/dog", input)
        .then((res) => {
          alert("Dog created successfully");
          setInput({
            name: "",
            height: "",
            weight: "",
            life_span: "",
            temperament: [],
          });
        })
        .catch((res) => alert("I couldn't create the Dog"));
    } else {
      alert("Please put the information");
    }
  }

  return (
    <div>
      <Navbar />
      <div className={style.container}>
        <p className={style.title}>Create Breed</p>

        <form onSubmit={handleSubmit}>
          <input
            className={style.name}
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Name"
            required
          />

          {error.name && <p className={style.error}>{error.name}</p>}
          <input
            className={style.height}
            type="text"
            onChange={handleChange}
            name="height"
            placeholder="Height"
            required
          />

          {error.height && <p className={style.error}>{error.height}</p>}
          <input
            className={style.weight}
            type="text"
            onChange={handleChange}
            name="weight"
            placeholder="Weight"
            required
          />

          {error.weight && <p className={style.error}>{error.weight}</p>}
          <input
            className={style.life_span}
            type="text"
            onChange={handleChange}
            name="life_span"
            placeholder="Life Span"
            required
          />
          {error.life_span && <p className={style.error}>{error.life_span}</p>}

          <div>
            <select
              name="temperaments"
              onChange={handleTemperament}
              className={style.temperaments}
              required
            >
              <option>Select a Temperament</option>
              {temperaments &&
                temperaments.map((m) => (
                  <option value={m.temperament} key={m.id}>
                    {m.temperament}
                  </option>
                ))}
            </select>
          </div>
          <div className={style.temperamentsSelected}>
            {input.temperament &&
              input.temperament.map((m) => (
                <div key={m}>
                  <p className={style.p}>
                    {m}
                    <button onClick={() => deleteTemp(m)} className={style.delete}>X</button>
                  </p>
                </div>
              ))}
          </div>
          <button type="submit" className={style.buttonCreate}>Create Breed</button>
        </form>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    temperaments: state.temperaments,
  };
}

function mapDipatchToProps(dispatch) {
  return {
    getTemperaments: () => dispatch(getTemperaments()),
  };
}

export default connect(mapStateToProps, mapDipatchToProps)(Create);
