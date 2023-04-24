import { put, takeEvery } from 'redux-saga/effects';
import * as types from '../commons/index'
import callApi from '../fetchApi/index'
import callApiHaveToken from '../fetchApi/callApiHaveToken'
function* getAllCourse(action) {
    try {
        let res = yield callApi(`/courseAll`, null, 'GET')
        console.log("res..",res);
        yield put({
            type: types.GET_COURSE_SUCCESS,
            payload: res
        })
    } catch (error) {
        yield put({
            type: types.GET_COURSE_FAIL,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
function* insertCourse(action) {
    try {
        let res = yield callApi(`/course`, action.payload, 'POST')
        yield put({
            type: types.ADD_COURSE_SUCCESS,
            payload: res
        })
        yield put({
            type: types.GET_COURSE_REQ,
            payload: null
        })
    } catch (error) {
        yield put({
            type: types.ADD_COURSE_FAIL,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
function* updateCourse(action) {
    try {
        let res = yield callApi(`/course/${action.payload.id}`, action.payload, 'PUT')
        yield put({
            type: types.UPDATE_COURSE_SUCCESS,
            payload: res
        })
        yield put({
            type: types.GET_COURSE_REQ,
            payload: null
        })
    } catch (error) {
        yield put({
            type: types.UPDATE_COURSE_FAIL,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
function* deleteCourse(action) {
    try {
        let res = yield callApi(`/course/${action.payload.id}`,null, 'DELETE')
        yield put({
            type: types.DELETE_COURSE_SUCCESS,
            payload: res
        })
        yield put({
            type: types.GET_COURSE_REQ,
            payload: null
        })
    } catch (error) {
        yield put({
            type: types.DELETE_COURSE_FAIL,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
export const CourseSaga = [
    takeEvery(types.GET_COURSE_REQ, getAllCourse),
    takeEvery(types.ADD_COURSE_REQ, insertCourse),
    takeEvery(types.UPDATE_COURSE_REQ, updateCourse),
    takeEvery(types.DELETE_COURSE_REQ, deleteCourse)
];