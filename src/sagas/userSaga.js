import { put, takeEvery } from 'redux-saga/effects';
import * as types from '../commons/index'
import callApi from '../fetchApi/index'

function* login(action) {

    try {
        let res = yield callApi(`/signIn`, action.payload, 'POST')
        yield put({
            type: types.LOGIN_SUCCESS,
            payload: res
        })
    } catch (error) {
        yield put({
            type: types.LOGIN_FAIL,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
function* register(action) {
    try {
        console.log("action register ...", action.payload);
        let res = yield callApi(`/signUp`, action.payload, 'POST')
        yield put({
            type: types.REGISTER_SUCCESS,
            payload: res
        })
    } catch (error) {
        yield put({
            type: types.REGISTER_FAIL,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
function* logout(action) {
    try {
        yield localStorage.removeItem("token")
        yield localStorage.removeItem("UserId")
        yield localStorage.removeItem("UserRole")
    } catch (error) {

    }
}
export const UserSaga = [
    takeEvery(types.LOGIN_REQ, login),
    takeEvery(types.REGISTER_REQ, register),
];