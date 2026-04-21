import { all, takeLatest } from 'redux-saga/effects';
import { denominationsActions } from './denominations.slice';
import {
    loadTableSaga,
    loadOneSaga,
    createSaga,
    updateSaga,
    destroySaga,
} from './sagas/denominations.saga';

export default function* denominationsSaga() {
    yield all([
        takeLatest(denominationsActions.loadTable.type, loadTableSaga),
        takeLatest(denominationsActions.loadOne.type, loadOneSaga),
        takeLatest(denominationsActions.create.type, createSaga),
        takeLatest(denominationsActions.update.type, updateSaga),
        takeLatest(denominationsActions.destroy.type, destroySaga),
    ]);
}
