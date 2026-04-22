import {extendTheme, IKitsTheme} from "@lmb-it/kitsconcerto";

/**
 * AlphaMatch Dashboard — kitsTheme config
 * All colors extracted from the Figma Make source (Tailwind palette).
 * Brand color: #20AAB0 (teal)
 */
export const vowTheme: IKitsTheme = extendTheme({

    /* ─── Severity ────────────────────────────────────────────────
     * Used by Button, Alert, Toast, Dialog severity prop.
     * All values are theme tokens → resolved through resolveToken().
     */
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
            solid:     'red.500',
            solidText: '#ffffff',
            bgTint:    'red.50',
            iconFg:    'red.600',
            iconBg:    'red.100',
            text:      'red.700',
            border:    'red.200',
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

    /* ─── Fonts ───────────────────────────────────────────────────
     * Figma uses system font stack. Override if custom fonts are added later.
     */
    fonts: {
        // Uses CSS variables from Theme/index.css so the same tokens
        // switch automatically between Latin (Inter / Cormorant Garamond)
        // and Arabic (Cairo / Amiri) based on [dir].
        heading: 'var(--font-display)',
        body:    'var(--font-body)',
        mono:    'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace',
    },

    /* ─── Component Defaults ──────────────────────────────────────
     * Theme-level styling applied to every instance of the component.
     * Consumer inline props always override these.
     */
    components: {
        Card: {
            root: {
                style: {
                    backgroundColor:'surface-card',
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
                    fontSize:14,
                    fontWeight:"600",
                    color:"text-secondary",
                    textTransform:"uppercase",
                    mb:20,
                    p:0,
                    letterSpacing:'0.05em'
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
                    borderRadius: 8,
                },
            },
            label: {
                style: {
                    fontSize: 13,
                    fontWeight: '600',
                    color: 'text-secondary',
                },
            },
            helperText: {
                style: {
                    fontSize: 12,
                },
            },
            error: {
                style: {
                    fontSize: 12,
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
                    backgroundColor: 'rgba(249,250,251,0.5)',
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
                    backgroundColor: 'rgba(249,250,251,0.5)',
                },
            },
        },
    },

    /* ─── Config ──────────────────────────────────────────────────── */
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
});
