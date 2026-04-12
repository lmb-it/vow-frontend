export interface ILanguage {
    ref: string;
    label: string;
    nativeName: string | null;
    iso2: string;
    iso3: string | null;
    isRTL: boolean;
    isActive: boolean;
    bornAt: string;
    touchedAt: string;
    trashedAt: string | null;
}

export interface ILanguagesState {
    items: ILanguage[];
    selected: ILanguage | null;
    loading: boolean;
    tableLoading: boolean;
    refreshKey: number;
}

export interface ILanguageFormData {
    label: string;
    nativeName?: string;
    iso2: string;
    iso3?: string;
    isRTL?: boolean;
    isActive?: boolean;
}