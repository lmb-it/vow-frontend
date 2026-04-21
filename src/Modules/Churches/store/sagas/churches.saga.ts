import { call, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { churchesActions } from '../churches.slice';
import { churchesService } from '../../api';
import { handleApiResponse, handleApiError } from 'Redux';
import { IChurchForm } from '../../models/churches.types';

export function* loadChurchesTableSaga(action: PayloadAction<any>) {
    try {
        const data: any = yield call(churchesService.table, action.payload);
        yield put(churchesActions.setItems(data.data ?? []));
    } catch (e) {
        yield put(churchesActions.setItems([]));
        yield* handleApiError(e);
    }
}

export function* loadChurchSaga(action: PayloadAction<string>) {
    try {
        const data: any = yield call(churchesService.show, action.payload);
        yield put(churchesActions.setSelected(data.data ?? null));
    } catch (e) {
        yield put(churchesActions.setSelected(null));
        yield* handleApiError(e);
    }
}

export function* createChurchSaga(action: PayloadAction<IChurchForm>) {
    try {
        const data: any = yield call(churchesService.store, action.payload);
        yield put(churchesActions.setLoading(false));
        yield put(churchesActions.bumpRefreshKey());
        yield* handleApiResponse(data);
    } catch (e) {
        yield put(churchesActions.setLoading(false));
        yield* handleApiError(e);
    }
}

export function* updateChurchSaga(
    action: PayloadAction<{ ref: string; data: Partial<IChurchForm> }>,
) {
    try {
        const data: any = yield call(
            churchesService.update,
            action.payload.ref,
            action.payload.data,
        );
        yield put(churchesActions.setLoading(false));
        yield put(churchesActions.bumpRefreshKey());
        yield* handleApiResponse(data);
    } catch (e) {
        yield put(churchesActions.setLoading(false));
        yield* handleApiError(e);
    }
}

export function* destroyChurchSaga(action: PayloadAction<{ ref: string }>) {
    try {
        const data: any = yield call(churchesService.destroy, action.payload.ref);
        yield put(churchesActions.setLoading(false));
        yield put(churchesActions.bumpRefreshKey());
        yield* handleApiResponse(data);
    } catch (e) {
        yield put(churchesActions.setLoading(false));
        yield* handleApiError(e);
    }
}
