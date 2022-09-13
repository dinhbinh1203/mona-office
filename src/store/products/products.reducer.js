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
    case PRODUCTS_ACTION_TYPES.SET_FILTER_SUCCESS:
      return { ...state, filter: payload.payload };
    default:
      return state;
  }
};
