import { call, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { churchesActions } from '../churches.slice';
import { churchResourcesService } from '../../api';
import { handleApiResponse, handleApiError } from 'Redux';
import { IChurchResourceForm } from '../../models/churches.types';

export function* loadResourcesTableSaga(action: PayloadAction<any>) {
    try {
        const data: any = yield call(churchResourcesService.table, action.payload);
        yield put(churchesActions.setResources(data.data ?? []));
    } catch (e) {
        yield put(churchesActions.setResources([]));
        yield* handleApiError(e);
    }
}

export function* loadResourceSaga(action: PayloadAction<string>) {
    try {
        const data: any = yield call(churchResourcesService.show, action.payload);
        yield put(churchesActions.setSelectedResource(data.data ?? null));
    } catch (e) {
        yield put(churchesActions.setSelectedResource(null));
        yield* handleApiError(e);
    }
}

export function* createResourceSaga(action: PayloadAction<IChurchResourceForm>) {
    try {
        const data: any = yield call(churchResourcesService.store, action.payload);
        yield put(churchesActions.setResourcesLoading(false));
        yield put(churchesActions.bumpResourcesRefreshKey());
        yield* handleApiResponse(data);
    } catch (e) {
        yield put(churchesActions.setResourcesLoading(false));
        yield* handleApiError(e);
    }
}

export function* updateResourceSaga(
    action: PayloadAction<{ ref: string; data: Partial<IChurchResourceForm> }>,
) {
    try {
        const data: any = yield call(
            churchResourcesService.update,
            action.payload.ref,
            action.payload.data,
        );
        yield put(churchesActions.setResourcesLoading(false));
        yield put(churchesActions.bumpResourcesRefreshKey());
        yield* handleApiResponse(data);
    } catch (e) {
        yield put(churchesActions.setResourcesLoading(false));
        yield* handleApiError(e);
    }
}

export function* destroyResourceSaga(action: PayloadAction<{ ref: string }>) {
    try {
        const data: any = yield call(
            churchResourcesService.destroy,
            action.payload.ref,
        );
        yield put(churchesActions.setResourcesLoading(false));
        yield put(churchesActions.bumpResourcesRefreshKey());
        yield* handleApiResponse(data);
    } catch (e) {
        yield put(churchesActions.setResourcesLoading(false));
        yield* handleApiError(e);
    }
}
