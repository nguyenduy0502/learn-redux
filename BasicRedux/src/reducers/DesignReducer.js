import {LOAD_DESIGN} from '../actions/types';

const DEFAULT_DESIGN=[];
export default (state= DEFAULT_DESIGN,action)=>{
    switch (action.type){
        case LOAD_DESIGN:
            return action.payload;
        default:
            return state;
    }
}