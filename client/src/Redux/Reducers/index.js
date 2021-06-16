import {show_dogs} from '../actions';

const InitialState = {
    Dogs: [],
    loading: false
}

const todos = (state = InitialState, action) => {
    switch (action.type) {
        case (show_dogs): {
            return {
                ...state,
                dogs: action.payload
            }
        }
        default : return state
    }
}

export default todos;