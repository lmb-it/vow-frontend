// ============================================================
// SAINTS MODULE — REDUX SLICE
// Location: Modules/Saints/store/saints.slice.ts
// One slice for two sub-resources: Saints + SaintsCategories.
// ============================================================

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type {
    ISaint,
    ISaintForm,
    ISaintsCategory,
    ISaintsCategoryForm,
    ISaintsState,
} from '../models/saints.types';

const initialState: ISaintsState = {
    saints: [],
    saintsLoading: false,
    editingSaint: null,
    editingSaintLoading: false,

    saintsCategories: [],
    saintsCategoriesLoading: false,
    editingSaintsCategory: null,
    editingSaintsCategoryLoading: false,

    loading: false,
    refreshKey: 0,
    error: null,
};

const slice = createSlice({
    name: 'saints',
    initialState,
    reducers: {
        // ─── Shared ────────────────────────────────
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload;
        },
        bumpRefreshKey(state) {
            state.refreshKey += 1;
        },

        // ─── Saints: list ──────────────────────────
        loadSaints(state, _action: PayloadAction<any>) {
            state.saintsLoading = true;
        },
        setSaints(state, action: PayloadAction<ISaint[]>) {
            state.saints = action.payload;
            state.saintsLoading = false;
        },

        // ─── Saints: single ────────────────────────
        loadSaint(state, _action: PayloadAction<string>) {
            state.editingSaintLoading = true;
        },
        setEditingSaint(state, action: PayloadAction<ISaint | null>) {
            state.editingSaint = action.payload;
            state.editingSaintLoading = false;
        },

        // ─── Saints: mutations ─────────────────────
        createSaint(state, _action: PayloadAction<ISaintForm>) {
            state.loading = true;
        },
        updateSaint(state, _action: PayloadAction<{ ref: string; data: Partial<ISaintForm> }>) {
            state.loading = true;
        },
        deleteSaint(state, _action: PayloadAction<{ ref: string }>) {
            state.loading = true;
        },
        detachDenomination(
            state,
            _action: PayloadAction<{ ref: string; denominationRef: string }>,
        ) {
            state.loading = true;
        },

        // ─── Saints Categories: list ───────────────
        loadSaintsCategories(state, _action: PayloadAction<any>) {
            state.saintsCategoriesLoading = true;
        },
        setSaintsCategories(state, action: PayloadAction<ISaintsCategory[]>) {
            state.saintsCategories = action.payload;
            state.saintsCategoriesLoading = false;
        },

        // ─── Saints Categories: single ─────────────
        loadSaintsCategory(state, _action: PayloadAction<string>) {
            state.editingSaintsCategoryLoading = true;
        },
        setEditingSaintsCategory(state, action: PayloadAction<ISaintsCategory | null>) {
            state.editingSaintsCategory = action.payload;
            state.editingSaintsCategoryLoading = false;
        },

        // ─── Saints Categories: mutations ──────────
        createSaintsCategory(state, _action: PayloadAction<ISaintsCategoryForm>) {
            state.loading = true;
        },
        updateSaintsCategory(
            state,
            _action: PayloadAction<{ ref: string; data: Partial<ISaintsCategoryForm> }>,
        ) {
            state.loading = true;
        },
        deleteSaintsCategory(state, _action: PayloadAction<{ ref: string }>) {
            state.loading = true;
        },
    },
});

export const saintsActions = slice.actions;
export default slice.reducer;
