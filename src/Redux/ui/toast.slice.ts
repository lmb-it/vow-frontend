import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ToastType = 'success' | 'info' | 'warn' | 'error' | 'secondary' | 'contrast';

export type IToastState = {
    message: string | null;
    type: ToastType;
    visible: boolean;
    res?: any;
};

const initialState: IToastState = {
    message: null,
    type: "info",
    visible: false,
    res: null
};

const toastSlice = createSlice({
    name: "toast",
    initialState,
    reducers: {
        showToast(
            state,
            action: PayloadAction<{ message: string; type: ToastType; res?: any }>
        ) {
            state.message = action.payload.message;
            state.type = action.payload.type;
            state.visible = true;
            state.res = action.payload.res;
        },
        hideToast(state) {
            state.visible = false;
            state.message = null;
        },
    },
});

export const toastActions = toastSlice.actions;
export default toastSlice.reducer;