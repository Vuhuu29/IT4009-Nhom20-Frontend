import { put, takeEvery, call } from "redux-saga/effects";
import * as types from "../commons/index";
import callApi from "../fetchApi/index";

function* getData(action) {
  try {
    let res = yield callApi('/users', action.payload, 'GET')
    console.log(res)
    yield put({ type: types.GETDATA_SUCCESS, payload: res });
  } catch (error) {
    yield put({
      type: types.GETDATA_FAIL,
      payload: error.message,
    });
  }
}

export const dataSaga = [takeEvery(types.GETDATA_REQ, getData)];
