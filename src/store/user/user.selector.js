import { createSelector } from 'reselect';

export const selectUserReducer = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.currentUser,
);

export const selectUserIsLoading = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.isLoading,
);

export const selectCurrentUserId = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.currentUser.id,
);

export const selectCurrentUserEmail = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.currentUser.email,
);
