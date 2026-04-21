import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IErrorsState {
    errors: Record<string, string[]>;
}

const errorsSlice = createSlice({
    name: 'errors',
    initialState: {
        errors: {},
    } as IErrorsState,
    reducers: {
        setErrors: (state, action: PayloadAction<Record<string, string[]>>) => {
            state.errors = action.payload;
        },
        clearErrors: (state) => {
            state.errors = {};
        },
    },
});

export const { setErrors, clearErrors } = errorsSlice.actions;
export default errorsSlice.reducer;