import { IReducers } from 'Redux';

const root = (state: IReducers) => state.churches;

// ─── Churches ──────────────────────────────
export const selectChurches = (s: IReducers) => root(s).items;
export const selectSelectedChurch = (s: IReducers) => root(s).selected;
export const selectChurchesTableLoading = (s: IReducers) => root(s).tableLoading;
export const selectChurchesLoading = (s: IReducers) => root(s).loading;
export const selectChurchesRefreshKey = (s: IReducers) => root(s).refreshKey;

// ─── Services ──────────────────────────────
export const selectChurchServices = (s: IReducers) => root(s).services;
export const selectSelectedChurchService = (s: IReducers) => root(s).selectedService;
export const selectChurchServicesTableLoading = (s: IReducers) =>
    root(s).servicesTableLoading;
export const selectChurchServicesLoading = (s: IReducers) => root(s).servicesLoading;
export const selectChurchServicesRefreshKey = (s: IReducers) =>
    root(s).servicesRefreshKey;

// ─── Photos ────────────────────────────────
export const selectChurchPhotos = (s: IReducers) => root(s).photos;
export const selectSelectedChurchPhoto = (s: IReducers) => root(s).selectedPhoto;
export const selectChurchPhotosTableLoading = (s: IReducers) =>
    root(s).photosTableLoading;
export const selectChurchPhotosLoading = (s: IReducers) => root(s).photosLoading;
export const selectChurchPhotosRefreshKey = (s: IReducers) => root(s).photosRefreshKey;

// ─── Clergy ────────────────────────────────
export const selectClergy = (s: IReducers) => root(s).clergy;
export const selectSelectedClergy = (s: IReducers) => root(s).selectedClergy;
export const selectClergyTableLoading = (s: IReducers) => root(s).clergyTableLoading;
export const selectClergyLoading = (s: IReducers) => root(s).clergyLoading;
export const selectClergyRefreshKey = (s: IReducers) => root(s).clergyRefreshKey;

// ─── Resources ─────────────────────────────
export const selectChurchResources = (s: IReducers) => root(s).resources;
export const selectSelectedChurchResource = (s: IReducers) =>
    root(s).selectedResource;
export const selectChurchResourcesTableLoading = (s: IReducers) =>
    root(s).resourcesTableLoading;
export const selectChurchResourcesLoading = (s: IReducers) =>
    root(s).resourcesLoading;
export const selectChurchResourcesRefreshKey = (s: IReducers) =>
    root(s).resourcesRefreshKey;
