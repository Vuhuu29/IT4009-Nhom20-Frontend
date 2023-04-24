import { all } from 'redux-saga/effects';
import {UserSaga} from './userSaga'
import  {StudentSaga} from './studentSaga'
import {TeacherSaga} from './teacherSaga'
import {CourseSaga} from './courseSaga'
import {ClassSaga} from './classSaga'
function* rootSaga() {
  yield all([
    ...UserSaga,
    ...StudentSaga,
    ...TeacherSaga,
    ...CourseSaga,
    ...ClassSaga
  ]);
}
export default rootSaga;
