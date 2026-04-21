import { all, takeLatest } from 'redux-saga/effects';
import { categoriesActions } from './categories.slice';
import {
    loadTableSaga,
    loadOneSaga,
    createSaga,
    updateSaga,
    destroySaga,
} from './sagas/categories.saga';
import {
    loadHashtagsTableSaga,
    loadHashtagSaga,
    createHashtagSaga,
    updateHashtagSaga,
    destroyHashtagSaga,
} from './sagas/hashtags.saga';

export default function* categoriesSaga() {
    yield all([
        // Categories
        takeLatest(categoriesActions.loadTable.type, loadTableSaga),
        takeLatest(categoriesActions.loadOne.type, loadOneSaga),
        takeLatest(categoriesActions.create.type, createSaga),
        takeLatest(categoriesActions.update.type, updateSaga),
        takeLatest(categoriesActions.destroy.type, destroySaga),

        // Hashtags
        takeLatest(categoriesActions.loadHashtagsTable.type, loadHashtagsTableSaga),
        takeLatest(categoriesActions.loadHashtag.type, loadHashtagSaga),
        takeLatest(categoriesActions.createHashtag.type, createHashtagSaga),
        takeLatest(categoriesActions.updateHashtag.type, updateHashtagSaga),
        takeLatest(categoriesActions.destroyHashtag.type, destroyHashtagSaga),
    ]);
}
