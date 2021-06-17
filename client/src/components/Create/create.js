import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getTemperaments } from "../../Redux/actions";
var img =
  "https://i.pinimg.com/originals/e8/a9/ce/e8a9ce9ab3f3c5ef298a14514047647e.jpg";

function Create({ getTemperaments, temperaments }) {
  useEffect(() => {
    getTemperaments();
  }, []);

  const [input, setInput] = useState({
      name: '',
      height: '',
      weight: '',
      life_span: '',
      nameT: [],
      image: ''
  })

  function handleInput(e){
      setInput({
          ...input,
          [e.target.name]: e.target.value
      })
  }

  return (
    <div>
      <img src={img} alt="Cute doggie" />
      <form>
        <input type="text" name="name" onChange={handleInput} placeholder="Name" required/>
        <input type="text" placeholder="Height" />
        <input type="text" placeholder="Weight" />
        <input type="text" placeholder="Life Span" />
        <input type="file" />
        <div>
          <select name="temperaments"  required> 
            <option selected>Select a Temperament</option>
            {
                temperaments && temperaments.map(m => (
                    <option value={m.id} key={m.id}>{m.nameT}</option>
                ))
            }
          </select>
        </div>
        <button type="submit">Create Breed</button>
      </form>
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
    getTemperaments: (id) => dispatch(getTemperaments()),
  };
}

export default connect(mapStateToProps, mapDipatchToProps)(Create);
