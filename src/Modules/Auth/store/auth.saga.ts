import {all, call, put, takeLatest} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {getAuth, getLogout, getRefreshMe, setAuth, setLogout, disableLoading} from './auth.slice';
import AuthServices from '../api/auth.service';
import {handleApiResponse, handleApiError} from 'Redux';
import {ILoginForm} from '../models/auth.types';

function* onLoadAuth(action: PayloadAction<ILoginForm>) {
    try {
        const data: any = yield call(AuthServices.login, action.payload);
        if (data.success) {
            const token = data.data.token;
            // Store token, then fetch full user profile
            localStorage.setItem('token', token);
            const meData: any = yield call(AuthServices.me);
            if (meData.success) {
                yield put(setAuth({
                    user: {
                        ...meData.data,
                        token,
                    },
                }));
            }
        } else {
            yield put(disableLoading());
        }
        yield* handleApiResponse(data);
    } catch (e) {
        yield put(disableLoading());
        yield* handleApiError(e);
    }
}

function* onRefreshAuth() {
    const token = localStorage.getItem('token');
    if (!token) {
        yield put(setLogout());
        return;
    }

    try {
        const data: any = yield call(AuthServices.me);
        if (data.success) {
            yield put(setAuth({
                user: {
                    ...data.data,
                    token,
                },
            }));
        } else {
            yield put(setLogout());
        }
    } catch (_e) {
        yield put(setLogout());
    }
}

function* onLogOutAuth() {
    try {
        yield call(AuthServices.logout);
    } catch (_e) {
        // Logout locally even if API call fails
    }
    yield put(setLogout());
}

export default function* authSaga() {
    yield all([
        takeLatest(getAuth.type, onLoadAuth),
        takeLatest(getRefreshMe.type, onRefreshAuth),
        takeLatest(getLogout.type, onLogOutAuth),
    ]);
}
