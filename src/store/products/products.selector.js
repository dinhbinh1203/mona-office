import { createSelector } from 'reselect';

export const selectProductsReducer = (state) => state.products;

export const selectProducts = createSelector(
  [selectProductsReducer],
  (productsSlice) => productsSlice.products,
);

export const selectProductsIsLoading = createSelector(
  [selectProductsReducer],
  (productsSlice) => productsSlice.isLoading,
);

export const selectProductsFilter = createSelector(
  [selectProductsReducer],
  (productsSlice) => productsSlice.filter,
);

export const selectProductsPagination = createSelector(
  [selectProductsReducer],
  (productsSlice) => productsSlice.pagination,
);
