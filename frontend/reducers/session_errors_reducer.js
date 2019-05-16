import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session'

const sessionErrorsReducer = (state = [], action) => {

    switch(action.type){
        case RECEIVE_ERRORS:
        const errs = action.errors
            return errs;
        case RECEIVE_CURRENT_USER:
            return [];
        default:
            return state;
    }
}

export default sessionErrorsReducer;