import { PRODUCTS_ACTION_TYPES } from './products.types';

const createAction = (type, payload) => ({ type, payload });

export const fetchProductsStart = (Params) =>
  createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START, Params);

export const fetchProductsSuccess = ({ ProductsArray, Params }) =>
  createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS, {
    ProductsArray,
    Params,
  });

export const fetchProductsFailed = (error) =>
  createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILED, error);

export const setFilterStart = (Params) =>
  createAction(PRODUCTS_ACTION_TYPES.SET_FILTER_START, Params);

export const setFilterSuccess = (Params) =>
  createAction(PRODUCTS_ACTION_TYPES.SET_FILTER_SUCCESS, Params);

export const setFilterFailed = (error) =>
  createAction(PRODUCTS_ACTION_TYPES.SET_FILTER_FAILED, error);
