import React, { FunctionComponent, useEffect, useRef } from 'react';
import { useAuth } from "Modules";
import { ProgressSpinner } from "primereact/progressspinner";
import { Flex, useLanguage } from "@lmb-it/kitsconcerto";
import { IReducers } from "Redux";
import { useDispatch, useSelector } from "react-redux";
import { toastActions } from "../Redux/ui/toast.slice";
import { Toast } from "primereact/toast";

const AppLogic: FunctionComponent<any> = () => {
    const toastRef = useRef<Toast>(null);
    const { isLoggedIn } = useAuth();
    const { isRTL } = useLanguage();
    const dispatch = useDispatch();
    const { message, type, visible } = useSelector(
        (state: IReducers) => state.toast
    );

    useEffect(() => {
        if (visible && message) {
            toastRef.current?.show({
                severity: type,
                summary: type.toUpperCase(),
                detail: message,
                life: 3000,
            });
            dispatch(toastActions.hideToast());
        }
    }, [visible, message, type, dispatch]);

    if (isLoggedIn === undefined) {
        return (
            <Flex justifyContent={'center'} alignItems={'center'} flex={1} h={'screen'}>
                <ProgressSpinner />
            </Flex>
        );
    }

    return (
        <Toast
            ref={toastRef}
            position={isRTL ? 'top-left' : 'top-right'}
        />
    );
};

export default AppLogic;