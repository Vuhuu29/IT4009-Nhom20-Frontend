import { combineReducers } from 'redux';
import dataReducer from './DataReducer';

//Tổng hợp lại các reducer
//combineReducers: dùng để lưu nhiều reducer vào store
export default combineReducers({
    dataState:dataReducer
});
