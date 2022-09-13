import { takeLatest, all, call, put } from 'redux-saga/effects';

import {
  fetchProductsSuccess,
  fetchProductsFailed,
  setFilterSuccess,
  setFilterFailed,
} from './products.action';

import productsApi from '../../api/productsApi';

import { PRODUCTS_ACTION_TYPES } from './products.types';

export function* fetchProducts(Params) {
  try {
    const ProductsArray = yield call(
      productsApi.getAllProducts,
      Params.payload,
    );
    console.log('ProductsArray', ProductsArray);
    yield put(fetchProductsSuccess({ ProductsArray, Params }));
  } catch (error) {
    yield put(fetchProductsFailed(error));
  }
}

export function* onFetchProducts() {
  yield takeLatest(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START, fetchProducts);
}

export function* setFilter(Params) {
  try {
    yield put(setFilterSuccess(Params));
  } catch (error) {
    yield put(setFilterFailed(error));
  }
}

export function* onSetFilter() {
  yield takeLatest(PRODUCTS_ACTION_TYPES.SET_FILTER_START, setFilter);
}

export function* productsSaga() {
  yield all([call(onFetchProducts), call(onSetFilter)]);
}
