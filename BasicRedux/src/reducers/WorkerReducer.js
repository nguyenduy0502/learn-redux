import {LOAD_WORKER} from '../actions/types';
const DEFAULT_STATE={};
export default (state=DEFAULT_STATE,action)=>{

    switch (action.type){
        case LOAD_WORKER:
            return action.payload;
        default:
            return state;
    }
}