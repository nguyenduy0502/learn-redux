import {LOAD_DATA} from '../actions/types';
const DEFAULT_STATE=[];
export default (state=DEFAULT_STATE,action)=>{

    switch (action.type){

        case LOAD_DATA:
            return action.payload;
        default:
            return state
    }
};