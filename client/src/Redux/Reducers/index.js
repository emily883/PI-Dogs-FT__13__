import {show_dogs, get_temperaments} from '../actions';

const InitialState = {
    Dogs: {},
    details:{},
    temperaments:[]
}

const todos = (state = InitialState, action) => {
    switch (action.type) {
        case (show_dogs): {
            return {
                ...state,
                Dogs: action.payload
            }
        }
        case(get_temperaments): {
            return {
                ...state,
                temperaments: action.payload
            }
        }
        default : return state
    }
}

export default todos;