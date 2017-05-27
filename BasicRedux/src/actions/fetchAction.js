import {FETCH_FAIL, FETCH_OK, FETCHING} from './types';
import api from '../api/api';
export function getData() {

    return {
        type: FETCHING
    }
}
export function getDataSuccess(data) {
    return {
        type: FETCH_OK,
        payload: data,

    }
}
export function getDataFail() {
    return {
        type: FETCH_FAIL
    }
}
export function fetchData() {
    return (dispatch) => {
        dispatch(getData());
        api().then((data) => {
            dispatch(getDataSuccess(data))
        })
            .catch(dispatch(getDataFail()))

    }
}



