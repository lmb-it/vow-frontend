import { call, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { churchesActions } from '../churches.slice';
import { clergyService } from '../../api';
import { handleApiResponse, handleApiError } from 'Redux';
import { IClergyForm } from '../../models/churches.types';

export function* loadClergyTableSaga(action: PayloadAction<any>) {
    try {
        const data: any = yield call(clergyService.table, action.payload);
        yield put(churchesActions.setClergy(data.data ?? []));
    } catch (e) {
        yield put(churchesActions.setClergy([]));
        yield* handleApiError(e);
    }
}

export function* loadClergyOneSaga(action: PayloadAction<string>) {
    try {
        const data: any = yield call(clergyService.show, action.payload);
        yield put(churchesActions.setSelectedClergy(data.data ?? null));
    } catch (e) {
        yield put(churchesActions.setSelectedClergy(null));
        yield* handleApiError(e);
    }
}

export function* createClergySaga(action: PayloadAction<IClergyForm>) {
    try {
        const data: any = yield call(clergyService.store, action.payload);
        yield put(churchesActions.setClergyLoading(false));
        yield put(churchesActions.bumpClergyRefreshKey());
        yield* handleApiResponse(data);
    } catch (e) {
        yield put(churchesActions.setClergyLoading(false));
        yield* handleApiError(e);
    }
}

export function* updateClergySaga(
    action: PayloadAction<{ ref: string; data: Partial<IClergyForm> }>,
) {
    try {
        const data: any = yield call(
            clergyService.update,
            action.payload.ref,
            action.payload.data,
        );
        yield put(churchesActions.setClergyLoading(false));
        yield put(churchesActions.bumpClergyRefreshKey());
        yield* handleApiResponse(data);
    } catch (e) {
        yield put(churchesActions.setClergyLoading(false));
        yield* handleApiError(e);
    }
}

export function* destroyClergySaga(action: PayloadAction<{ ref: string }>) {
    try {
        const data: any = yield call(clergyService.destroy, action.payload.ref);
        yield put(churchesActions.setClergyLoading(false));
        yield put(churchesActions.bumpClergyRefreshKey());
        yield* handleApiResponse(data);
    } catch (e) {
        yield put(churchesActions.setClergyLoading(false));
        yield* handleApiError(e);
    }
}
