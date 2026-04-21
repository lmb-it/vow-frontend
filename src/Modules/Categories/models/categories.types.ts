// ============================================================
// CATEGORIES MODULE — TYPES
// Location: Modules/Categories/models/categories.types.ts
// ============================================================

export interface ICategory {
    ref: string;
    index?: string;
    slug: string;
    mainImageRef: string | null;
    isActive: boolean;
    parentRef: string | null;
    sortOrder: number | null;
    createdByRef: string | null;
    children?: ICategory[];
    bornAt: string;
    touchedAt: string;
}

export interface ICategoryForm {
    slug: string;
    parentRef?: string | null;
    mainImageRef?: string | null;
    isActive?: boolean;
    sortOrder?: number | null;
}

// ============================================================
// HASHTAGS — flat, route-bound by `name`
// ============================================================

export interface IHashtag {
    name: string;
    bornAt: string;
    touchedAt: string;
}

export interface IHashtagForm {
    name: string;
}

// ============================================================
// STATE
// ============================================================

export interface ICategoriesState {
    // Categories
    items: ICategory[];
    selected: ICategory | null;
    tableLoading: boolean;
    loading: boolean;
    refreshKey: number;

    // Hashtags
    hashtags: IHashtag[];
    selectedHashtag: IHashtag | null;
    hashtagsTableLoading: boolean;
    hashtagsLoading: boolean;
}
