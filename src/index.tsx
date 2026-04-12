import React, { Fragment } from 'react'
import { Provider } from "react-redux";
import { store, persistor } from "Redux";
import { PersistGate } from 'redux-persist/integration/react';
import Application from './App';
import { AuthProvider } from "Modules";
import { EntryLoader } from "Components";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

const App = () => {
    return (
        <Fragment>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <React.Suspense fallback={<EntryLoader />}>
                        <AuthProvider>
                            <DndProvider backend={HTML5Backend}>
                                <Application/>
                            </DndProvider>
                        </AuthProvider>
                    </React.Suspense>
                </PersistGate>
            </Provider>
        </Fragment>
    );
};

export default App;
