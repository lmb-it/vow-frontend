import { all, fork } from "redux-saga/effects";
import { authSaga } from "Modules";
import { languagesSaga } from "Modules";
import { saintsSaga } from "Modules";
import { denominationsSaga } from "Modules";
import { categoriesSaga } from "Modules";
import { churchesSaga } from "Modules";

export default function* rootSaga() {
    yield all([
        fork(authSaga),
        fork(languagesSaga),
        fork(saintsSaga),
        fork(denominationsSaga),
        fork(categoriesSaga),
        fork(churchesSaga),
    ]);
}