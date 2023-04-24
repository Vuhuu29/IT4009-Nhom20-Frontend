import { put, takeEvery } from 'redux-saga/effects';
import * as types from '../commons/index'
import callApi from '../fetchApi/index'
import callApiHaveToken from '../fetchApi/callApiHaveToken'
function* getAllStudent(action) {
    try {
        let res = yield callApi(`/student`, action.payload, 'GET')
        yield put({
            type: types.GET_STUDENT_SUCCESS,
            payload: res
        })
    } catch (error) {
        yield put({
            type: types.GET_STUDENT_FAIL,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
function* insertStudent(action) {
    try {
        let res = yield callApi(`/student`, action.payload, 'POST')
        yield put({
            type: types.ADD_STUDENT_SUCCESS,
            payload: res
        })
    } catch (error) {
        yield put({
            type: types.ADD_STUDENT_FAIL,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
function* updateStudentById(action) {
    try {
        let res = yield callApi(`/student/${action.payload.id}`, action.payload.data, 'PUT')
        yield put({
            type: types.UPDATE_STUDENT_SUCCESS,
            payload: res
        })
    } catch (error) {
        yield put({
            type: types.UPDATE_STUDENT_FAIL,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
function* deleteStudentById(action) {
 
    try {
        let res = yield callApiHaveToken(`/student/${action.payload.id}`, {}, 'DELETE')
        yield put({
            type: types.DELETE_STUDENT_SUCCESS,
            payload: res
        })
        yield put({
            type:types.GET_STUDENT_REQ,
            payload:null
        })
    } catch (error) {
        yield put({
            type: types.DELETE_STUDENT_FAIL,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
function* payCourse(action) {
    try {
        let res = yield callApi(`/student/pay/${action.payload.id}`, {}, 'POST')
        yield put({
            type: types.PAY_COURSE_SUCCESS,
            payload: res
        })
    } catch (error) {
        yield put({
            type: types.PAY_COURSE_FAIL,
            payload: {
                errorMessage: error.message
            }
        })
    }
}


export const StudentSaga = [
    takeEvery(types.GET_STUDENT_REQ, getAllStudent),
    takeEvery(types.ADD_STUDENT_REQ, insertStudent),
    takeEvery(types.UPDATE_STUDENT_REQ, updateStudentById),
    takeEvery(types.DELETE_STUDENT_REQ, deleteStudentById)
];
