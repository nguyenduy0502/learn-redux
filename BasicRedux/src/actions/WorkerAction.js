import {LOAD_WORKER} from './types';
import worker from '../reducers/worker.json';
export const loadDataWorker=()=>{
    return{
        type:LOAD_WORKER,
        payload:worker.worker,
    }
};