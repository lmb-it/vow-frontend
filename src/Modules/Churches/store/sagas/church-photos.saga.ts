import { call, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { churchesActions } from '../churches.slice';
import { churchPhotosService } from '../../api';
import { handleApiResponse, handleApiError } from 'Redux';
import { IChurchPhotoForm } from '../../models/churches.types';

export function* loadPhotosTableSaga(action: PayloadAction<any>) {
    try {
        const data: any = yield call(churchPhotosService.table, action.payload);
        yield put(churchesActions.setPhotos(data.data ?? []));
    } catch (e) {
        yield put(churchesActions.setPhotos([]));
        yield* handleApiError(e);
    }
}

export function* loadPhotoSaga(action: PayloadAction<string>) {
    try {
        const data: any = yield call(churchPhotosService.show, action.payload);
        yield put(churchesActions.setSelectedPhoto(data.data ?? null));
    } catch (e) {
        yield put(churchesActions.setSelectedPhoto(null));
        yield* handleApiError(e);
    }
}

export function* createPhotoSaga(action: PayloadAction<IChurchPhotoForm>) {
    try {
        const data: any = yield call(churchPhotosService.store, action.payload);
        yield put(churchesActions.setPhotosLoading(false));
        yield put(churchesActions.bumpPhotosRefreshKey());
        yield* handleApiResponse(data);
    } catch (e) {
        yield put(churchesActions.setPhotosLoading(false));
        yield* handleApiError(e);
    }
}

export function* updatePhotoSaga(
    action: PayloadAction<{ ref: string; data: Partial<IChurchPhotoForm> }>,
) {
    try {
        const data: any = yield call(
            churchPhotosService.update,
            action.payload.ref,
            action.payload.data,
        );
        yield put(churchesActions.setPhotosLoading(false));
        yield put(churchesActions.bumpPhotosRefreshKey());
        yield* handleApiResponse(data);
    } catch (e) {
        yield put(churchesActions.setPhotosLoading(false));
        yield* handleApiError(e);
    }
}

export function* destroyPhotoSaga(action: PayloadAction<{ ref: string }>) {
    try {
        const data: any = yield call(
            churchPhotosService.destroy,
            action.payload.ref,
        );
        yield put(churchesActions.setPhotosLoading(false));
        yield put(churchesActions.bumpPhotosRefreshKey());
        yield* handleApiResponse(data);
    } catch (e) {
        yield put(churchesActions.setPhotosLoading(false));
        yield* handleApiError(e);
    }
}
