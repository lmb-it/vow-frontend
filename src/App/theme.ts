/**
 * Voice Of Wisdom Dashboard — kitsTheme config
 * Brand color: #7C3AED (purple)
 * Adapted from AlphaMatch theme structure with VoW branding.
 */
import {extendTheme, IKitsTheme} from "@lmb-it/kitsconcerto";

export const vowTheme: IKitsTheme = extendTheme({

    /* ─── Color Palettes ────────────────────────────────────────── */
    colors: {
        // Brand / Primary — VoW purple
        brand: {
            50:  '#F3E8FF',
            100: '#E9D5FF',
            200: '#D8B4FE',
            300: '#C084FC',
            400: '#A855F7',
            500: '#7C3AED',
            600: '#6D28D9',
            700: '#5B21B6',
            800: '#4C1D95',
            900: '#3B0764',
        },
        primary: {
            50:  '#F3E8FF',
            100: '#E9D5FF',
            200: '#D8B4FE',
            300: '#C084FC',
            400: '#A855F7',
            500: '#7C3AED',
            600: '#6D28D9',
            700: '#5B21B6',
            800: '#4C1D95',
            900: '#3B0764',
        },
        // Gray — Tailwind gray
        gray: {
            50:  '#F9FAFB',
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
        },
        // Green — success states
        green: {
            50:  '#ECFDF5',
            100: '#D1FAE5',
            200: '#A7F3D0',
            300: '#6EE7B7',
            400: '#34D399',
            500: '#10B981',
            600: '#059669',
            700: '#047857',
            800: '#065F46',
            900: '#064E3B',
        },
        // Red — danger states
        red: {
            50:  '#FEF2F2',
            100: '#FEE2E2',
            200: '#FECACA',
            300: '#FCA5A5',
            400: '#F87171',
            500: '#EF4444',
            600: '#DC2626',
            700: '#B91C1C',
            800: '#991B1B',
            900: '#7F1D1D',
        },
        // Blue — info states
        blue: {
            50:  '#EFF6FF',
            100: '#DBEAFE',
            200: '#BFDBFE',
            300: '#93C5FD',
            400: '#60A5FA',
            500: '#3B82F6',
            600: '#2563EB',
            700: '#1D4ED8',
            800: '#1E40AF',
            900: '#1E3A8A',
        },
        // Yellow — warning states
        yellow: {
            50:  '#FFFBEB',
            100: '#FEF3C7',
            200: '#FDE68A',
            300: '#FCD34D',
            400: '#FBBF24',
            500: '#EAB308',
            600: '#CA8A04',
            700: '#A16207',
            800: '#854D0E',
            900: '#713F12',
        },
        // Orange
        orange: {
            50:  '#FFF7ED',
            100: '#FFEDD5',
            200: '#FED7AA',
            300: '#FDBA74',
            400: '#FB923C',
            500: '#F97316',
            600: '#EA580C',
            700: '#C2410C',
            800: '#9A3412',
            900: '#7C2D12',
        },
        // Purple — extended purple
        purple: {
            50:  '#FAF5FF',
            100: '#F3E8FF',
            200: '#E9D5FF',
            300: '#D8B4FE',
            400: '#C084FC',
            500: '#A855F7',
            600: '#9333EA',
            700: '#7E22CE',
            800: '#6B21A8',
            900: '#581C87',
        },
        // Indigo
        indigo: {
            50:  '#EEF2FF',
            100: '#E0E7FF',
            200: '#C7D2FE',
            300: '#A5B4FC',
            400: '#818CF8',
            500: '#6366F1',
            600: '#4F46E5',
            700: '#4338CA',
            800: '#3730A3',
            900: '#312E81',
        },
        // Teal
        teal: {
            50:  '#F0FDFA',
            100: '#CCFBF1',
            200: '#99F6E4',
            300: '#5EEAD4',
            400: '#2DD4BF',
            500: '#14B8A6',
            600: '#0D9488',
            700: '#0F766E',
            800: '#115E59',
            900: '#134E4A',
        },
        // Cyan
        cyan: {
            50:  '#ECFEFF',
            100: '#CFFAFE',
            200: '#A5F3FC',
            300: '#67E8F9',
            400: '#22D3EE',
            500: '#06B6D4',
            600: '#0891B2',
            700: '#0E7490',
            800: '#155E75',
            900: '#164E63',
        },
        // Pink
        pink: {
            50:  '#FDF2F8',
            100: '#FCE7F3',
            200: '#FBCFE8',
            300: '#F9A8D4',
            400: '#F472B6',
            500: '#EC4899',
            600: '#DB2777',
            700: '#BE185D',
            800: '#9D174D',
            900: '#831843',
        },
    },

    /* ─── Semantic Tokens ────────────────────────────────────────── */
    semanticTokens: {
        light: {
            // Core
            primary:          '#7C3AED',
            secondary:        '#6B7280',
            success:          '#10B981',
            danger:           '#EF4444',
            warning:          '#EAB308',
            info:             '#3B82F6',

            // Text
            text:             '#111827',
            'text-secondary': '#6B7280',
            'text-muted':     '#9CA3AF',

            // Backgrounds
            bg:               '#F5F6FA',
            'bg-subtle':      '#F9FAFB',

            // Surfaces
            'surface-ground':  '#F5F6FA',
            'surface-card':    '#FFFFFF',
            'surface-overlay': 'rgba(0,0,0,0.5)',
            'surface-hover':   '#F3F4F6',

            // Borders
            border:            '#E5E7EB',
        },
        dark: {
            // Core
            primary:          '#A855F7',
            secondary:        '#9CA3AF',
            success:          '#34D399',
            danger:           '#F87171',
            warning:          '#FBBF24',
            info:             '#60A5FA',

            // Text
            text:             '#F9FAFB',
            'text-secondary': '#9CA3AF',
            'text-muted':     '#6B7280',

            // Backgrounds
            bg:               '#161B27',
            'bg-subtle':      '#1E2430',

            // Surfaces
            'surface-ground':  '#161B27',
            'surface-card':    '#1E2430',
            'surface-overlay': 'rgba(0,0,0,0.6)',
            'surface-hover':   '#374151',

            // Borders
            border:            'rgba(31,41,55,0.6)',
        },
    },

    /* ─── Severity ───────────────────────────────────────────────── */
    severity: {
        brand: {
            solid:     'brand.500',
            solidText: '#ffffff',
            bgTint:    'brand.50',
            iconFg:    'brand.600',
            iconBg:    'brand.100',
            text:      'brand.700',
            border:    'brand.500',
        },
        success: {
            solid:     'green.500',
            solidText: '#ffffff',
            bgTint:    'green.50',
            iconFg:    'green.600',
            iconBg:    'green.100',
            text:      'green.700',
            border:    'green.500',
        },
        danger: {
            solid:     'red.50',
            solidText: 'red.500',
            bgTint:    'red.50',
            iconFg:    'red.600',
            iconBg:    'red.100',
            text:      'red.700',
            border:    'red.50',
        },
        warning: {
            solid:     'yellow.500',
            solidText: '#ffffff',
            bgTint:    'yellow.50',
            iconFg:    'yellow.600',
            iconBg:    'yellow.100',
            text:      'yellow.700',
            border:    'yellow.500',
        },
        info: {
            solid:     'blue.500',
            solidText: '#ffffff',
            bgTint:    'blue.50',
            iconFg:    'blue.600',
            iconBg:    'blue.100',
            text:      'blue.700',
            border:    'blue.500',
        },
        secondary: {
            solid:     'gray.500',
            solidText: '#ffffff',
            bgTint:    'gray.50',
            iconFg:    'gray.600',
            iconBg:    'gray.100',
            text:      'gray.700',
            border:    'gray.400',
        },
        help: {
            solid:     'teal.500',
            solidText: '#ffffff',
            bgTint:    'teal.50',
            iconFg:    'teal.600',
            iconBg:    'teal.100',
            text:      'teal.700',
            border:    'teal.500',
        },
    },

    /* ─── Fonts ──────────────────────────────────────────────────── */
    fonts: {
        heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        body:    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        mono:    'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace',
    },

    /* ─── Component Defaults ─────────────────────────────────────── */
    components: {
        Button: {
            root: {
                props: {
                    severity: 'brand',
                    size: 'sm',
                },
                style: {
                    borderRadius: 6,
                    fontWeight: '600',
                },
            },
        },
        Card: {
            root: {
                style: {
                    backgroundColor: 'surface-card',
                    borderRadius: 8,
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'border',
                    flexDirection: 'column',
                    p: {base: 16, md: 24},
                    transition: 'border-left 0.2s ease',
                    _hover: {
                        borderLeft: 4,
                        borderLeftStyle: 'solid',
                        borderLeftColor: 'primary',
                    },
                },
            },
            header: {
                style: {
                    borderBottom: '1px solid var(--surface-border)',
                    paddingBottom: 16,
                    marginBottom: 16,
                },
            },
            title: {
                style: {
                    fontSize: 14,
                    fontWeight: '600',
                    color: 'text-secondary',
                    textTransform: 'uppercase',
                    mb: 20,
                    p: 0,
                    letterSpacing: '0.05em',
                },
            },
            subTitle: {
                style: {
                    fontSize: 13,
                    fontWeight: '500',
                    color: 'text-secondary',
                },
            },
            footer: {
                style: {
                    borderTop: '1px solid var(--surface-border)',
                    paddingTop: 16,
                    marginTop: 16,
                },
            },
        },
        Table: {
            root: {
                style: {
                    borderRadius: 8,
                    overflow: 'hidden',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'border',
                },
            },
            headerCell: {
                style: {
                    fontSize: 11,
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'text-secondary',
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 12,
                    paddingBottom: 12,
                    borderBottom: '1px solid',
                    borderColor: 'border',
                    backgroundColor: 'transparent',
                },
            },
            sortedColumn: {
                style: {
                    color: 'primary',
                },
            },
            bodyRow: {
                style: {
                    borderBottom: '1px solid',
                    borderColor: 'surface-hover',
                    transition: 'background-color 0.15s',
                    _hover: {
                        backgroundColor: 'surface-hover',
                    },
                },
            },
            selectedRow: {
                style: {
                    backgroundColor: 'blue.50',
                    color: 'blue.700',
                },
            },
            bodyCell: {
                style: {
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 14,
                    paddingBottom: 14,
                    fontSize: 13,
                    color: 'text',
                },
            },
            paginator: {
                style: {
                    borderTop: '1px solid',
                    borderColor: 'border',
                    paddingTop: 12,
                    paddingBottom: 12,
                },
            },
            emptyMessage: {
                style: {
                    paddingTop: 40,
                    paddingBottom: 40,
                    textAlign: 'center',
                    color: 'text-secondary',
                    fontSize: 14,
                },
            },
        },
        Sidebar: {
            root: {
                style: {
                    backgroundColor: 'surface-card',
                    color: 'text',
                    borderLeft: '1px solid',
                    borderColor: 'border',
                    boxShadow: '-4px 0 24px rgba(0, 0, 0, 0.08)',
                },
            },
            header: {
                style: {
                    paddingLeft: 24,
                    paddingRight: 24,
                    paddingTop: 20,
                    paddingBottom: 20,
                    borderBottom: '1px solid',
                    borderColor: 'border',
                },
            },
            headerTitle: {
                style: {
                    fontSize: 18,
                    fontWeight: '700',
                    color: 'text',
                },
            },
            closeButton: {
                style: {
                    w: 36,
                    h: 36,
                    borderRadius: '50%',
                    color: 'text-secondary',
                    _hover: {
                        backgroundColor: 'surface-hover',
                        color: 'text',
                    },
                },
            },
            content: {
                style: {
                    paddingLeft: 24,
                    paddingRight: 24,
                    paddingTop: 24,
                    paddingBottom: 24,
                },
            },
            mask: {
                style: {
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                },
            },
        },
        Input: {
            root: {
                props: {
                    inputSize: 'md',
                },
                style: {
                    paddingX: 12,
                    backgroundColor: 'transparent',
                    fontSize: 14,
                },
            },
        },
        Textarea: {
            inputGroup: {
                style: {
                    borderRadius: 8,
                },
            },
            root: {
                props: {
                    inputSize: 'md',
                },
                style: {
                    paddingX: 12,
                    backgroundColor: 'transparent',
                    fontSize: 14,
                },
            },
        },
        AutoComplete: {
            container: {
                style: {
                    height: 'auto',
                },
            },
        },
        Checkbox: {
            inputGroup: {
                style: {
                    backgroundColor: 'transparent',
                },
            },
            container: {
                style: {
                    backgroundColor: 'transparent',
                },
            },
        },
        FormContainer: {
            root: {
                style: {
                    minHeight: 38,
                    borderRadius: 8,
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'border',
                    backgroundColor: '#FFFFFF',
                },
            },
        },
    },

    /* ─── Config ─────────────────────────────────────────────────── */
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
});
