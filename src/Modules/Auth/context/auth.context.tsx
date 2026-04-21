import React, {
    createContext,
    Dispatch,
    FunctionComponent,
    PropsWithChildren,
    SetStateAction,
    useCallback,
    useContext,
    useEffect,
    useRef,
} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {store, IReducers} from 'Redux';
import {Flex, IUseFormReturn} from '@lmb-it/kitsconcerto';
import {ProgressSpinner} from 'primereact/progressspinner';
import {getAuth, getLogout, getRefreshMe, setIsRememberMe} from '../store/auth.slice';
import type {ILoginForm, AuthContextValues} from '../models/auth.types';

export const AuthContext = createContext<AuthContextValues>({} as AuthContextValues);

export const AuthProvider: FunctionComponent<PropsWithChildren> = ({children}) => {
    const auth = useSelector((state: IReducers) => state.auth);
    const errors = useSelector((state: IReducers) => state.errors);

    const {loginDetails: rawLoginDetails, user: rawUser, isLoggedIn, isLoading} = auth;
    const user = rawUser ?? {} as any;
    const loginDetails = rawLoginDetails ?? {email: '', password: ''};
    const formRef = useRef<IUseFormReturn | null>(null);

    const dispatch = useDispatch();

    const refreshAuth = () => {
        dispatch(getRefreshMe());
    };

    useEffect(() => {
        refreshAuth();
    }, []);

    const setRememberMe = () => {
        dispatch(setIsRememberMe());
    };

    const onLogin = (
        data: ILoginForm,
        setIsSubmitting: (isSubmitting: boolean) => void,
    ) => {
        setIsSubmitting(true);
        dispatch(getAuth({...data}));
    };

    const isAdmin = auth.user?.duty === 'admin';
    const isSenior = auth.user?.duty === 'senior';

    const changePassword = (_data: any) => {};

    const onLogOut = useCallback(() => {
        dispatch(getLogout());
    }, []);

    return (
        <AuthContext.Provider
            value={{
                formRef,
                onLogOut,
                onLogin,
                refreshAuth,
                isLoading,
                isLoggedIn,
                changePassword,
                authUser: user,
                loginDetails,
                setRememberMe,
                isAdmin,
                isSenior,
                errors,
            }}
        >
            {isLoading && (
                <Flex
                    position={'fixed'}
                    w={'full'}
                    h={'full'}
                    bgColor={'black-alpha-50'}
                    zIndex={9999}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <ProgressSpinner
                        style={{color: 'var(--primary-color)'}}
                    />
                </Flex>
            )}
            {isLoggedIn !== undefined && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export const auth = () => {
    const state = store.getState() as any;
    const authState = state.auth;
    const isAdmin = authState?.user?.duty === 'admin';
    const isSenior = authState?.user?.duty === 'senior';

    return {
        ...authState?.user,
        isAdmin,
        isSenior,
    };
};
