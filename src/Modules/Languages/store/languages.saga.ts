import { all, takeLatest } from 'redux-saga/effects';
import { languagesActions } from './languages.slice';
import {
    loadTableSaga,
    loadOneSaga,
    createSaga,
    updateSaga,
    destroySaga,
    deactivateSaga,
} from './sagas/languages.saga';

export default function* languagesSaga() {
    yield all([
        takeLatest(languagesActions.loadTable.type, loadTableSaga),
        takeLatest(languagesActions.loadOne.type, loadOneSaga),
        takeLatest(languagesActions.create.type, createSaga),
        takeLatest(languagesActions.update.type, updateSaga),
        takeLatest(languagesActions.destroy.type, destroySaga),
        takeLatest(languagesActions.deactivate.type, deactivateSaga),
    ]);
}