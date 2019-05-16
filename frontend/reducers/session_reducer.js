import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session'


const sessionReducer = (state={ id: null}, action) => {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            const currentUser = action.user
            return { id: currentUser.id}
        case LOGOUT_CURRENT_USER:
            return {id: null};
        default:
            return state;
    }
}

export default sessionReducer