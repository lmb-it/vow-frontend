import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore } from 'redux-persist';
import { createLogger } from 'redux-logger';

import rootReducer from '../toolkit';
import SagaRoot from '../sagas';
import storage from './persistStorage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
};

const sagaMiddleware = createSagaMiddleware();

const loggerMiddleware = createLogger({
    collapsed: true,
    duration: true,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) => {
        const baseMiddleware = getDefaultMiddleware({
            thunk: false,
            serializableCheck: false,
        });

        return process.env.NODE_ENV !== 'production'
            ? baseMiddleware.concat(sagaMiddleware, loggerMiddleware)
            : baseMiddleware.concat(sagaMiddleware);
    },

    devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

sagaMiddleware.run(SagaRoot);