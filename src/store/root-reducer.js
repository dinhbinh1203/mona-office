import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { history } from '../utils/history/history';

export const rootReducer = combineReducers({
  user: userReducer,
  router: connectRouter(history),
});
