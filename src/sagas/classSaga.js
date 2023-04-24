import { put, takeEvery } from 'redux-saga/effects';
import * as types from '../commons/index'
import callApi from '../fetchApi/index'
import callApiHaveToken from '../fetchApi/callApiHaveToken'
function* getAllClass(action) {
    try {
        let res = yield callApi(`/classInCourse/${action.payload.idCourse}`, null, 'GET')
        console.log("res..",res);
        yield put({
            type: types.GET_CLASS_BY_ID_COURSE_SUCCESS,
            payload: res
        })
    } catch (error) {
        yield put({
            type: types.GET_CLASS_BY_ID_COURSE_FAIL,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
function* insertClass(action) {
    try {
        let res = yield callApiHaveToken(`/class`, action.payload, 'POST')
        yield put({
            type: types.ADD_CLASS_SUCCESS,
            payload: res
        })
        yield put({
            type: types.GET_CLASS_BY_ID_COURSE_REQ,
            payload: {idCourse:action.payload.id_course}
        })
    } catch (error) {
        yield put({
            type: types.ADD_CLASS_FAIL,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
function* updateClass(action) {
    try {
        let res = yield callApi(`/class/${action.payload.id}`, action.payload, 'PUT')
        yield put({
            type: types.UPDATE_CLASS_SUCCESS,
            payload: res
        })
        yield put({
            type: types.GET_CLASS_BY_ID_COURSE_REQ,
            payload: {idCourse:action.payload.id_course}
        })
    } catch (error) {
        yield put({
            type: types.UPDATE_CLASS_FAIL,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
function* deleteClass(action) {
    try {
        let res = yield callApi(`/class/${action.payload.id}`,null, 'DELETE')
        yield put({
            type: types.DELETE_CLASS_SUCCESS,
            payload: res
        })
        yield put({
            type: types.GET_CLASS_BY_ID_COURSE_REQ,
            payload: null
        })
    } catch (error) {
        yield put({
            type: types.DELETE_CLASS_FAIL,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
export const ClassSaga = [
    takeEvery(types.GET_CLASS_BY_ID_COURSE_REQ, getAllClass),
    takeEvery(types.ADD_CLASS_REQ, insertClass),
    takeEvery(types.UPDATE_CLASS_REQ, updateClass),
    takeEvery(types.DELETE_CLASS_REQ, deleteClass)
];