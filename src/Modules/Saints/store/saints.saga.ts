import { all, takeLatest } from 'redux-saga/effects';
import { saintsActions } from './saints.slice';
import {
    loadSaintsSaga,
    loadSaintSaga,
    createSaintSaga,
    updateSaintSaga,
    deleteSaintSaga,
    detachDenominationSaga,
} from './sagas/saints.saga';
import {
    loadSaintsCategoriesSaga,
    loadSaintsCategorySaga,
    createSaintsCategorySaga,
    updateSaintsCategorySaga,
    deleteSaintsCategorySaga,
} from './sagas/saints-categories.saga';

export default function* saintsSaga() {
    yield all([
        // Saints
        takeLatest(saintsActions.loadSaints.type, loadSaintsSaga),
        takeLatest(saintsActions.loadSaint.type, loadSaintSaga),
        takeLatest(saintsActions.createSaint.type, createSaintSaga),
        takeLatest(saintsActions.updateSaint.type, updateSaintSaga),
        takeLatest(saintsActions.deleteSaint.type, deleteSaintSaga),
        takeLatest(saintsActions.detachDenomination.type, detachDenominationSaga),

        // Saints Categories
        takeLatest(saintsActions.loadSaintsCategories.type, loadSaintsCategoriesSaga),
        takeLatest(saintsActions.loadSaintsCategory.type, loadSaintsCategorySaga),
        takeLatest(saintsActions.createSaintsCategory.type, createSaintsCategorySaga),
        takeLatest(saintsActions.updateSaintsCategory.type, updateSaintsCategorySaga),
        takeLatest(saintsActions.deleteSaintsCategory.type, deleteSaintsCategorySaga),
    ]);
}
