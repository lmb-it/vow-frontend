import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILanguage, ILanguagesState, ILanguageFormData } from '../models/languages.types';

const initialState: ILanguagesState = {
    items: [],
    selected: null,
    loading: false,
    tableLoading: false,
    refreshKey: 0,
};

const languagesSlice = createSlice({
    name: 'languages',
    initialState,
    reducers: {
        // Table
        loadTable: (state, _action: PayloadAction<any>) => {
            state.tableLoading = true;
        },
        setItems: (state, action: PayloadAction<ILanguage[]>) => {
            state.items = action.payload;
            state.tableLoading = false;
        },

        // Single
        loadOne: (state, _action: PayloadAction<string>) => {
            state.loading = true;
        },
        setSelected: (state, action: PayloadAction<ILanguage | null>) => {
            state.selected = action.payload;
            state.loading = false;
        },

        // Mutations
        create: (state, _action: PayloadAction<ILanguageFormData>) => {
            state.loading = true;
        },
        update: (state, _action: PayloadAction<{ ref: string; data: Partial<ILanguageFormData> }>) => {
            state.loading = true;
        },
        destroy: (state, _action: PayloadAction<{ ref: string; del: boolean }>) => {
            state.loading = true;
        },
        deactivate: (state, _action: PayloadAction<{ ref: string; activate: boolean }>) => {
            state.loading = true;
        },

        // Shared
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        bumpRefreshKey: state => {
            state.refreshKey += 1;
        },
    },
});

export const languagesActions = languagesSlice.actions;
export default languagesSlice.reducer;