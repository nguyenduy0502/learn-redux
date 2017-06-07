import {
    FETCH_MESSAGE_ERROR,
    FETCH_MESSAGE_SUCCESS,
    FETCH_ROOM_ERROR, FETCH_ROOM_SUCCESS,
    REGISTER_ROOM
} from '../actions/types';
const DEFAULT_STATE = {
    loading: true,
    message: [],
    roomKey: null,

};


export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {

        case FETCH_ROOM_SUCCESS:
            return {
                ...DEFAULT_STATE,
                loading: false,
                roomKey: action.roomKey
            };
        case FETCH_ROOM_ERROR:
            return {...DEFAULT_STATE, loading: false};
        case REGISTER_ROOM:
            return {...state, roomKey: action.roomKey};
        case FETCH_MESSAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.message
            };
        case FETCH_MESSAGE_ERROR:
            return {
                ...DEFAULT_STATE,
                loading: false
            };
        default:
            return state;

    }
};