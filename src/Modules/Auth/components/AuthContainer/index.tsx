import React from 'react';
import {Center, Flex, Text} from '@lmb-it/kitsconcerto';
import logo from '../../../../App/assets/logo.png';
import bg from '../../../../App/assets/img.png';

const BRAND_GOLD = '#B68A2E';
const BRAND_DARK = '#3B2A14';
const BRAND_MUTED = '#7A5E3A';
const CARD_BG = '#F7EFE2';
const DIVIDER = 'rgba(182, 138, 46, 0.45)';

const AuthContainer = (props: { children: React.ReactNode }) => {
    return (
        <Center
            h={'screen'}
            w={'screen'}
            id={'starting-point'}
            overflow={'hidden'}
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Soft cream overlay to calm the background */}
            <Flex
                position={'absolute'}
                h={'full'}
                w={'full'}
                zIndex={1}
                style={{
                    background:
                        'linear-gradient(180deg, rgba(247, 241, 232, 0.55) 0%, rgba(247, 241, 232, 0.75) 100%)',
                }}
            />

            <Flex
                position={'relative'}
                zIndex={2}
                w={'95%'}
                flexDirection={'column'}
                alignItems={'center'}
                borderRadius={'18px'}
                p={{lg: '40px 44px', md: '36px 40px', base: '28px 24px'}}
                style={{
                    maxWidth: '500px',
                    background: CARD_BG,
                    boxShadow:
                        '0 20px 60px rgba(59, 42, 20, 0.18), 0 4px 12px rgba(59, 42, 20, 0.08)',
                    border: '1px solid rgba(182, 138, 46, 0.18)',
                }}
            >
                {/* Logo */}
                <Flex
                    w={'96px'}
                    h={'96px'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    mb={'12px'}
                >
                    <img
                        src={logo}
                        alt={'Voice Of Wisdom'}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                        }}
                    />
                </Flex>

                {/* Title */}
                <Text
                    as={'h1'}
                    textAlign={'center'}
                    style={{
                        color: BRAND_DARK,
                        fontFamily: 'var(--font-display)',
                        fontSize: '28px',
                        fontWeight: 600,
                        letterSpacing: '2px',
                        lineHeight: 1.15,
                        margin: 0,
                    }}
                >
                    VOICE OF
                    <br />
                    WISDOM
                </Text>

                {/* Ornamental divider */}
                <Flex
                    alignItems={'center'}
                    justifyContent={'center'}
                    w={'70%'}
                    mt={'18px'}
                    mb={'22px'}
                    gap={'10px'}
                >
                    <Flex flex={1} h={'1px'} style={{background: DIVIDER}} />
                    <Text
                        style={{
                            color: BRAND_GOLD,
                            fontSize: '14px',
                            lineHeight: 1,
                        }}
                    >
                        ❖
                    </Text>
                    <Flex flex={1} h={'1px'} style={{background: DIVIDER}} />
                </Flex>

                {/* Welcome heading */}
                <Text
                    as={'h2'}
                    textAlign={'center'}
                    style={{
                        color: BRAND_DARK,
                        fontFamily: 'var(--font-display)',
                        fontSize: '26px',
                        fontWeight: 600,
                        margin: 0,
                    }}
                >
                    Welcome Back
                </Text>
                <Text
                    as={'p'}
                    textAlign={'center'}
                    mt={'6px'}
                    mb={'26px'}
                    style={{
                        color: BRAND_MUTED,
                        fontSize: '14px',
                        fontWeight: 400,
                    }}
                >
                    Sign in to continue to your account
                </Text>

                {/* Form area */}
                <Flex flexDirection={'column'} w={'full'} gap={0}>
                    {props.children}
                </Flex>

                {/* Footer */}
                <Text
                    mt={'22px'}
                    style={{
                        color: BRAND_MUTED,
                        fontSize: '11px',
                        letterSpacing: '0.5px',
                    }}
                >
                    © {new Date().getFullYear()} Voice Of Wisdom. All rights reserved.
                </Text>
            </Flex>
        </Center>
    );
};

export default AuthContainer;
