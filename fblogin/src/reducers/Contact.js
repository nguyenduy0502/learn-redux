import {
    FETCH_CONTACT_ERROR,
    FETCH_CONTACT_SUCCESS
} from '../actions/types';
const DEFAULT_STATE= {
    loading:true,
    contacts:[],
};
export default (state=DEFAULT_STATE,action)=>{

    switch (action.type){

        case FETCH_CONTACT_SUCCESS:
            return{
                ...state,
                loading:false,
                contacts:action.contacts
            };
        case FETCH_CONTACT_ERROR:
            return{
                ...DEFAULT_STATE,
                loading:false,
            };

        default:
            return state
    }
};