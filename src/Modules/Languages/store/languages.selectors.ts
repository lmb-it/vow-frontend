import { IReducers } from 'Redux';

export const selectLanguages = (state: IReducers) => state.languages.items;
export const selectSelectedLanguage = (state: IReducers) => state.languages.selected;
export const selectLanguagesLoading = (state: IReducers) => state.languages.loading;
export const selectLanguagesTableLoading = (state: IReducers) => state.languages.tableLoading;
export const selectLanguagesRefreshKey = (state: IReducers) => state.languages.refreshKey;