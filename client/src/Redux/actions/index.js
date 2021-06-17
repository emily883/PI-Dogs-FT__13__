import axios from "axios";
export const show_dogs = "SHOW_DOGS";
export const get_detail = "GET_DOG_DETAILS";
export const get_temperaments = "GET_TEMPERAMENTS";

export function getDogs(page) {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/dogs?page=${page}`)
      .then((response) => response.data)
      .then((json) => {
        dispatch({ type: show_dogs, payload: json });
      });
  };
}

export function getDetails(id) {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/dogs/${id}`)
      .then((response) => response.data)
      .then((json) => {
        dispatch({ type: get_detail, payload: json });
      });
  };
}

export function getTemperaments() {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/temperament")
      .then((response) => response.data)
      .then((json) => {
        dispatch({ type: get_temperaments, payload: json });
      });
  };
}
