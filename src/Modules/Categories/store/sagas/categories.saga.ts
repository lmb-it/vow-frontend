import { call, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { categoriesActions } from '../categories.slice';
import { categoriesService } from '../../api';
import { handleApiResponse, handleApiError } from 'Redux';
import { ICategoryForm } from '../../models/categories.types';

export function* loadTableSaga(action: PayloadAction<any>) {
    try {
        const data: any = yield call(categoriesService.table, action.payload);
        yield put(categoriesActions.setItems(data.data ?? []));
    } catch (e) {
        yield put(categoriesActions.setItems([]));
        yield* handleApiError(e);
    }
}

export function* loadOneSaga(action: PayloadAction<string>) {
    try {
        const data: any = yield call(categoriesService.show, action.payload);
        yield put(categoriesActions.setSelected(data.data ?? null));
    } catch (e) {
        yield put(categoriesActions.setSelected(null));
        yield* handleApiError(e);
    }
}

export function* createSaga(action: PayloadAction<ICategoryForm>) {
    try {
        const data: any = yield call(categoriesService.store, action.payload);
        yield put(categoriesActions.setLoading(false));
        yield put(categoriesActions.bumpRefreshKey());
        yield* handleApiResponse(data);
    } catch (e) {
        yield put(categoriesActions.setLoading(false));
        yield* handleApiError(e);
    }
}

export function* updateSaga(
    action: PayloadAction<{ ref: string; data: Partial<ICategoryForm> }>,
) {
    try {
        const data: any = yield call(
            categoriesService.update,
            action.payload.ref,
            action.payload.data,
        );
        yield put(categoriesActions.setLoading(false));
        yield put(categoriesActions.bumpRefreshKey());
        yield* handleApiResponse(data);
    } catch (e) {
        yield put(categoriesActions.setLoading(false));
        yield* handleApiError(e);
    }
}

export function* destroySaga(action: PayloadAction<{ ref: string }>) {
    try {
        const data: any = yield call(categoriesService.destroy, action.payload.ref);
        yield put(categoriesActions.setLoading(false));
        yield put(categoriesActions.bumpRefreshKey());
        yield* handleApiResponse(data);
    } catch (e) {
        yield put(categoriesActions.setLoading(false));
        yield* handleApiError(e);
    }
}
