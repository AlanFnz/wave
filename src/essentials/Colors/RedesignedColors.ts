import { SemanticColorsSchema } from './types';

// Global Tier (--wave-g-color-...)
export const Colors = {
    white: 'hsla(0, 0%, 99%, 1)',
    black: 'hsla(0, 0%, 0%, 1)',
    neutral: {
        900: 'hsla(350, 10%, 11%, 1)',
        550: 'hsla(0, 2%, 38%, 1)',
        350: 'hsla(0, 1%, 55%, 1)',
        200: 'hsla(0, 1%, 73%, 1)',
        50: 'hsla(0, 2%, 91%, 1)'
    },
    primary: {
        1000: 'hsla(346, 51%, 33%, 1)',
        900: 'hsla(347, 42%, 43%, 1)',
        350: 'hsla(349, 89%, 76%, 1)',
        150: 'hsla(351, 100%, 85%, 1)',
        100: 'hsla(352, 100%, 93%, 1)',
        50: 'hsla(9, 100%, 96%, 1)'
    },
    brand: {
        rushhour: 'hsla(350, 91%, 41%, 1)'
    },
    magenta: {
        1000: 'hsla(302, 100%, 18%, 1)',
        900: 'hsla(302, 100%, 33%, 1)',
        350: 'hsla(311, 100%, 84%, 1)',
        50: 'hsla(324, 100%, 96%, 1)'
    },
    green: {
        1000: 'hsla(146, 100%, 11%, 1)',
        900: 'hsla(149, 98%, 22%, 1)',
        350: 'hsla(134, 55%, 68%, 1)',
        50: 'hsla(128, 94%, 94%, 1)'
    },
    yellow: {
        900: 'hsla(48, 100%, 47%, 1)',
        350: 'hsla(42, 100%, 79%, 1)',
        50: 'hsla(30, 100%, 97%, 1)'
    },
    red: {
        1000: 'hsla(356, 100%, 29%, 1)',
        900: 'hsla(0, 75%, 42%, 1)',
        350: 'hsla(6, 100%, 84%, 1)'
    },
    transparent: 'transparent'
} as const;

// Semantic Colors Tier (--wave-s-color-...)
export const SemanticColors = {
    text: {
        primary: Colors.neutral[900],
        primaryInverted: Colors.white,
        secondary: Colors.neutral[550],
        secondaryInverted: Colors.neutral[200],
        tertiary: Colors.neutral[350],
        tertiaryInverted: Colors.neutral[350],
        disabled: Colors.neutral[200],
        disabledInverted: Colors.neutral[550],
        link: Colors.primary[900],
        linkInverted: Colors.white,
        linkHover: Colors.primary[1000],
        linkHoverInverted: Colors.primary[50],
        danger: Colors.red[1000],
        dangerInverted: Colors.red[900],
        success: Colors.green[900],
        warning: Colors.yellow[900],
        info: Colors.neutral[550],
        infoHover: Colors.primary[1000]
    },
    background: {
        primary: {
            default: Colors.white,
            inverted: Colors.neutral[900],
            emphasized: Colors.neutral[900],
            hover: Colors.black,
            disabled: Colors.neutral[200]
        },
        secondary: {
            default: Colors.neutral[50],
            emphasized: Colors.neutral[550]
        },
        tertiary: {
            default: Colors.neutral[200],
            disabled: Colors.neutral[50]
        },
        danger: {
            default: Colors.red[50],
            emphasized: Colors.red[900],
            hover: Colors.red[1000]
        },
        info: {
            default: Colors.neutral[50],
            emphasized: Colors.neutral[550],
            hover: Colors.primary[350]
        },
        success: {
            default: Colors.green[50],
            emphasized: Colors.green[900]
        },
        warning: {
            default: Colors.yellow[50],
            emphasized: Colors.yellow[900]
        },
        highlight: Colors.brand.rushhour,
        transparent: Colors.transparent
    },
    icon: {
        primary: {
            default: Colors.neutral[900],
            inverted: Colors.white
        },
        secondary: {
            default: Colors.neutral[350],
            inverted: Colors.neutral[50],
            hover: Colors.neutral[900],
            hoverInverted: Colors.white
        },
        tertiary: {
            default: Colors.neutral[350],
            inverted: Colors.neutral[350]
        },
        disabled: {
            default: Colors.neutral[200],
            inverted: Colors.neutral[550]
        },
        action: {
            default: Colors.primary[900],
            emphasized: Colors.primary[1000]
        },
        danger: {
            default: Colors.red[900],
            emphasized: Colors.red[1000]
        },
        success: Colors.green[900],
        warning: Colors.yellow[900],
        info: Colors.neutral[350]
    },
    border: {
        neutral: {
            faded: Colors.neutral[50],
            default: Colors.neutral[200],
            emphasized: Colors.neutral[550]
        },
        accent: {
            faded: Colors.primary[350],
            default: Colors.primary[900],
            emphasized: Colors.primary[1000]
        },
        focus: Colors.neutral[550],
        disabled: Colors.neutral[200],
        info: {
            faded: Colors.neutral[200],
            default: Colors.neutral[550]
        },
        success: {
            faded: Colors.green[350],
            default: Colors.green[900]
        },
        warning: {
            faded: Colors.yellow[350],
            default: Colors.yellow[900]
        },
        danger: {
            faded: Colors.red[350],
            default: Colors.red[900]
        },
        transparent: Colors.transparent
    },
    shadow: {
        default: Colors.neutral[200]
    },
    overrides: {
        label: {
            text: {
                link: Colors.neutral[900]
            },
            background: {
                secondary: {
                    emphasized: Colors.neutral[900]
                },
                info: {
                    emphasized: Colors.neutral[900]
                }
            }
        },
        accordion: {
            icon: {
                primary: {
                    default: Colors.primary[900]
                }
            }
        },
        datepicker: {
            background: {
                info: {
                    default: Colors.primary[50],
                    emphasized: Colors.primary[900]
                }
            }
        },
        infobanner: {
            background: {
                info: {
                    default: Colors.white
                },
                success: {
                    default: Colors.white
                },
                warning: {
                    default: Colors.white
                },
                danger: {
                    default: Colors.white
                }
            },
            icon: {
                action: {
                    default: Colors.neutral[900]
                }
            }
        }
    }
} satisfies SemanticColorsSchema;
