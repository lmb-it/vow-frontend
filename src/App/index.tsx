import React, { useMemo } from 'react'
import { Flex, MainContextProvider, Text } from "@lmb-it/kitsconcerto";
import { useAuth, AuthServices } from "Modules";
import languages from 'Localization';
import { MenuItem } from "primereact/menuitem";
import { Avatar } from "primereact/avatar";
import { Tag } from "primereact/tag";
import { LayoutDashboard } from "lucide-react";
import { adminRoutes, authRoutes } from "../Routes";
import AppLogic from "./AppLogic";
import { vowTheme } from './theme';
import '../Theme/index.css';

const App = () => {
    const { onLogOut, authUser, isLoggedIn } = useAuth();

    const userInitials = useMemo(() => {
        const first = authUser?.firstName?.charAt(0)?.toUpperCase() || '';
        const last = authUser?.lastName?.charAt(0)?.toUpperCase() || '';
        return first + last || '?';
    }, [authUser?.firstName, authUser?.lastName]);

    const menuItems: MenuItem[] = [
        {
            template: () => (
                <Flex p={16} gap={12} alignItems={'center'}
                      style={{ borderBottom: '1px solid var(--surface-border)' }}>
                    <Avatar
                        label={userInitials}
                        shape="circle"
                        size="large"
                        style={{
                            backgroundColor: 'var(--primary-color)',
                            color: '#FFFFFF',
                            fontWeight: 600,
                            fontSize: '18px',
                            minWidth: 48,
                            minHeight: 48,
                        }}
                    />
                    <Flex flexDirection={'column'} gap={2} overflow={'hidden'} flex={1}>
                        <Text fontWeight={'600'} fontSize={'15px'}
                              style={{
                                  color: 'var(--text-color)',
                                  whiteSpace: 'nowrap',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                              }}>
                            {authUser?.firstName} {authUser?.lastName}
                        </Text>
                        <Text fontSize={'13px'}
                              style={{
                                  color: 'var(--text-color-secondary)',
                                  whiteSpace: 'nowrap',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                              }}>
                            {authUser?.emailAddress}
                        </Text>
                        <Tag
                            value={authUser?.duty === 'admin' ? 'Admin' : 'Senior'}
                            style={{
                                fontSize: '11px',
                                padding: '2px 8px',
                                borderRadius: '4px',
                                width: 'fit-content',
                                marginTop: 4,
                                backgroundColor: authUser?.duty === 'admin'
                                    ? 'var(--primary-color)'
                                    : 'var(--blue-500)',
                                color: '#FFFFFF',
                            }}
                        />
                    </Flex>
                </Flex>
            ),
        },
        {
            template: () => (
                <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Flex px={16} py={10} gap={10} alignItems={'center'}
                          cursor={'pointer'}
                          className={'hover:surface-hover'}
                          style={{ transition: 'background-color 0.15s ease' }}>
                        <LayoutDashboard size={18} style={{ color: 'var(--text-color-secondary)' }} />
                        <Text fontSize={'14px'} style={{ color: 'var(--text-color)' }}>
                            Dashboard
                        </Text>
                    </Flex>
                </a>
            ),
        },
        { separator: true },
    ];

    const logo = useMemo(() => (
        <Flex overflow={'hidden'} height={'80px'} alignItems={'center'} px={16}>
            <Text fontSize={'20px'} fontWeight={'700'} style={{ color: '#7C3AED' }}>
                Voice Of Wisdom
            </Text>
        </Flex>
    ), []);

    return (
        <div className="vow-app-bg">
            <MainContextProvider
                renderRouter
                languages={languages}
                authedRoutes={isLoggedIn ? adminRoutes : []}
                nonAuthRoutes={!isLoggedIn ? authRoutes : []}
                onLogOut={onLogOut}
                defaultLanguage={'en'}
                kitsTheme={vowTheme}
                userAvatar={{
                    label: userInitials,
                    color: '#7C3AED',
                }}
                onChangeLanguage={(language: any) => {
                    AuthServices.updateMe({
                        lang: language
                    }).then((r) => {
                        if (!r.success && r.pageCode === 401) {
                            onLogOut();
                        }
                    });
                }}
                permissions={authUser?.permissions || []}
                menuItems={menuItems}
                logo={logo}
            >
                <AppLogic />
            </MainContextProvider>
        </div>
    );
};

export default App;