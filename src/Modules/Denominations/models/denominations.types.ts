// ============================================================
// DENOMINATIONS MODULE — TYPES
// Location: Modules/Denominations/models/denominations.types.ts
// Mirrors the DenominationMap dashboard aliases.
// ============================================================

export interface IDenomination {
    ref: string;
    title: string;
    headquarters: string | null;
    patriarch: string | null;
    bornAt: string;
    touchedAt: string;
}

export interface IDenominationForm {
    title: string;
    headquarters?: string | null;
    patriarch?: string | null;
}

export interface IDenominationsState {
    items: IDenomination[];
    selected: IDenomination | null;
    tableLoading: boolean;
    loading: boolean;
    refreshKey: number;
}
