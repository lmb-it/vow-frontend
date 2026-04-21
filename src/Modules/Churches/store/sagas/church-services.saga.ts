import { call, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { churchesActions } from '../churches.slice';
import { churchServicesService } from '../../api';
import { handleApiResponse, handleApiError } from 'Redux';
import { IChurchServiceForm } from '../../models/churches.types';

export function* loadServicesTableSaga(action: PayloadAction<any>) {
    try {
        const data: any = yield call(churchServicesService.table, action.payload);
        yield put(churchesActions.setServices(data.data ?? []));
    } catch (e) {
        yield put(churchesActions.setServices([]));
        yield* handleApiError(e);
    }
}

export function* loadServiceSaga(action: PayloadAction<string>) {
    try {
        const data: any = yield call(churchServicesService.show, action.payload);
        yield put(churchesActions.setSelectedService(data.data ?? null));
    } catch (e) {
        yield put(churchesActions.setSelectedService(null));
        yield* handleApiError(e);
    }
}

export function* createServiceSaga(action: PayloadAction<IChurchServiceForm>) {
    try {
        const data: any = yield call(churchServicesService.store, action.payload);
        yield put(churchesActions.setServicesLoading(false));
        yield put(churchesActions.bumpServicesRefreshKey());
        yield* handleApiResponse(data);
    } catch (e) {
        yield put(churchesActions.setServicesLoading(false));
        yield* handleApiError(e);
    }
}

export function* updateServiceSaga(
    action: PayloadAction<{ ref: string; data: Partial<IChurchServiceForm> }>,
) {
    try {
        const data: any = yield call(
            churchServicesService.update,
            action.payload.ref,
            action.payload.data,
        );
        yield put(churchesActions.setServicesLoading(false));
        yield put(churchesActions.bumpServicesRefreshKey());
        yield* handleApiResponse(data);
    } catch (e) {
        yield put(churchesActions.setServicesLoading(false));
        yield* handleApiError(e);
    }
}

export function* destroyServiceSaga(action: PayloadAction<{ ref: string }>) {
    try {
        const data: any = yield call(
            churchServicesService.destroy,
            action.payload.ref,
        );
        yield put(churchesActions.setServicesLoading(false));
        yield put(churchesActions.bumpServicesRefreshKey());
        yield* handleApiResponse(data);
    } catch (e) {
        yield put(churchesActions.setServicesLoading(false));
        yield* handleApiError(e);
    }
}
