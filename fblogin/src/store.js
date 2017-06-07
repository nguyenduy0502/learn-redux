import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import logger from 'redux-logger';

const middleware =[thunk];
if(__DEV__){
    middleware.push(logger);
}

const store = createStore(
    reducers,
    {},
    applyMiddleware(...middleware)
);
export default store;