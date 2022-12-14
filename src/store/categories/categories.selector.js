import { createSelector } from 'reselect';

export const selectCategoriesReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.categories,
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.isLoading,
);

export const selectCategoriesOptions = createSelector(
  selectCategoriesReducer,
  (categoriesSlice) =>
    categoriesSlice.categories.map((category) => ({
      label: category.title,
      value: category.id,
    })),
);
