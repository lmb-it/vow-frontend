import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IAuthState, IAuthUser, ILoginForm} from '../models/auth.types';

const initialUserState: IAuthUser = {
    token: '',
    ref: '',
    firstName: '',
    lastName: '',
    gender: '',
    enabled: false,
    emailAddress: '',
    duty: '',
    phoneNumber: '',
    phoneCountryCode: '',
    deletedAt: '',
    bornAt: '',
    touchedAt: '',
    permissions: [],
};

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoading: false,
        isLoggedIn: undefined,
        user: initialUserState,
        loginDetails: {
            email: '',
            password: '',
            isRememberedMe: false,
        },
    } as IAuthState,
    reducers: {
        setAuth: (state, action: PayloadAction<{ user?: IAuthUser }>) => {
            if (!state.isLoggedIn) {
                state.isLoggedIn = true;
            }

            const user = action.payload.user ?? initialUserState;

            if (user.token) {
                localStorage.setItem('token', user.token);
            }

            state.user = {
                ...user,
                token: user.token || state.user.token,
            };
        },
        getAuth: (state, action: PayloadAction<ILoginForm>) => {
            state.isLoading = true;
            state.loginDetails = action.payload;
        },
        setIsRememberMe: (state) => {
            state.loginDetails.isRememberedMe = !state.loginDetails.isRememberedMe;
        },
        disableLoading: (state) => {
            state.isLoading = false;
            state.isLoggedIn = false;
        },
        getRefreshMe: (_state) => {},
        getLogout: (_state) => {},
        setLogout: (state) => {
            localStorage.removeItem('token');
            state.isLoggedIn = false;
            state.isLoading = false;
            state.user = initialUserState;
            state.loginDetails = {
                email: '',
                password: '',
            };
        },
    },
});

export const {
    setAuth, disableLoading, getAuth, getRefreshMe, setLogout, getLogout, setIsRememberMe,
} = authSlice.actions;

export const authActions = authSlice.actions;
export default authSlice.reducer;
