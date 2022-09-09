import { takeLatest, all, call, put } from 'redux-saga/effects';

import { fetchProductsSuccess, fetchProductsFailed } from './products.action';

import productsApi from '../../api/productsApi';

import { PRODUCTS_ACTION_TYPES } from './products.types';

export function* fetchProducts() {
  try {
    const ProductsArray = yield call(productsApi.getProductsAll);
    yield put(fetchProductsSuccess(ProductsArray));
  } catch (error) {
    yield put(fetchProductsFailed(error));
  }
}

export function* onFetchProducts() {
  yield takeLatest(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START, fetchProducts);
}

export function* productsSaga() {
  yield all([call(onFetchProducts)]);
}
