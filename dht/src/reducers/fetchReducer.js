import {
    FETCH_ERROR,
    FETCH_SUCCESS,
    FETCHING
} from '../actions/types';
const DEFAULT_STATE = {
    fetching: false,
    data: {},
    error: false
};
export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {

        case FETCHING:
            return {
                ...state,
                fetching: true,
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                fetching: false,
                data: action.payload
            };
        case FETCH_ERROR:
            return {
                ...state,
                error: true,
                fetching:false
            };
        default:
            return state;
    }

}