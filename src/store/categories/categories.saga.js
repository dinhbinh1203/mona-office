import { takeLatest, all, call, put } from 'redux-saga/effects';
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from './categories.action';

import categoriesApi from '../../api/categoriesApi';

import { CATEGORIES_ACTION_TYPES } from './categories.types';

export function* fetchCategories() {
  try {
    const categoriesArray = yield call(categoriesApi.getCategoriesAll);
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategories,
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
