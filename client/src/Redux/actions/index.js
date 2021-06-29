import axios from "axios";
export const show_dogs = "SHOW_DOGS";
export const get_detail = "GET_DOG_DETAILS";
export const get_temperaments = "GET_TEMPERAMENTS";
export const search = "SEARCH";
export const page = "PAGE";
export const pageReset = "PAGE_RESET";
export const filter = "FILTER_BY_TEMPERAMENT";
export const order = "ORDER_BY";
export const filterByTemperament = "FILTER_BY_TEMPERAMENT";
export const noFiltering = "NO_FILTERING";
export const searchClear = "CLEARSEARCHIT";

export function getDogs() {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/dogs/")
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

export function searchIt(json) {
  return function (dispatch) {
    dispatch({ type: search, dogs: json });
  };
}

export function searchItClear(){
  return function (dispatch){
    dispatch({type:searchClear})
  }
}

export function PageSelection(number, option) {
  return function (dispatch) {
    dispatch({ type: page, payload: number, page: option });
  };
}

export function PageReset() {
  return function (dispatch) {
    dispatch({ type: pageReset });
  };
}

export function orderBy(info) {
  return function (dispatch) {
    axios
      .post("http://localhost:3001/order/", info)
      .then((response) => response.data)
      .then((json) => {
        dispatch({ type: order, payload: json });
      });
  };
}

export function FilterBy(data) {
  return function (dispatch) {
    axios
      .post("http://localhost:3001/filter", data)
      .then((response) => response.data)
      .then((json) => {
        dispatch({ type: filterByTemperament, payload: json });
      });
  };
}

export function noFilter(){
  return function(dispatch){
    dispatch({type: noFiltering})
  }
}