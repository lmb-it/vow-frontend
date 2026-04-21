// ============================================================
// CHURCHES MODULE — REDUX SLICE
// One slice with 5 sub-sections:
// Church / ChurchService / ChurchPhoto / Clergy / ChurchResource.
// Mirrors the Saints slice pattern scaled up.
// ============================================================

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type {
    IChurch,
    IChurchForm,
    IChurchServiceItem,
    IChurchServiceForm,
    IChurchPhoto,
    IChurchPhotoForm,
    IClergy,
    IClergyForm,
    IChurchResource,
    IChurchResourceForm,
    IChurchesState,
} from '../models/churches.types';

const initialState: IChurchesState = {
    // Churches
    items: [],
    selected: null,
    tableLoading: false,
    loading: false,
    refreshKey: 0,
    // ChurchServices
    services: [],
    selectedService: null,
    servicesTableLoading: false,
    servicesLoading: false,
    servicesRefreshKey: 0,
    // ChurchPhotos
    photos: [],
    selectedPhoto: null,
    photosTableLoading: false,
    photosLoading: false,
    photosRefreshKey: 0,
    // Clergy
    clergy: [],
    selectedClergy: null,
    clergyTableLoading: false,
    clergyLoading: false,
    clergyRefreshKey: 0,
    // ChurchResources
    resources: [],
    selectedResource: null,
    resourcesTableLoading: false,
    resourcesLoading: false,
    resourcesRefreshKey: 0,
};

const slice = createSlice({
    name: 'churches',
    initialState,
    reducers: {
        // ─── Churches ───────────────────────────
        loadTable: (state, _action: PayloadAction<any>) => {
            state.tableLoading = true;
        },
        setItems: (state, action: PayloadAction<IChurch[]>) => {
            state.items = action.payload;
            state.tableLoading = false;
        },
        loadOne: (state, _action: PayloadAction<string>) => {
            state.loading = true;
        },
        setSelected: (state, action: PayloadAction<IChurch | null>) => {
            state.selected = action.payload;
            state.loading = false;
        },
        create: (state, _action: PayloadAction<IChurchForm>) => {
            state.loading = true;
        },
        update: (
            state,
            _action: PayloadAction<{ ref: string; data: Partial<IChurchForm> }>,
        ) => {
            state.loading = true;
        },
        destroy: (state, _action: PayloadAction<{ ref: string }>) => {
            state.loading = true;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        bumpRefreshKey: (state) => {
            state.refreshKey += 1;
        },

        // ─── Church Services ────────────────────
        loadServicesTable: (state, _action: PayloadAction<any>) => {
            state.servicesTableLoading = true;
        },
        setServices: (state, action: PayloadAction<IChurchServiceItem[]>) => {
            state.services = action.payload;
            state.servicesTableLoading = false;
        },
        loadService: (state, _action: PayloadAction<string>) => {
            state.servicesLoading = true;
        },
        setSelectedService: (
            state,
            action: PayloadAction<IChurchServiceItem | null>,
        ) => {
            state.selectedService = action.payload;
            state.servicesLoading = false;
        },
        createService: (state, _action: PayloadAction<IChurchServiceForm>) => {
            state.servicesLoading = true;
        },
        updateService: (
            state,
            _action: PayloadAction<{ ref: string; data: Partial<IChurchServiceForm> }>,
        ) => {
            state.servicesLoading = true;
        },
        destroyService: (state, _action: PayloadAction<{ ref: string }>) => {
            state.servicesLoading = true;
        },
        setServicesLoading: (state, action: PayloadAction<boolean>) => {
            state.servicesLoading = action.payload;
        },
        bumpServicesRefreshKey: (state) => {
            state.servicesRefreshKey += 1;
        },

        // ─── Church Photos ──────────────────────
        loadPhotosTable: (state, _action: PayloadAction<any>) => {
            state.photosTableLoading = true;
        },
        setPhotos: (state, action: PayloadAction<IChurchPhoto[]>) => {
            state.photos = action.payload;
            state.photosTableLoading = false;
        },
        loadPhoto: (state, _action: PayloadAction<string>) => {
            state.photosLoading = true;
        },
        setSelectedPhoto: (state, action: PayloadAction<IChurchPhoto | null>) => {
            state.selectedPhoto = action.payload;
            state.photosLoading = false;
        },
        createPhoto: (state, _action: PayloadAction<IChurchPhotoForm>) => {
            state.photosLoading = true;
        },
        updatePhoto: (
            state,
            _action: PayloadAction<{ ref: string; data: Partial<IChurchPhotoForm> }>,
        ) => {
            state.photosLoading = true;
        },
        destroyPhoto: (state, _action: PayloadAction<{ ref: string }>) => {
            state.photosLoading = true;
        },
        setPhotosLoading: (state, action: PayloadAction<boolean>) => {
            state.photosLoading = action.payload;
        },
        bumpPhotosRefreshKey: (state) => {
            state.photosRefreshKey += 1;
        },

        // ─── Clergy ─────────────────────────────
        loadClergyTable: (state, _action: PayloadAction<any>) => {
            state.clergyTableLoading = true;
        },
        setClergy: (state, action: PayloadAction<IClergy[]>) => {
            state.clergy = action.payload;
            state.clergyTableLoading = false;
        },
        loadClergyOne: (state, _action: PayloadAction<string>) => {
            state.clergyLoading = true;
        },
        setSelectedClergy: (state, action: PayloadAction<IClergy | null>) => {
            state.selectedClergy = action.payload;
            state.clergyLoading = false;
        },
        createClergy: (state, _action: PayloadAction<IClergyForm>) => {
            state.clergyLoading = true;
        },
        updateClergy: (
            state,
            _action: PayloadAction<{ ref: string; data: Partial<IClergyForm> }>,
        ) => {
            state.clergyLoading = true;
        },
        destroyClergy: (state, _action: PayloadAction<{ ref: string }>) => {
            state.clergyLoading = true;
        },
        setClergyLoading: (state, action: PayloadAction<boolean>) => {
            state.clergyLoading = action.payload;
        },
        bumpClergyRefreshKey: (state) => {
            state.clergyRefreshKey += 1;
        },

        // ─── Church Resources ───────────────────
        loadResourcesTable: (state, _action: PayloadAction<any>) => {
            state.resourcesTableLoading = true;
        },
        setResources: (state, action: PayloadAction<IChurchResource[]>) => {
            state.resources = action.payload;
            state.resourcesTableLoading = false;
        },
        loadResource: (state, _action: PayloadAction<string>) => {
            state.resourcesLoading = true;
        },
        setSelectedResource: (
            state,
            action: PayloadAction<IChurchResource | null>,
        ) => {
            state.selectedResource = action.payload;
            state.resourcesLoading = false;
        },
        createResource: (state, _action: PayloadAction<IChurchResourceForm>) => {
            state.resourcesLoading = true;
        },
        updateResource: (
            state,
            _action: PayloadAction<{ ref: string; data: Partial<IChurchResourceForm> }>,
        ) => {
            state.resourcesLoading = true;
        },
        destroyResource: (state, _action: PayloadAction<{ ref: string }>) => {
            state.resourcesLoading = true;
        },
        setResourcesLoading: (state, action: PayloadAction<boolean>) => {
            state.resourcesLoading = action.payload;
        },
        bumpResourcesRefreshKey: (state) => {
            state.resourcesRefreshKey += 1;
        },
    },
});

export const churchesActions = slice.actions;
export default slice.reducer;
