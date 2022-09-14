import { PRODUCTS_ACTION_TYPES } from './products.types';

export const PRODUCTS_INITIAL_STATE = {
  products: [],
  isLoading: false,
  error: null,
  filter: {
    _page: 1,
    _limit: 12,
  },
  pagination: {
    _page: 1,
    _limit: 12,
    _totalRows: 47,
  },
  total: {
    _totalRows: 47,
  },
};

export const productsReducer = (
  state = PRODUCTS_INITIAL_STATE,
  action = {},
) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START:
      return { ...state, isLoading: true };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload.ProductsArray,
        pagination: payload.Params.payload,
        isLoading: false,
      };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILED:
      return { ...state, error: payload, isLoading: false };

    case PRODUCTS_ACTION_TYPES.SET_FILTER_START:
      return { ...state };
    case PRODUCTS_ACTION_TYPES.SET_FILTER_SUCCESS:
      return { ...state, filter: payload.payload };
    case PRODUCTS_ACTION_TYPES.SET_FILTER_FAILED:
      return { ...state, error: payload };

    case PRODUCTS_ACTION_TYPES.SET_TOTAL_START:
      return { ...state };
    case PRODUCTS_ACTION_TYPES.SET_TOTAL_SUCCESS:
      return { ...state, total: payload };
    case PRODUCTS_ACTION_TYPES.SET_TOTAL_FAILED:
      return { ...state, error: payload };

    default:
      return state;
  }
};
