import axios from "axios";
export const show_dogs = "SHOW_DOGS";

export function getDogs() {
  return function (dispatch) {
    return axios
      .get("http://localhost:3001/dogs?page=1")
      .then((response) => response.data)
      .then((json) => {
          dispatch({type: show_dogs, payload: json});
      });
  };
}
