import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ISettingsReducerState {
    language: string;
    isRTL: boolean;
    isOnline: boolean | null;
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        language: 'en',
        isRTL: false,
        isOnline: null,
    } as ISettingsReducerState,
    reducers: {
        switchLanguage: (
            state: ISettingsReducerState,
            action: PayloadAction<{ language: string; isRTL: boolean }>
        ) => {
            state.language = action.payload.language;
            state.isRTL = action.payload.isRTL;
        },
        switchNetworkState: (
            state: ISettingsReducerState,
            action: PayloadAction<{ isOnline: boolean }>
        ) => {
            state.isOnline = action.payload.isOnline;
        },
        clearAllSettingsState: (state: ISettingsReducerState) => {
            state.language = 'en';
            state.isRTL = false;
        },
    },
});

export const {
    switchLanguage,
    switchNetworkState,
    clearAllSettingsState,
} = settingsSlice.actions;
export default settingsSlice.reducer;