import { all, fork } from "redux-saga/effects";
import { authSaga } from "Modules";
import { languagesSaga } from "Modules";

export default function* rootSaga() {
    yield all([
        fork(authSaga),
        fork(languagesSaga),
    ]);
}