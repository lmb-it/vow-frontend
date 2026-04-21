import { call, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { saintsActions } from '../saints.slice';
import { saintsCategoriesService } from '../../api';
import { handleApiResponse, handleApiError } from 'Redux';
import { ISaintsCategoryForm } from '../../models/saints.types';

export function* loadSaintsCategoriesSaga(action: PayloadAction<any>) {
    try {
        const data: any = yield call(saintsCategoriesService.table, action.payload);
        yield put(saintsActions.setSaintsCategories(data.data ?? []));
    } catch (e) {
        yield put(saintsActions.setSaintsCategories([]));
        yield* handleApiError(e);
    }
}

export function* loadSaintsCategorySaga(action: PayloadAction<string>) {
    try {
        const data: any = yield call(saintsCategoriesService.show, action.payload);
        yield put(saintsActions.setEditingSaintsCategory(data.data ?? null));
    } catch (e) {
        yield put(saintsActions.setEditingSaintsCategory(null));
        yield* handleApiError(e);
    }
}

export function* createSaintsCategorySaga(action: PayloadAction<ISaintsCategoryForm>) {
    try {
        const data: any = yield call(saintsCategoriesService.store, action.payload);
        yield put(saintsActions.setLoading(false));
        yield put(saintsActions.bumpRefreshKey());
        yield* handleApiResponse(data);
    } catch (e) {
        yield put(saintsActions.setLoading(false));
        yield* handleApiError(e);
    }
}

export function* updateSaintsCategorySaga(
    action: PayloadAction<{ ref: string; data: Partial<ISaintsCategoryForm> }>,
) {
    try {
        const data: any = yield call(
            saintsCategoriesService.update,
            action.payload.ref,
            action.payload.data,
        );
        yield put(saintsActions.setLoading(false));
        yield put(saintsActions.bumpRefreshKey());
        yield* handleApiResponse(data);
    } catch (e) {
        yield put(saintsActions.setLoading(false));
        yield* handleApiError(e);
    }
}

export function* deleteSaintsCategorySaga(action: PayloadAction<{ ref: string }>) {
    try {
        const data: any = yield call(saintsCategoriesService.destroy, action.payload.ref);
        yield put(saintsActions.setLoading(false));
        yield put(saintsActions.bumpRefreshKey());
        yield* handleApiResponse(data);
    } catch (e) {
        yield put(saintsActions.setLoading(false));
        yield* handleApiError(e);
    }
}
