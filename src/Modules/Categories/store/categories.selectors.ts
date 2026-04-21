import { createSelector } from '@reduxjs/toolkit';
import { IReducers } from 'Redux';

const selectCategoriesState = (state: IReducers) => state.categories;

// Categories
export const selectCategories = createSelector(
    selectCategoriesState,
    (s) => s.items,
);
export const selectCategoriesTableLoading = createSelector(
    selectCategoriesState,
    (s) => s.tableLoading,
);
export const selectSelectedCategory = createSelector(
    selectCategoriesState,
    (s) => s.selected,
);
export const selectCategoriesLoading = createSelector(
    selectCategoriesState,
    (s) => s.loading,
);
export const selectCategoriesRefreshKey = createSelector(
    selectCategoriesState,
    (s) => s.refreshKey,
);

// Hashtags
export const selectHashtags = createSelector(
    selectCategoriesState,
    (s) => s.hashtags,
);
export const selectHashtagsTableLoading = createSelector(
    selectCategoriesState,
    (s) => s.hashtagsTableLoading,
);
export const selectSelectedHashtag = createSelector(
    selectCategoriesState,
    (s) => s.selectedHashtag,
);
export const selectHashtagsLoading = createSelector(
    selectCategoriesState,
    (s) => s.hashtagsLoading,
);
