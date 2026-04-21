import { call, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { saintsActions } from '../saints.slice';
import { saintsService } from '../../api';
import { handleApiResponse, handleApiError } from 'Redux';
import { ISaintForm } from '../../models/saints.types';

export function* loadSaintsSaga(action: PayloadAction<any>) {
    try {
        const data: any = yield call(saintsService.table, action.payload);
        yield put(saintsActions.setSaints(data.data ?? []));
    } catch (e) {
        yield put(saintsActions.setSaints([]));
        yield* handleApiError(e);
    }
}

export function* loadSaintSaga(action: PayloadAction<string>) {
    try {
        const data: any = yield call(saintsService.show, action.payload);
        yield put(saintsActions.setEditingSaint(data.data ?? null));
    } catch (e) {
        yield put(saintsActions.setEditingSaint(null));
        yield* handleApiError(e);
    }
}

export function* createSaintSaga(action: PayloadAction<ISaintForm>) {
    try {
        const data: any = yield call(saintsService.store, action.payload);
        yield put(saintsActions.setLoading(false));
        yield put(saintsActions.bumpRefreshKey());
        yield* handleApiResponse(data);
    } catch (e) {
        yield put(saintsActions.setLoading(false));
        yield* handleApiError(e);
    }
}

export function* updateSaintSaga(
    action: PayloadAction<{ ref: string; data: Partial<ISaintForm> }>,
) {
    try {
        const data: any = yield call(
            saintsService.update,
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

export function* deleteSaintSaga(action: PayloadAction<{ ref: string }>) {
    try {
        const data: any = yield call(saintsService.destroy, action.payload.ref);
        yield put(saintsActions.setLoading(false));
        yield put(saintsActions.bumpRefreshKey());
        yield* handleApiResponse(data);
    } catch (e) {
        yield put(saintsActions.setLoading(false));
        yield* handleApiError(e);
    }
}

export function* detachDenominationSaga(
    action: PayloadAction<{ ref: string; denominationRef: string }>,
) {
    try {
        const data: any = yield call(
            saintsService.detachDenomination,
            action.payload.ref,
            action.payload.denominationRef,
        );
        yield put(saintsActions.setLoading(false));
        yield put(saintsActions.bumpRefreshKey());
        yield* handleApiResponse(data);
    } catch (e) {
        yield put(saintsActions.setLoading(false));
        yield* handleApiError(e);
    }
}
