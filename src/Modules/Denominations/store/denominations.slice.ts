// ============================================================
// DENOMINATIONS MODULE — REDUX SLICE
// Location: Modules/Denominations/store/denominations.slice.ts
// ============================================================

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type {
    IDenomination,
    IDenominationForm,
    IDenominationsState,
} from '../models/denominations.types';

const initialState: IDenominationsState = {
    items: [],
    selected: null,
    tableLoading: false,
    loading: false,
    refreshKey: 0,
};

const slice = createSlice({
    name: 'denominations',
    initialState,
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        bumpRefreshKey(state) {
            state.refreshKey += 1;
        },

        loadTable(state, _action: PayloadAction<any>) {
            state.tableLoading = true;
        },
        setItems(state, action: PayloadAction<IDenomination[]>) {
            state.items = action.payload;
            state.tableLoading = false;
        },

        loadOne(state, _action: PayloadAction<string>) {
            state.loading = true;
        },
        setSelected(state, action: PayloadAction<IDenomination | null>) {
            state.selected = action.payload;
            state.loading = false;
        },

        create(state, _action: PayloadAction<IDenominationForm>) {
            state.loading = true;
        },
        update(
            state,
            _action: PayloadAction<{ ref: string; data: Partial<IDenominationForm> }>,
        ) {
            state.loading = true;
        },
        destroy(state, _action: PayloadAction<{ ref: string }>) {
            state.loading = true;
        },
    },
});

export const denominationsActions = slice.actions;
export default slice.reducer;
