'use strict';

var defaultSeverityTheme = require('./defaultSeverityTheme.cjs');

const defaultTheme = {
  colors: {
    blue: {
      50: "#EFF6FF",
      100: "#DBEAFE",
      200: "#BFDBFE",
      300: "#93C5FD",
      400: "#60A5FA",
      500: "#3B82F6",
      600: "#2563EB",
      700: "#1D4ED8",
      800: "#1E40AF",
      900: "#1E3A8A"
    },
    green: {
      50: "#F0FDF4",
      100: "#DCFCE7",
      200: "#BBF7D0",
      300: "#86EFAC",
      400: "#4ADE80",
      500: "#22C55E",
      600: "#16A34A",
      700: "#15803D",
      800: "#166534",
      900: "#14532D"
    },
    red: {
      50: "#FEF2F2",
      100: "#FEE2E2",
      200: "#FECACA",
      300: "#FCA5A5",
      400: "#F87171",
      500: "#EF4444",
      600: "#DC2626",
      700: "#B91C1C",
      800: "#991B1B",
      900: "#7F1D1D"
    },
    yellow: {
      50: "#FEFCE8",
      100: "#FEF9C3",
      200: "#FEF08A",
      300: "#FDE047",
      400: "#FACC15",
      500: "#EAB308",
      600: "#CA8A04",
      700: "#A16207",
      800: "#854D0E",
      900: "#713F12"
    },
    orange: {
      50: "#FFF7ED",
      100: "#FFEDD5",
      200: "#FED7AA",
      300: "#FDBA74",
      400: "#FB923C",
      500: "#F97316",
      600: "#EA580C",
      700: "#C2410C",
      800: "#9A3412",
      900: "#7C2D12"
    },
    purple: {
      50: "#FAF5FF",
      100: "#F3E8FF",
      200: "#E9D5FF",
      300: "#D8B4FE",
      400: "#C084FC",
      500: "#8B5CF6",
      600: "#7C3AED",
      700: "#6D28D9",
      800: "#5B21B6",
      900: "#4C1D95"
    },
    teal: {
      50: "#F0FDFA",
      100: "#CCFBF1",
      200: "#99F6E4",
      300: "#5EEAD4",
      400: "#2DD4BF",
      500: "#14B8A6",
      600: "#0D9488",
      700: "#0F766E",
      800: "#115E59",
      900: "#134E4A"
    },
    cyan: {
      50: "#ECFEFF",
      100: "#CFFAFE",
      200: "#A5F3FC",
      300: "#67E8F9",
      400: "#22D3EE",
      500: "#06B6D4",
      600: "#0891B2",
      700: "#0E7490",
      800: "#155E75",
      900: "#164E63"
    },
    pink: {
      50: "#FDF2F8",
      100: "#FCE7F3",
      200: "#FBCFE8",
      300: "#F9A8D4",
      400: "#F472B6",
      500: "#EC4899",
      600: "#DB2777",
      700: "#BE185D",
      800: "#9D174D",
      900: "#831843"
    },
    gray: {
      50: "#F9FAFB",
      100: "#F3F4F6",
      200: "#E5E7EB",
      300: "#D1D5DB",
      400: "#9CA3AF",
      500: "#6B7280",
      600: "#4B5563",
      700: "#374151",
      800: "#1F2937",
      900: "#111827"
    },
    indigo: {
      50: "#EEF2FF",
      100: "#E0E7FF",
      200: "#C7D2FE",
      300: "#A5B4FC",
      400: "#818CF8",
      500: "#6366F1",
      600: "#4F46E5",
      700: "#4338CA",
      800: "#3730A3",
      900: "#312E81"
    }
  },
  semanticTokens: {
    light: {
      // Brand
      primary: "teal.500",
      "primary-hover": "teal.600",
      secondary: "gray.500",
      brand: "teal.500",
      // Status
      success: "green.500",
      danger: "red.500",
      warning: "yellow.500",
      info: "blue.500",
      help: "purple.500",
      // Text
      text: "gray.900",
      "text-primary": "gray.900",
      "text-secondary": "gray.500",
      "text-subtle": "gray.400",
      "text-muted": "gray.400",
      "text-on-primary": "#FFFFFF",
      "text-link": "blue.500",
      // Backgrounds
      bg: "#FFFFFF",
      "bg-subtle": "gray.50",
      "bg-muted": "gray.100",
      "bg-accent": "gray.200",
      "bg-input": "gray.50",
      "bg-page": "gray.50",
      // Surfaces
      "surface-ground": "gray.50",
      "surface-card": "#FFFFFF",
      "surface-overlay": "#FFFFFF",
      "surface-hover": "gray.100",
      "surface-border": "gray.200",
      // Borders
      border: "gray.200",
      "border-default": "gray.200",
      "border-subtle": "gray.100",
      "border-strong": "gray.300",
      divider: "gray.200",
      // Status tints
      "success-tint": "green.50",
      "danger-tint": "red.50",
      "warning-tint": "yellow.50",
      "info-tint": "blue.50",
      "brand-tint": "teal.50",
      // Switch
      "switch-bg": "gray.300"
    },
    dark: {
      // Brand
      primary: "teal.400",
      "primary-hover": "teal.300",
      secondary: "gray.400",
      brand: "teal.400",
      // Status
      success: "green.400",
      danger: "red.400",
      warning: "yellow.400",
      info: "blue.400",
      help: "purple.400",
      // Text
      text: "gray.50",
      "text-primary": "gray.50",
      "text-secondary": "gray.400",
      "text-subtle": "gray.400",
      "text-muted": "gray.500",
      "text-on-primary": "#FFFFFF",
      "text-link": "blue.400",
      // Backgrounds
      bg: "gray.900",
      "bg-subtle": "gray.800",
      "bg-muted": "gray.700",
      "bg-accent": "gray.700",
      "bg-input": "gray.800",
      "bg-page": "#0F172A",
      // Surfaces
      "surface-ground": "gray.900",
      "surface-card": "gray.800",
      "surface-overlay": "gray.800",
      "surface-hover": "gray.700",
      "surface-border": "gray.700",
      // Borders
      border: "gray.700",
      "border-default": "gray.700",
      "border-subtle": "gray.600",
      "border-strong": "gray.500",
      divider: "gray.700",
      // Status tints
      "success-tint": "rgba(52,211,153,0.15)",
      "danger-tint": "rgba(248,113,113,0.15)",
      "warning-tint": "rgba(251,191,36,0.15)",
      "info-tint": "rgba(96,165,250,0.15)",
      "brand-tint": "rgba(45,212,191,0.15)",
      // Switch
      "switch-bg": "gray.600"
    }
  },
  spacing: {
    "0": "0",
    "0.5": "0.125rem",
    "1": "0.25rem",
    "1.5": "0.375rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "16": "4rem",
    "20": "5rem",
    "24": "6rem"
  },
  radii: {
    none: "0",
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px"
  },
  shadows: {
    none: "none",
    sm: "0 1px 2px 0 rgba(0,0,0,0.05)",
    base: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",
    md: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",
    lg: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
    xl: "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)",
    "2xl": "0 25px 50px -12px rgba(0,0,0,0.25)",
    inner: "inset 0 2px 4px 0 rgba(0,0,0,0.05)"
  },
  fonts: {
    heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
    mono: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace'
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem"
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  },
  lineHeights: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2
  },
  severity: defaultSeverityTheme.defaultSeverityTheme,
  components: {
    // ─── Button ────────────────────────────────────────────
    Button: {
      root: {
        props: {
          rounded: false,
          size: "md"
        },
        style: {
          borderRadius: 8,
          fontWeight: "600"
        }
      }
    },
    // ─── Input (base group — applies to all input types) ──
    Input: {
      root: {
        props: {
          inputSize: "md"
        },
        style: {
          borderRadius: 0,
          border: "none",
          backgroundColor: "transparent",
          fontSize: 14,
          color: "text"
        }
      },
      container: {
        style: {
          gap: 6
        }
      },
      label: {
        style: {
          fontSize: 14,
          fontWeight: "500",
          color: "text-secondary"
        }
      },
      helperText: {
        style: {
          fontSize: 12,
          color: "text-muted"
        }
      },
      error: {
        style: {
          fontSize: 12,
          color: "danger"
        }
      }
    },
    // ─── Input group members (inherit from Input) ─────────
    InputText: {},
    InputNumber: {},
    InputMask: {},
    InputPassword: {},
    Datepicker: {},
    ColorPicker: {},
    PhoneInput: {},
    // ─── Textarea ─────────────────────────────────────────
    Textarea: {
      inputGroup: {
        style: {
          borderRadius: 8
        }
      },
      root: {
        props: {
          inputSize: "md"
        },
        style: {
          borderRadius: 0,
          border: "none",
          backgroundColor: "transparent",
          fontSize: 14,
          color: "text"
        }
      }
    },
    // ─── Select (base group — applies to all selects) ─────
    Select: {
      root: {
        props: {
          inputSize: "md"
        },
        style: {
          borderRadius: 0,
          border: "none",
          backgroundColor: "transparent",
          fontSize: 14,
          color: "text"
        }
      },
      container: {
        style: {
          height: "100%",
          gap: 6
        }
      },
      label: {
        style: {
          fontSize: 14,
          fontWeight: "500",
          color: "text-secondary"
        }
      },
      helperText: {
        style: {
          fontSize: 12,
          color: "text-muted"
        }
      },
      error: {
        style: {
          fontSize: 12,
          color: "danger"
        }
      }
    },
    // ─── Select group members (inherit from Select) ───────
    DropdownSelect: {},
    MultiSelect: {},
    TreeSelect: {},
    ListBox: {},
    CascadeSelect: {},
    // ─── AutoComplete (special: needs height auto) ────────
    AutoComplete: {
      container: {
        style: {
          height: "auto"
        }
      }
    },
    // ─── FormContainer ────────────────────────────────────
    FormContainer: {
      root: {
        style: {
          gap: 8,
          minHeight: 38,
          borderRadius: 8,
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "border",
          backgroundColor: "bg"
        }
      }
    },
    // ─── Switch ───────────────────────────────────────────
    Switch: {},
    // ─── Checkbox ─────────────────────────────────────────
    Checkbox: {
      inputGroup: {
        style: {
          backgroundColor: "transparent"
        }
      },
      container: {
        style: {
          backgroundColor: "transparent"
        }
      }
    },
    // ─── Radio ────────────────────────────────────────────
    Radio: {
      inputGroup: {
        style: {
          backgroundColor: "transparent"
        }
      },
      container: {
        style: {
          backgroundColor: "transparent"
        }
      }
    },
    // ─── Card ─────────────────────────────────────────────
    Card: {
      root: {
        props: {
          variant: "elevated"
        },
        style: {
          borderRadius: 12,
          padding: 16,
          backgroundColor: "surface-card",
          borderWidth: 1,
          borderColor: "border"
        }
      },
      header: {
        style: {
          paddingBottom: 12
        }
      },
      title: {
        style: {
          fontSize: 16,
          fontWeight: "600",
          color: "text"
        }
      },
      subTitle: {
        style: {
          fontSize: 13,
          color: "text-secondary"
        }
      },
      content: {
        style: {
          padding: 0
        }
      },
      footer: {
        style: {
          paddingTop: 12
        }
      }
    },
    // ─── Table ────────────────────────────────────────────
    Table: {
      root: {
        style: {
          borderRadius: 8,
          overflow: "hidden",
          backgroundColor: "transparent"
        }
      },
      header: {
        style: {
          border: "none",
          backgroundColor: "bg"
        }
      },
      headerRow: {
        style: {
          border: "none",
          backgroundColor: "bg"
        }
      },
      headerCell: {
        style: {
          fontSize: 11,
          fontWeight: "700",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          color: "text-subtle",
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 12,
          paddingBottom: 12,
          border: "none",
          backgroundColor: "bg-subtle"
        }
      },
      bodyRow: {
        style: {
          border: "none",
          transition: "background-color 0.15s"
        }
      },
      bodyCell: {
        style: {
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 14,
          paddingBottom: 14,
          fontSize: 13,
          color: "text-primary"
        }
      },
      tableHeader: {
        style: {
          backgroundColor: "bg",
          paddingLeft: 16,
          paddingRight: 16,
          paddingTop: 12,
          paddingBottom: 12,
          border: "none"
        }
      },
      searchInput: {
        style: {
          borderRadius: 20,
          borderColor: "primary"
        }
      },
      paginator: {
        style: {
          border: "none",
          paddingTop: 12,
          paddingBottom: 12,
          backgroundColor: "bg-subtle"
        }
      },
      paginatorPageButton: {
        style: {
          color: "text-primary",
          gap: 10,
          minWidth: 32,
          height: 32,
          fontSize: 13
        }
      },
      paginatorActivePageButton: {
        style: {
          height: 32,
          color: "text-primary"
        }
      },
      paginatorRowsPerPage: {
        style: {
          height: 32,
          justifyContent: "center",
          alignItems: "center",
          color: "text-primary",
          border: "1px solid #dee2e6",
          fontSize: 13,
          margin: "0 10px"
        }
      },
      emptyMessage: {
        style: {
          paddingTop: 40,
          paddingBottom: 40,
          textAlign: "center",
          color: "text-subtle",
          fontSize: 14
        }
      }
    },
    // ─── Sidebar ──────────────────────────────────────────
    Sidebar: {
      root: {
        style: {
          backgroundColor: "bg",
          color: "text",
          borderLeft: "1px solid",
          borderColor: "border"
        }
      },
      header: {
        style: {
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 20,
          paddingBottom: 20,
          borderBottom: "1px solid",
          borderColor: "border"
        }
      },
      headerTitle: {
        style: {
          fontSize: 18,
          fontWeight: "700",
          color: "text"
        }
      },
      closeButton: {
        style: {
          borderRadius: "50%",
          color: "text-subtle"
        }
      },
      content: {
        style: {
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 24,
          paddingBottom: 24
        }
      },
      mask: {
        style: {
          backgroundColor: "rgba(0, 0, 0, 0.4)"
        }
      }
    },
    // ─── Group (repeatable field array) ───────────────────
    Group: {
      root: {
        style: {
          gap: 12
        }
      },
      header: {
        style: {
          paddingBottom: 8
        }
      },
      body: {
        style: {
          gap: 8
        }
      },
      row: {
        style: {
          gap: 8,
          paddingBottom: 8
        }
      },
      addButton: {
        props: {
          severity: "success",
          size: "sm",
          outlined: true
        }
      },
      removeButton: {
        props: {
          severity: "danger",
          size: "sm",
          outlined: true
        }
      }
    }
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false
  }
};

exports.defaultTheme = defaultTheme;
//# sourceMappingURL=defaultTheme.cjs.map
