import { combineReducers } from 'redux';
import userReducer from './userReducer';

//Tổng hợp lại các reducer
//combineReducers: dùng để lưu nhiều reducer vào store
export default combineReducers({
    userState:userReducer
    
});
