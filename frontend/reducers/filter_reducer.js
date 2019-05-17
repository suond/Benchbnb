import { UPDATE_BOUNDS } from "../actions/filter_actions";


export const filterReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type){
        case UPDATE_BOUNDS:
            return Object.assign({}, state, action.bounds)
        case "UPDATE_FILTER":
        return Object.assign({}, state, {[action.filter]: action.value})
        default:
            return state
    }
}