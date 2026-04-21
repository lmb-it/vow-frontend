import { call, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { categoriesActions } from '../categories.slice';
import { hashtagsService } from '../../api';
import { handleApiResponse, handleApiError } from 'Redux';
import { IHashtagForm } from '../../models/categories.types';

export function* loadHashtagsTableSaga(action: PayloadAction<any>) {
    try {
        const data: any = yield call(hashtagsService.table, action.payload);
        yield put(categoriesActions.setHashtags(data.data ?? []));
    } catch (e) {
        yield put(categoriesActions.setHashtags([]));
        yield* handleApiError(e);
    }
}

export function* loadHashtagSaga(action: PayloadAction<string>) {
    try {
        const data: any = yield call(hashtagsService.show, action.payload);
        yield put(categoriesActions.setSelectedHashtag(data.data ?? null));
    } catch (e) {
        yield put(categoriesActions.setSelectedHashtag(null));
        yield* handleApiError(e);
    }
}

export function* createHashtagSaga(action: PayloadAction<IHashtagForm>) {
    try {
        const data: any = yield call(hashtagsService.store, action.payload);
        yield put(categoriesActions.setHashtagsLoading(false));
        yield put(categoriesActions.bumpRefreshKey());
        yield* handleApiResponse(data);
    } catch (e) {
        yield put(categoriesActions.setHashtagsLoading(false));
        yield* handleApiError(e);
    }
}

export function* updateHashtagSaga(
    action: PayloadAction<{ name: string; data: Partial<IHashtagForm> }>,
) {
    try {
        const data: any = yield call(
            hashtagsService.update,
            action.payload.name,
            action.payload.data,
        );
        yield put(categoriesActions.setHashtagsLoading(false));
        yield put(categoriesActions.bumpRefreshKey());
        yield* handleApiResponse(data);
    } catch (e) {
        yield put(categoriesActions.setHashtagsLoading(false));
        yield* handleApiError(e);
    }
}

export function* destroyHashtagSaga(action: PayloadAction<{ name: string }>) {
    try {
        const data: any = yield call(hashtagsService.destroy, action.payload.name);
        yield put(categoriesActions.setHashtagsLoading(false));
        yield put(categoriesActions.bumpRefreshKey());
        yield* handleApiResponse(data);
    } catch (e) {
        yield put(categoriesActions.setHashtagsLoading(false));
        yield* handleApiError(e);
    }
}
