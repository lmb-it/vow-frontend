import type {Dispatch, MutableRefObject, SetStateAction} from 'react';
import type {IUseFormReturn} from '@lmb-it/kitsconcerto';
import type {IErrorsState} from 'Redux/toolkit/errorsState';

export interface IAuthUser {
    token: string;
    ref: string;
    firstName: string;
    lastName: string;
    gender: string;
    enabled: boolean;
    emailAddress: string;
    duty: string;
    phoneNumber: string;
    phoneCountryCode: string;
    deletedAt: string;
    bornAt: string;
    touchedAt: string;
    permissions: string[] | null;
}

export interface ILoginForm {
    email?: string;
    password: string;
    isRememberedMe?: boolean;
}

export interface IChangePassword {
    currentPassword?: string;
    newPassword?: string;
    newPassword_confirmation?: string;
}

export interface IAuthState {
    isLoading: boolean;
    isLoggedIn?: boolean;
    user: IAuthUser;
    loginDetails: ILoginForm;
}

export interface AuthContextValues {
    formRef: MutableRefObject<IUseFormReturn<any> | null>;
    onLogOut(): void;
    onLogin(data: ILoginForm, setIsSubmitting: Dispatch<SetStateAction<boolean>>): void;
    refreshAuth(): void;
    isLoading: boolean;
    isLoggedIn?: boolean;
    changePassword(data: any): void;
    authUser: IAuthUser;
    errors: IErrorsState;
    loginDetails: ILoginForm;
    setRememberMe: () => void;
    isAdmin: boolean;
    isSenior: boolean;
}
