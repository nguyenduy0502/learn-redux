import design from '../reducers/design.json';
import {LOAD_DESIGN} from './types';
export const loadDesign = ()=>{
    return{
        type:LOAD_DESIGN,
        payload:design.design
    }
};