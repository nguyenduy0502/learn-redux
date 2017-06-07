import {
    FETCH_ERROR,
    FETCH_SUCCESS,
    FETCHING
} from './types';
const api = 'http://api.openweathermap.org/data/2.5/weather?id=1581130&APPID=a0c937cb354b384d171b5dd710c0f802&units=metric';
export function getData() {
    return {
        type: FETCHING
    }
}
export function getDataSuccess(data) {
    return {
        type: FETCH_SUCCESS,
        payload: data
    }
}
export function getDataError() {
    return {
        type: FETCH_ERROR
    }
}
export function fetchData() {
    return (dispatch) => {
        dispatch(getData());
        fetch(api).then(response => response.json())
            .then(responseJson => {
                dispatch(getDataSuccess(responseJson));
            })
            .catch((error) => {
                dispatch(getDataError());
            });
    }
}