import {GET_DATA} from '../actions/actionTypes';
const DEFAULT_STATE={};
export default (state=DEFAULT_STATE, action) => {
    switch (action.type) {

        case GET_DATA:
            return action.payload;

        default:
            return state;
    }

}