import { all } from 'redux-saga/effects';
import {dataSaga} from './dataSaga'
//các saga sẽ được gom lại trong effect all để chạy
function* rootSaga() {
  yield all([
    ...dataSaga
  ]);
}
export default rootSaga;
