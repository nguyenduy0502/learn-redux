import api from '../api/api';
import {FETCH_FAIL,FETCH_OK,FETCHING}from './types';

export function getData(){
    return{
        type:FETCHING
    }
}
export function getDataSuccess(data) {
    return{
        type:FETCH_OK,
        payload:data,
    }
}
export function getDataFail() {
    return{
        FETCH_FAIL
    }
}
export function fetchData() {

    return (dispatch)=>{
        dispatch(getData());
        api().then((data)=>{
            dispatch(getDataSuccess(data))
        })
            .catch((error)=>console.log(error));
    }
}
