import { createSelector } from 'reselect';

export const selectUserReducer = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.currentUser,
);

export const selectCurrentUserId = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.id,
);
