import { call, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { languagesActions } from '../languages.slice';
import languagesService from '../../api/languages.service';
import { handleApiResponse, handleApiError } from 'Redux';
import { ILanguageFormData } from '../../models/languages.types';

export function* loadTableSaga(action: PayloadAction<any>) {
    try {
        const data: any = yield call(languagesService.table, action.payload);
        yield put(languagesActions.setItems(data.data ?? []));
    } catch (e) {
        yield put(languagesActions.setItems([]));
        yield* handleApiError(e);
    }
}

export function* loadOneSaga(action: PayloadAction<string>) {
    try {
        const data: any = yield call(languagesService.show, action.payload);
        yield put(languagesActions.setSelected(data.data ?? null));
    } catch (e) {
        yield put(languagesActions.setSelected(null));
        yield* handleApiError(e);
    }
}

export function* createSaga(action: PayloadAction<ILanguageFormData>) {
    try {
        const data: any = yield call(languagesService.store, action.payload);
        yield put(languagesActions.setLoading(false));
        yield put(languagesActions.bumpRefreshKey());
        yield* handleApiResponse(data);
    } catch (e) {
        yield put(languagesActions.setLoading(false));
        yield* handleApiError(e);
    }
}

export function* updateSaga(action: PayloadAction<{ ref: string; data: Partial<ILanguageFormData> }>) {
    try {
        const data: any = yield call(languagesService.update, action.payload.ref, action.payload.data);
        yield put(languagesActions.setLoading(false));
        yield put(languagesActions.bumpRefreshKey());
        yield* handleApiResponse(data);
    } catch (e) {
        yield put(languagesActions.setLoading(false));
        yield* handleApiError(e);
    }
}

export function* destroySaga(action: PayloadAction<{ ref: string; del: boolean }>) {
    try {
        const data: any = yield call(languagesService.destroy, action.payload.ref, action.payload.del);
        yield put(languagesActions.setLoading(false));
        yield put(languagesActions.bumpRefreshKey());
        yield* handleApiResponse(data);
    } catch (e) {
        yield put(languagesActions.setLoading(false));
        yield* handleApiError(e);
    }
}

export function* deactivateSaga(action: PayloadAction<{ ref: string; activate: boolean }>) {
    try {
        const data: any = yield call(languagesService.deactivate, action.payload.ref, action.payload.activate);
        yield put(languagesActions.setLoading(false));
        yield put(languagesActions.bumpRefreshKey());
        yield* handleApiResponse(data);
    } catch (e) {
        yield put(languagesActions.setLoading(false));
        yield* handleApiError(e);
    }
}