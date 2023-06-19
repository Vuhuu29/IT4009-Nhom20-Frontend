import { all } from 'redux-saga/effects';
import {userSaga} from './userSaga'
//các saga sẽ được gom lại trong effect all để chạy
function* rootSaga() {
  yield all([
    ...userSaga
  ]);
}
export default rootSaga;
