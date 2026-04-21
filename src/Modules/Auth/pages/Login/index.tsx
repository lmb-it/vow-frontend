import React, {useEffect, useMemo} from 'react';
import {FiLock, FiMail} from 'react-icons/fi';
import {Flex, Form, IUseFormReturn, KitsCheckboxes, Text} from '@lmb-it/kitsconcerto';
import {useAuth} from 'Modules';
import {AuthContainer} from '../../components';
import {getLoginElements} from './login.elements';
import type {ILoginForm} from '../../models/auth.types';

const Login = () => {
    const {
        onLogin,
        formRef,
        errors,
        loginDetails,
        isLoading,
        setRememberMe,
    } = useAuth();

    const elements = useMemo(
        () => getLoginElements({isLoading, FiMail, FiLock}),
        [isLoading],
    );

    useEffect(() => {
        if (errors.errors && Object.keys(errors.errors).length > 0) {
            if (formRef.current) {
                formRef.current.setIsSubmitting(false);
            }
        }
    }, [errors]);

    const loginForm = () => {
        return (
            <Form
                // @ts-ignore
                ref={formRef}
                elements={elements}
                onInvalidSubmit={(errors1: any) => {
                    console.log({errors1});
                }}
                onSubmit={onLogin}
                submitButtonProps={{
                    isLoadingText: 'Logging In',
                    label: 'login',
                    severity: 'info',
                }}
            >
                {(props: IUseFormReturn<ILoginForm>) => {
                    return (
                        <Flex
                            mt={4}
                            flexDirection={['column', 'row']}
                            justifyContent={'space-between'}
                            w={'full'}
                            gap={'1rem'}
                        >
                            <Flex alignItems={'center'} mb={4}>
                                <KitsCheckboxes
                                    item={{
                                        id: 'rememberMe',
                                        label: 'rememberMe',
                                        value: 'rememberMe',
                                        withBulbs: true,
                                        size: 'sm',
                                    }}
                                    checked={!!loginDetails?.isRememberedMe}
                                    onChange={() => {
                                        setRememberMe();
                                    }}
                                />
                            </Flex>
                        </Flex>
                    );
                }}
            </Form>
        );
    };

    return <AuthContainer>{loginForm()}</AuthContainer>;
};

export default Login;
