import {LOAD_DATA} from './types';
import todolist from '../reducers/todolist.json';
export const loadData=()=>{
    return{
        type:LOAD_DATA,
        payload:todolist.data,
    };
};