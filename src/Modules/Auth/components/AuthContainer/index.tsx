import React from 'react';
import {Center, Flex, Text} from '@lmb-it/kitsconcerto';

const AuthContainer = (props: { children: React.ReactNode }) => {
    return (
        <Center
            h={'screen'}
            w={'screen'}
            id={'starting-point'}
            overflow={'hidden'}
            style={{
                background: 'linear-gradient(135deg, #F3E8FF 0%, #EDE9FE 30%, #DDD6FE 60%, #C4B5FD 100%)',
            }}
        >
            {/* Subtle background pattern */}
            <Flex
                position={'absolute'}
                h={'full'}
                w={'full'}
                zIndex={1}
                style={{
                    opacity: 0.06,
                    backgroundImage:
                        'radial-gradient(circle at 25% 25%, #7C3AED 1px, transparent 1px), radial-gradient(circle at 75% 75%, #7C3AED 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                }}
            />

            <Flex
                w={{
                    lg: '650px',
                    md: '600px',
                    sm: '550px',
                    xs: '550px',
                    base: '95%',
                }}
                aspectRatio={{
                    lg: 1.3,
                    md: 1.3,
                    sm: 1,
                    xs: 1,
                    base: 0.8,
                }}
                position={'relative'}
                zIndex={2}
                borderRadius={'1rem'}
                boxShadow={'0px 0px 30px 6px rgba(124, 58, 237, 0.25)'}
                style={{
                    background: 'linear-gradient(145deg, rgba(124,58,237,0.85) 0%, rgba(91,33,182,0.9) 50%, rgba(76,29,149,0.95) 100%)',
                }}
            >
                <Flex
                    zIndex={5}
                    h={'full'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    flex={1}
                >
                    {/* Logo circle */}
                    <Flex
                        w={'140px'}
                        position={'absolute'}
                        top={{
                            lg: '-70px',
                            md: '-65px',
                            sm: '-60px',
                            xs: '-60px',
                            base: '-12%',
                        }}
                        borderRadius={'50%'}
                        backgroundColor={'surface-card'}
                        boxShadow={'0px 0px 20px 4px rgba(124, 58, 237, 0.3)'}
                        aspectRatio={1}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Text
                            fontSize={'42px'}
                            fontWeight={'800'}
                            style={{
                                color: '#7C3AED',
                                fontFamily: 'serif',
                                letterSpacing: '-1px',
                            }}
                        >
                            VoW
                        </Text>
                    </Flex>

                    {/* Title */}
                    <Flex
                        flexDirection={'column'}
                        display={{
                            lg: 'flex',
                            md: 'flex',
                            sm: 'flex',
                            xs: 'flex',
                            base: 'none',
                        }}
                    >
                        <Text
                            as={'p'}
                            fontSize={{
                                lg: '28px',
                                md: '22px',
                                sm: '20px',
                                base: '20px',
                            }}
                            textAlign={'center'}
                            style={{color: '#FFFFFF', fontWeight: 700, letterSpacing: '1px'}}
                        >
                            Voice Of Wisdom
                        </Text>
                        <Text
                            as={'p'}
                            fontSize={{
                                lg: '14px',
                                md: '12px',
                                sm: '12px',
                                base: '12px',
                            }}
                            mt={0}
                            textAlign={'center'}
                            style={{color: 'rgba(255,255,255,0.7)', fontWeight: 400}}
                        >
                            Dashboard
                        </Text>
                    </Flex>

                    {/* Form area */}
                    <Flex
                        flexDirection={'column'}
                        w={['85%', '60%', '60%', '60%', '60%', '60%']}
                        gap={[0, 0, 0, 0, 0]}
                    >
                        {props.children}
                    </Flex>
                </Flex>
            </Flex>
        </Center>
    );
};

export default AuthContainer;
