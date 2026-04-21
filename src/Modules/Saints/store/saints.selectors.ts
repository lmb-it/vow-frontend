import { createSelector } from '@reduxjs/toolkit';
import { IReducers } from 'Redux';

const selectSaintsState = (state: IReducers) => state.saints;

export const selectSaints = createSelector(selectSaintsState, (s) => s.saints);
export const selectSaintsLoading = createSelector(selectSaintsState, (s) => s.saintsLoading);
export const selectEditingSaint = createSelector(selectSaintsState, (s) => s.editingSaint);
export const selectEditingSaintLoading = createSelector(
    selectSaintsState,
    (s) => s.editingSaintLoading,
);

export const selectSaintsCategories = createSelector(
    selectSaintsState,
    (s) => s.saintsCategories,
);
export const selectSaintsCategoriesLoading = createSelector(
    selectSaintsState,
    (s) => s.saintsCategoriesLoading,
);
export const selectEditingSaintsCategory = createSelector(
    selectSaintsState,
    (s) => s.editingSaintsCategory,
);
export const selectEditingSaintsCategoryLoading = createSelector(
    selectSaintsState,
    (s) => s.editingSaintsCategoryLoading,
);

export const selectSaintsSharedLoading = createSelector(
    selectSaintsState,
    (s) => s.loading,
);
export const selectSaintsRefreshKey = createSelector(
    selectSaintsState,
    (s) => s.refreshKey,
);
