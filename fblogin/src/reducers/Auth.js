
import {LOGIN , LOGOUT} from '../actions/types';
const DEFAULT_STATE = {
    loggedIn: false,
    user: null
};
export default (state= DEFAULT_STATE, action) => {

    switch (action.type) {

        case LOGIN:
            return{
                ...state,
                loggedIn:true,
                user:action.payload
            };
        case LOGOUT:
            return DEFAULT_STATE;
        default :
            return state;
    }
}