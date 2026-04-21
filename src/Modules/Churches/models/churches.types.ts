// ============================================================
// CHURCHES MODULE — TYPES
// Mirrors ChurchMap / ChurchServiceMap / ChurchPhotoMap /
// ClergyMap / ChurchResourceMap dashboard aliases.
// ============================================================

// ─── Church ───────────────────────────────────────────────
export interface IChurch {
    ref: string;
    index?: string;
    isMonastery: boolean;
    name: string;
    otherName: string | null;
    country: string | null;
    state: string | null;
    city: string | null;
    streetName1: string | null;
    streetName2: string | null;
    zipCode: string | null;
    districtCounty: string | null;
    address: string | null;
    latitude: number | null;
    longitude: number | null;
    saintAnniversary: string | null;
    denominationRef: string | null;
    logoFileRef: string | null;
    bannerFileRef: string | null;
    denomination?: { ref: string; title: string };
    bornAt: string;
    touchedAt: string;
}

export interface IChurchForm {
    isMonastery?: boolean;
    name: string;
    otherName?: string | null;
    country?: string | null;
    state?: string | null;
    city?: string | null;
    streetName1?: string | null;
    streetName2?: string | null;
    zipCode?: string | null;
    districtCounty?: string | null;
    address?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    saintAnniversary?: string | null;
    denominationRef: string;
    logoFileRef?: string | null;
    bannerFileRef?: string | null;
}

// ─── Church Service ──────────────────────────────────────
export interface IChurchServiceItem {
    ref: string;
    churchRef: string;
    dayOfWeek: string;
    serviceType: string;
    startTime: string;
    endTime: string | null;
    languageRef: string | null;
    notes: string | null;
    isRecurring: boolean;
    isActive: boolean;
    bornAt: string;
    touchedAt: string;
}

export interface IChurchServiceForm {
    churchRef: string;
    dayOfWeek: string;
    serviceType: string;
    startTime: string;
    endTime?: string | null;
    languageRef?: string | null;
    notes?: string | null;
    isRecurring?: boolean;
    isActive?: boolean;
}

// ─── Church Photo ────────────────────────────────────────
export interface IChurchPhoto {
    ref: string;
    churchRef: string;
    fileRef: string;
    caption: string | null;
    sortOrder: number | null;
    bornAt: string;
    touchedAt: string;
}

export interface IChurchPhotoForm {
    churchRef: string;
    fileRef: string;
    caption?: string | null;
    sortOrder?: number | null;
}

// ─── Clergy ──────────────────────────────────────────────
export type IClergyGender = 'male' | 'female' | null;

export interface IClergy {
    ref: string;
    churchRef: string | null;
    denominationRef: string | null;
    firstNameArabic: string | null;
    lastNameArabic: string | null;
    firstNameLatin: string | null;
    lastNameLatin: string | null;
    title: string | null;
    gender: IClergyGender;
    bio: string | null;
    mainImageRef: string | null;
    authorRef: string | null;
    isActive: boolean;
    bornAt: string;
    touchedAt: string;
}

export interface IClergyForm {
    churchRef?: string | null;
    denominationRef?: string | null;
    firstNameArabic?: string | null;
    lastNameArabic?: string | null;
    firstNameLatin?: string | null;
    lastNameLatin?: string | null;
    title?: string | null;
    gender?: IClergyGender;
    bio?: string | null;
    mainImageRef?: string | null;
    authorRef?: string | null;
    isActive?: boolean;
}

// ─── Church Resource ─────────────────────────────────────
export type IChurchResourceType =
    | 'website'
    | 'facebook'
    | 'youtube'
    | 'x'
    | 'instagram'
    | 'other';

export interface IChurchResource {
    ref: string;
    churchRef: string;
    resourceType: string;
    resourceValue: string;
    bornAt: string;
    touchedAt: string;
}

export interface IChurchResourceForm {
    churchRef: string;
    resourceType: string;
    resourceValue: string;
}

// ─── State ───────────────────────────────────────────────
export interface IChurchesState {
    // Churches
    items: IChurch[];
    selected: IChurch | null;
    tableLoading: boolean;
    loading: boolean;
    refreshKey: number;
    // ChurchServices
    services: IChurchServiceItem[];
    selectedService: IChurchServiceItem | null;
    servicesTableLoading: boolean;
    servicesLoading: boolean;
    servicesRefreshKey: number;
    // ChurchPhotos
    photos: IChurchPhoto[];
    selectedPhoto: IChurchPhoto | null;
    photosTableLoading: boolean;
    photosLoading: boolean;
    photosRefreshKey: number;
    // Clergy
    clergy: IClergy[];
    selectedClergy: IClergy | null;
    clergyTableLoading: boolean;
    clergyLoading: boolean;
    clergyRefreshKey: number;
    // ChurchResources
    resources: IChurchResource[];
    selectedResource: IChurchResource | null;
    resourcesTableLoading: boolean;
    resourcesLoading: boolean;
    resourcesRefreshKey: number;
}
