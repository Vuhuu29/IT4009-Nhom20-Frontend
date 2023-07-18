import { put, takeEvery, call } from "redux-saga/effects";
import * as types from "../commons/index";
import callApi from "../fetchApi/index";

function* login(action) {

  try {
      let res = yield callApi(`/signIn`, action.payload, 'POST')
      yield put({
          type: types.LOGIN_SUCCESS,
          payload: res
      }) //để là LOGIN_SUCCESS nhưng không phải là login success mà là callapi success
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

export const userSaga = [
  takeEvery(types.LOGIN_REQ, login),
  takeEvery(types.REGISTER_REQ, register),
];