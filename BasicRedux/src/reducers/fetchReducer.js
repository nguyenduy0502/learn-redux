import {FETCH_FAIL, FETCHING, FETCH_OK} from '../actions/types';
const DEFAULT_STATE = {
    data: [],
    dataFetched: false,
    isFetching: false,
    error: false
};
export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {

        case FETCHING:
            return {
                ...state,
                isFetching: true,
                data: [],

            };
        case FETCH_OK:
            return {
                ...state,
                data: action.payload,
                isFetching: false,

            };
        case FETCH_FAIL:
            return {
                ...state,
                error: true,
                isFetching: false
            };

        default:
            return state;
    }
}