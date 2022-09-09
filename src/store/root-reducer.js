import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { history } from '../utils/history/history';
import { productsReducer } from './products/products.reducer';
import { categoriesReducer } from './categories/categories.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  categories: categoriesReducer,
  router: connectRouter(history),
});
