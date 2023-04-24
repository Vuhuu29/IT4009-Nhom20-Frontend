import { combineReducers } from 'redux';
import userReducer from './userReducer';
import studentReducer from './studentReducer';
import teacherReducer from './teacherReducer';
import courseReducer from './courseReducer';
import classReducer from './classReducer'
export default combineReducers({
    userState:userReducer,
    studentState:studentReducer,
    teacherState:teacherReducer,
    courseState:courseReducer,
    classState:classReducer
});
