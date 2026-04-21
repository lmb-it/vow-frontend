import { all, takeLatest } from 'redux-saga/effects';
import { churchesActions } from './churches.slice';
import {
    loadChurchesTableSaga,
    loadChurchSaga,
    createChurchSaga,
    updateChurchSaga,
    destroyChurchSaga,
} from './sagas/churches.saga';
import {
    loadServicesTableSaga,
    loadServiceSaga,
    createServiceSaga,
    updateServiceSaga,
    destroyServiceSaga,
} from './sagas/church-services.saga';
import {
    loadPhotosTableSaga,
    loadPhotoSaga,
    createPhotoSaga,
    updatePhotoSaga,
    destroyPhotoSaga,
} from './sagas/church-photos.saga';
import {
    loadClergyTableSaga,
    loadClergyOneSaga,
    createClergySaga,
    updateClergySaga,
    destroyClergySaga,
} from './sagas/clergy.saga';
import {
    loadResourcesTableSaga,
    loadResourceSaga,
    createResourceSaga,
    updateResourceSaga,
    destroyResourceSaga,
} from './sagas/church-resources.saga';

export default function* churchesSaga() {
    yield all([
        // Churches
        takeLatest(churchesActions.loadTable.type, loadChurchesTableSaga),
        takeLatest(churchesActions.loadOne.type, loadChurchSaga),
        takeLatest(churchesActions.create.type, createChurchSaga),
        takeLatest(churchesActions.update.type, updateChurchSaga),
        takeLatest(churchesActions.destroy.type, destroyChurchSaga),

        // Church Services
        takeLatest(churchesActions.loadServicesTable.type, loadServicesTableSaga),
        takeLatest(churchesActions.loadService.type, loadServiceSaga),
        takeLatest(churchesActions.createService.type, createServiceSaga),
        takeLatest(churchesActions.updateService.type, updateServiceSaga),
        takeLatest(churchesActions.destroyService.type, destroyServiceSaga),

        // Church Photos
        takeLatest(churchesActions.loadPhotosTable.type, loadPhotosTableSaga),
        takeLatest(churchesActions.loadPhoto.type, loadPhotoSaga),
        takeLatest(churchesActions.createPhoto.type, createPhotoSaga),
        takeLatest(churchesActions.updatePhoto.type, updatePhotoSaga),
        takeLatest(churchesActions.destroyPhoto.type, destroyPhotoSaga),

        // Clergy
        takeLatest(churchesActions.loadClergyTable.type, loadClergyTableSaga),
        takeLatest(churchesActions.loadClergyOne.type, loadClergyOneSaga),
        takeLatest(churchesActions.createClergy.type, createClergySaga),
        takeLatest(churchesActions.updateClergy.type, updateClergySaga),
        takeLatest(churchesActions.destroyClergy.type, destroyClergySaga),

        // Church Resources
        takeLatest(churchesActions.loadResourcesTable.type, loadResourcesTableSaga),
        takeLatest(churchesActions.loadResource.type, loadResourceSaga),
        takeLatest(churchesActions.createResource.type, createResourceSaga),
        takeLatest(churchesActions.updateResource.type, updateResourceSaga),
        takeLatest(churchesActions.destroyResource.type, destroyResourceSaga),
    ]);
}
