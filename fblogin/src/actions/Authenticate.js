import {LOGIN,LOGOUT} from './types';
import {NavigationActions}from 'react-navigation';

export const loginSuccess = (user) => {

    return (dispatch) => {
        dispatch({
            type: LOGIN,
            payload: user
        });
        const resetNavigator = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName: 'Authorized'
                })
            ],

        });
        dispatch(resetNavigator);

    }
};
export const logout= ()=>{
    return (dispatch)=>{
        dispatch({
            type:LOGOUT
        });
        const resetNavigator = NavigationActions.reset({
            index:0,
            action:[
                NavigationActions.navigate({
                    routeName:'UnAuthorized'
                })
            ]
        });
        dispatch(resetNavigator);
    }

};