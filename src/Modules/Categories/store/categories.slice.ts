// ============================================================
// CATEGORIES MODULE — REDUX SLICE
// One slice for two sub-resources: Categories + Hashtags.
// ============================================================

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type {
    ICategoriesState,
    ICategory,
    ICategoryForm,
    IHashtag,
    IHashtagForm,
} from '../models/categories.types';

const initialState: ICategoriesState = {
    items: [],
    selected: null,
    tableLoading: false,
    loading: false,
    refreshKey: 0,

    hashtags: [],
    selectedHashtag: null,
    hashtagsTableLoading: false,
    hashtagsLoading: false,
};

const slice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        // ─── Shared ────────────────────────────────
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        bumpRefreshKey(state) {
            state.refreshKey += 1;
        },

        // ─── Categories: list ──────────────────────
        loadTable(state, _action: PayloadAction<any>) {
            state.tableLoading = true;
        },
        setItems(state, action: PayloadAction<ICategory[]>) {
            state.items = action.payload;
            state.tableLoading = false;
        },

        // ─── Categories: single ────────────────────
        loadOne(state, _action: PayloadAction<string>) {
            state.loading = true;
        },
        setSelected(state, action: PayloadAction<ICategory | null>) {
            state.selected = action.payload;
            state.loading = false;
        },

        // ─── Categories: mutations ─────────────────
        create(state, _action: PayloadAction<ICategoryForm>) {
            state.loading = true;
        },
        update(
            state,
            _action: PayloadAction<{ ref: string; data: Partial<ICategoryForm> }>,
        ) {
            state.loading = true;
        },
        destroy(state, _action: PayloadAction<{ ref: string }>) {
            state.loading = true;
        },

        // ─── Hashtags ──────────────────────────────
        setHashtagsLoading(state, action: PayloadAction<boolean>) {
            state.hashtagsLoading = action.payload;
        },

        loadHashtagsTable(state, _action: PayloadAction<any>) {
            state.hashtagsTableLoading = true;
        },
        setHashtags(state, action: PayloadAction<IHashtag[]>) {
            state.hashtags = action.payload;
            state.hashtagsTableLoading = false;
        },

        loadHashtag(state, _action: PayloadAction<string>) {
            state.hashtagsLoading = true;
        },
        setSelectedHashtag(state, action: PayloadAction<IHashtag | null>) {
            state.selectedHashtag = action.payload;
            state.hashtagsLoading = false;
        },

        createHashtag(state, _action: PayloadAction<IHashtagForm>) {
            state.hashtagsLoading = true;
        },
        updateHashtag(
            state,
            _action: PayloadAction<{ name: string; data: Partial<IHashtagForm> }>,
        ) {
            state.hashtagsLoading = true;
        },
        destroyHashtag(state, _action: PayloadAction<{ name: string }>) {
            state.hashtagsLoading = true;
        },
    },
});

export const categoriesActions = slice.actions;
export default slice.reducer;
