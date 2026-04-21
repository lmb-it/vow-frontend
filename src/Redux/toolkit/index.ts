import settingsState from './settingsState';
import errorsState from './errorsState';
import toastReducer from '../ui/toast.slice';
import { authReducer } from 'Modules';
import { languagesReducer } from 'Modules';
import { saintsReducer } from 'Modules';
import { denominationsReducer } from 'Modules';
import { categoriesReducer } from 'Modules';
import { churchesReducer } from 'Modules';
import { combineReducers } from 'redux';

export * from './settingsState';
export * from './errorsState';

const rootReducer = combineReducers({
    auth: authReducer,
    languages: languagesReducer,
    saints: saintsReducer,
    denominations: denominationsReducer,
    categories: categoriesReducer,
    churches: churchesReducer,
    settings: settingsState,
    errors: errorsState,
    toast: toastReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;