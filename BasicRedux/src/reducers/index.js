import {combineReducers}from 'redux';
import TodoListReducer from './TodoListReducer';
import WorkerReducer from './WorkerReducer';
import DesignReducer from './DesignReducer';
export default combineReducers({
    TodoListReducer,
    WorkerReducer,
    DesignReducer,
})