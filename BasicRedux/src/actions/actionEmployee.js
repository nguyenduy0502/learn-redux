import {GET_DATA} from './actionTypes';
import dataEmployee from '../reducers/dataEmployee.json';
export function getData() {
    return {
        type: GET_DATA,
        payload: dataEmployee
    }
}