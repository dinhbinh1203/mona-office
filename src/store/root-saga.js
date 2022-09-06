import { call, all } from 'redux-saga/effects';
import { userSagas } from './user/user.saga';

export function* rootSaga() {
  yield all([call(userSagas)]);
}
