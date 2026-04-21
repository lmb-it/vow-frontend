// ============================================================
// SAINTS MODULE — TYPES
// Location: Modules/Saints/models/saints.types.ts
// Mirrors the SaintMap / SaintCategoryMap dashboard aliases.
// ============================================================

export type IGender = 'male' | 'female' | null;

export interface ISaintDenomination {
    ref: string;
    title: string;
}

export interface ISaintFeastDay {
    ref?: string;
    [key: string]: any;
}

// Output shape from /api/admin/saint
export interface ISaint {
    ref: string;
    nameAr: string;
    nameEn: string;
    gender: IGender;
    dob: string | null;
    deceased: string | null;
    dobAd: boolean;
    deceasedAd: boolean;
    country: string | null;
    nationality: string | null;
    relicsLocation: string | null;
    forMoreInfo: string | null;
    iconUri: string | null;
    categoryRef: string | null;
    mainImageRef: string | null;
    denominations: ISaintDenomination[];
    feastDays: ISaintFeastDay[];
    bornAt: string;
    touchedAt: string;
}

// Input form shape for POST/PUT
export interface ISaintForm {
    nameAr: string;
    nameEn: string;
    gender?: IGender;
    dob?: string | null;
    deceased?: string | null;
    dobAd?: boolean;
    deceasedAd?: boolean;
    country?: string | null;
    nationality?: string | null;
    relicsLocation?: string | null;
    forMoreInfo?: string | null;
    iconUri?: string | null;
    categoryRef: string;
    mainImageRef?: string | null;
    denominationRefs?: string[];
    churchRefs?: string[];
}

// =====================================================
// SAINTS CATEGORIES
// =====================================================

export interface ISaintsCategory {
    ref: string;
    slug: string;
    parentRef: string | null;
    bornAt: string;
    touchedAt: string;
}

export interface ISaintsCategoryForm {
    slug: string;
    parentRef?: string | null;
}

// =====================================================
// STATE
// =====================================================

export interface ISaintsState {
    // Saints
    saints: ISaint[];
    saintsLoading: boolean;
    editingSaint: ISaint | null;
    editingSaintLoading: boolean;

    // Categories
    saintsCategories: ISaintsCategory[];
    saintsCategoriesLoading: boolean;
    editingSaintsCategory: ISaintsCategory | null;
    editingSaintsCategoryLoading: boolean;

    // Shared
    loading: boolean;
    refreshKey: number;
    error: string | null;
}
