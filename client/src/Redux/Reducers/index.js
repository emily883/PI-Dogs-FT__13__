import {
  show_dogs,
  get_temperaments,
  get_detail,
  search,
  page,
  pageReset,
  order,
  filterByTemperament,
} from "../actions";

const InitialState = {
  Dogs: [],
  details: {},
  temperaments: [],
  page: 1,
  filtering: false,
};

const todos = (state = InitialState, action) => {
  switch (action.type) {
    case show_dogs: {
      return {
        ...state,
        Dogs: action.payload,
        searching: false,
      };
    }
    case get_temperaments: {
      return {
        ...state,
        temperaments: action.payload,
        page: 1,
      };
    }
    case get_detail: {
      return {
        ...state,
        details: action.payload,
        page: 1,
      };
    }
    case search: {
      return {
        ...state,
        Dogs: action.dogs,
        searching: true,
      };
    }
    case page: {
      if (action.page === "NEXT") {
        return {
          ...state,
          page: action.payload + 1,
        };
      }
      if (action.page === "BACK") {
        return {
          ...state,
          page: action.payload - 1,
        };
      }
      break;
    }
    case pageReset: {
      return {
        ...state,
        page: 1,
      };
    }
    case order: {
      return {
        ...state,
        Dogs: action.payload,
      };
    }
    case filterByTemperament: {
      return {
        ...state,
        Dogs: action.payload,
      };
    }

    default:
      return state;
  }
};

export default todos;
