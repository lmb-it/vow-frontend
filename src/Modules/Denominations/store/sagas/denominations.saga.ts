import { call, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { denominationsActions } from '../denominations.slice';
import { denominationsService } from '../../api';
import { handleApiResponse, handleApiError } from 'Redux';
import { IDenominationForm } from '../../models/denominations.types';

export function* loadTableSaga(action: PayloadAction<any>) {
    try {
        const data: any = yield call(denominationsService.table, action.payload);
        yield put(denominationsActions.setItems(data.data ?? []));
    } catch (e) {
        yield put(denominationsActions.setItems([]));
        yield* handleApiError(e);
    }
}

export function* loadOneSaga(action: PayloadAction<string>) {
    try {
        const data: any = yield call(denominationsService.show, action.payload);
        yield put(denominationsActions.setSelected(data.data ?? null));
    } catch (e) {
        yield put(denominationsActions.setSelected(null));
        yield* handleApiError(e);
    }
}

export function* createSaga(action: PayloadAction<IDenominationForm>) {
    try {
        const data: any = yield call(denominationsService.store, action.payload);
        yield put(denominationsActions.setLoading(false));
        yield put(denominationsActions.bumpRefreshKey());
        yield* handleApiResponse(data);
    } catch (e) {
        yield put(denominationsActions.setLoading(false));
        yield* handleApiError(e);
    }
}

export function* updateSaga(
    action: PayloadAction<{ ref: string; data: Partial<IDenominationForm> }>,
) {
    try {
        const data: any = yield call(
            denominationsService.update,
            action.payload.ref,
            action.payload.data,
        );
        yield put(denominationsActions.setLoading(false));
        yield put(denominationsActions.bumpRefreshKey());
        yield* handleApiResponse(data);
    } catch (e) {
        yield put(denominationsActions.setLoading(false));
        yield* handleApiError(e);
    }
}

export function* destroySaga(action: PayloadAction<{ ref: string }>) {
    try {
        const data: any = yield call(denominationsService.destroy, action.payload.ref);
        yield put(denominationsActions.setLoading(false));
        yield put(denominationsActions.bumpRefreshKey());
        yield* handleApiResponse(data);
    } catch (e) {
        yield put(denominationsActions.setLoading(false));
        yield* handleApiError(e);
    }
}
