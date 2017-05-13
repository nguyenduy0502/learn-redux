import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
const middleware = {thunkMiddleware};
const store=createStore(
    reducers,
    {},
    applyMiddleware(...middleware),

);
export default store;
