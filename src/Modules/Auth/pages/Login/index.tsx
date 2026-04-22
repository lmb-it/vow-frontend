import React, {useEffect, useMemo} from 'react';
import {FiLock, FiLogIn, FiMail, FiUserPlus} from 'react-icons/fi';
import {Flex, Form, Text} from '@lmb-it/kitsconcerto';
import {useAuth} from 'Modules';
import {AuthContainer} from '../../components';
import {getLoginElements} from './login.elements';

const BRAND_GOLD = '#B68A2E';
const BRAND_GOLD_HOVER = '#9C7521';

const Login = () => {
    const {
        onLogin,
        formRef,
        isLoading,
    } = useAuth();

    const elements = useMemo(
        () => getLoginElements({isLoading, FiMail, FiLock}),
        [isLoading],
    );

    // Ensure submit button resets whenever the global auth loading state goes false,
    // so a failed login doesn't leave the form stuck in a submitting state.
    useEffect(() => {
        if (!isLoading && formRef.current) {
            formRef.current.setIsSubmitting(false);
        }
    }, [isLoading]);

    return (
        <AuthContainer>
            <Form
                // @ts-ignore
                ref={formRef}
                elements={elements}
                onInvalidSubmit={(errors1: any) => {
                    console.log({errors1});
                }}
                onSubmit={onLogin}
                submitButtonProps={'none' as any}
            >
                {() => (
                    <Flex
                        flexDirection={'column'}
                        w={'full'}
                        alignItems={'flex-end'}
                        mt={'-4px'}
                        mb={'6px'}
                    >
                        <a
                            href={'#'}
                            onClick={(e) => e.preventDefault()}
                            style={{
                                color: BRAND_GOLD,
                                fontSize: '13px',
                                fontWeight: 600,
                                textDecoration: 'none',
                            }}
                        >
                            Forgot Password?
                        </a>
                    </Flex>
                )}
            </Form>

            {/* Primary: Sign In */}
            <button
                type={'button'}
                disabled={isLoading}
                onClick={() => {
                    // @ts-ignore
                    formRef.current?.onFormSubmit?.();
                }}
                style={{
                    width: '100%',
                    backgroundColor: BRAND_GOLD,
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '10px',
                    height: '46px',
                    fontSize: '15px',
                    fontWeight: 600,
                    letterSpacing: '0.3px',
                    cursor: isLoading ? 'wait' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'background-color 0.15s ease',
                    opacity: isLoading ? 0.75 : 1,
                    marginTop: '14px',
                }}
                onMouseEnter={(e) => {
                    if (isLoading) return;
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                        BRAND_GOLD_HOVER;
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = BRAND_GOLD;
                }}
            >
                <FiLogIn size={18} />
                {isLoading ? 'Signing In…' : 'Sign In'}
            </button>

            {/* "or" divider */}
            <Flex
                alignItems={'center'}
                justifyContent={'center'}
                w={'full'}
                gap={'12px'}
                mt={'18px'}
                mb={'16px'}
            >
                <Flex flex={1} h={'1px'} style={{background: 'rgba(59, 42, 20, 0.15)'}} />
                <Text style={{color: 'rgba(59, 42, 20, 0.55)', fontSize: '13px'}}>or</Text>
                <Flex flex={1} h={'1px'} style={{background: 'rgba(59, 42, 20, 0.15)'}} />
            </Flex>

            {/* Secondary: Admin account button (outline) */}
            <button
                type={'button'}
                disabled={isLoading}
                onClick={() => {
                    // Hook to admin SSO flow when available.
                }}
                style={{
                    width: '100%',
                    background: 'transparent',
                    color: BRAND_GOLD,
                    border: `1px solid ${BRAND_GOLD}`,
                    borderRadius: '10px',
                    height: '46px',
                    fontSize: '15px',
                    fontWeight: 600,
                    cursor: isLoading ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'background-color 0.15s ease',
                    opacity: isLoading ? 0.6 : 1,
                }}
                onMouseEnter={(e) => {
                    if (isLoading) return;
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                        'rgba(182, 138, 46, 0.08)';
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
                }}
            >
                <FiUserPlus size={18} />
                Sign in with Admin Account
            </button>
        </AuthContainer>
    );
};

export default Login;
