import { createSelector } from 'reselect';

export const selectUserReducer = (state) => state.user.currentUser;

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice,
);

export const selectCurrentUserId = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.id,
);

export const selectCurrentUserEmail = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.email,
);
