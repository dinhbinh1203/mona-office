import { call, all } from 'redux-saga/effects';
import { userSagas } from './user/user.saga';
import { productsSaga } from './products/products.saga';
import { categoriesSaga } from './categories/categories.saga';

export function* rootSaga() {
  yield all([call(userSagas), call(productsSaga), call(categoriesSaga)]);
}
