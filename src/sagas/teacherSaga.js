import { put, takeEvery } from 'redux-saga/effects';
import * as types from '../commons/index'
import callApi from '../fetchApi/index'
import callApiHaveToken from '../fetchApi/callApiHaveToken'
function* getAllTeacher(action) {
    try {
        let res = yield callApi(`/teacher`, null, 'GET')
        yield put({
            type: types.GET_TEACHER_SUCCESS,
            payload: res
        })
    } catch (error) {
        yield put({
            type: types.GET_TEACHER_FAIL,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
function* insertTeacher(action) {
    try {
        let res = yield callApi(`/teacher`, action.payload, 'POST')
        yield put({
            type: types.ADD_TEACHER_SUCCESS,
            payload: res
        })
        yield put({
            type: types.GET_TEACHER_REQ,
            payload: null
        })
    } catch (error) {
        yield put({
            type: types.ADD_TEACHER_FAIL,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
function* updateTeacher(action) {
    try {
        let res = yield callApi(`/teacher/${action.payload.id}`, action.payload, 'PUT')
        console.log("ré...",res);
        yield put({
            type: types.UPDATE_TEACHER_SUCCESS,
            payload: res
        })
        yield put({
            type: types.GET_TEACHER_REQ,
            payload: null
        })
    } catch (error) {
        yield put({
            type: types.UPDATE_TEACHER_FAIL,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
function* deleteTeacher(action) {
    try {
        console.log("action.....",action.payload);
        let res = yield callApi(`/teacher/${action.payload.id}`,null, 'DELETE')
        yield put({
            type: types.DELETE_TEACHER_SUCCESS,
            payload: res
        })
        yield put({
            type: types.GET_TEACHER_REQ,
            payload: null
        })
    } catch (error) {
        yield put({
            type: types.DELETE_TEACHER_FAIL,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
export const TeacherSaga = [
    takeEvery(types.GET_TEACHER_REQ, getAllTeacher),
    takeEvery(types.ADD_TEACHER_REQ, insertTeacher),
    takeEvery(types.UPDATE_TEACHER_REQ, updateTeacher),
    takeEvery(types.DELETE_TEACHER_REQ, deleteTeacher)
];