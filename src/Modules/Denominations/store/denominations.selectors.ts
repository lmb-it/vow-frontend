import { createSelector } from '@reduxjs/toolkit';
import { IReducers } from 'Redux';

const selectDenominationsState = (state: IReducers) => state.denominations;

export const selectDenominations = createSelector(
    selectDenominationsState,
    (s) => s.items,
);
export const selectDenominationsTableLoading = createSelector(
    selectDenominationsState,
    (s) => s.tableLoading,
);
export const selectDenominationSelected = createSelector(
    selectDenominationsState,
    (s) => s.selected,
);
export const selectDenominationsLoading = createSelector(
    selectDenominationsState,
    (s) => s.loading,
);
export const selectDenominationsRefreshKey = createSelector(
    selectDenominationsState,
    (s) => s.refreshKey,
);
