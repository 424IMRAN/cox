import React from 'react'
import {  ThemeProvider, styled } from '@material-ui/styles';
import ThemeWrapper from '../wrappers/ThemeWrapper/index'
import './styles.css'
import LoginPage from '../_components/pages/LoginPage';

const Login: React.FC = () => (
  <React.StrictMode>
    <ThemeProvider
  theme={{
    breakpoints: {
      between: () => {},
      down: function noRefCheck() {},
      keys: [
        'xs',
        'sm',
        'md',
        'lg',
        'xl'
      ],
      only: function noRefCheck() {},
      up: function noRefCheck() {},
      values: {
        lg: 1280,
        md: 960,
        sm: 600,
        xl: 1920,
        xs: 0
      },
      width: function noRefCheck() {}
    },
    direction: 'ltr',
    mixins: {
      gutters: function noRefCheck() {},
      toolbar: {
        '@media (min-width:0px) and (orientation: landscape)': {
          minHeight: 48
        },
        '@media (min-width:600px)': {
          minHeight: 64
        },
        minHeight: 56
      }
    },
    overrides: {
      MuiAccordionDetails: {
        root: {
          padding: '0px'
        }
      },
      MuiAccordionSummary: {
        content: {
          margin: '0px',
          padding: '0px'
        },
        root: {
          '&.Mui-expanded': {
            minHeight: '0px'
          },
          height: '23px',
          margin: '0px',
          marginBottom: '16px',
          minHeight: '0px',
          padding: '0px'
        }
      },
      MuiAppBar: {
        colorDefault: {
          backgroundColor: undefined
        }
      },
      MuiButton: {
        contained: {
          '&:disabled': {
            backgroundColor: '#009AE0',
            color: undefined
          },
          '&:hover': {
            backgroundColor: '#CCD6E2',
            boxShadow: 'none'
          },
          backgroundColor: '#2196F3',
          boxShadow: 'none',
          color: undefined,
          minHeight: '32px',
          minWidth: '74px',
          padding: '8px 16px'
        },
        containedSizeLarge: {
          minHeight: '42px',
          minWidth: '74px',
          padding: '13px 16px'
        },
        containedSizeSmall: {
          minHeight: '28px',
          minWidth: '74px',
          padding: '8px 16px'
        },
        outlined: {
          '&:disabled': {
            backgroundColor: '#127C65',
            color: undefined
          },
          '&:hover': {
            backgroundColor: '#EAF0F6',
            boxShadow: 'none',
            color: '#2E3F50'
          },
          borderColor: '#828E96',
          boxShadow: 'none',
          boxSizing: 'border-box',
          color: '#455051',
          minHeight: '32px',
          minWidth: '74px',
          padding: '8px 16px'
        },
        outlinedSizeLarge: {
          minHeight: '42px',
          minWidth: '74px',
          padding: '13px 16px'
        },
        outlinedSizeSmall: {
          minHeight: '28px',
          minWidth: '74px',
          padding: '8px 16px'
        },
        root: {
          borderRadius: 4,
          height: '42px',
          textTransform: 'none'
        },
        sizeLarge: {
          height: '46px'
        },
        text: {
          '&:disabled': {
            color: undefined
          },
          '&:hover': {
            color: undefined
          },
          borderRadius: 'null',
          color: undefined,
          minHeight: '14px',
          minWidth: '32px',
          padding: '8px 16px',
          textTransform: 'none'
        },
        textSizeLarge: {
          minHeight: '42px',
          minWidth: '74px',
          padding: '8px 16px'
        },
        textSizeSmall: {
          minHeight: '14px',
          minWidth: '39px',
          padding: '8px 16px'
        }
      },
      MuiCard: {
        root: {
          borderRadius: 4
        }
      },
      MuiCheckbox: {
        indeterminate: {
          '& img': {
            backgroundColor: '#009AE0',
            color: '#EAF0F6'
          }
        },
        root: {
          '& svg': {
            height: '16px',
            margin: '0px',
            padding: '0px',
            width: '16px'
          },
          '&$checked': {
            '&.Mui-checked': {
              color: '#2E3F50'
            }
          },
          borderRadius: '0px',
          boxSizing: 'content-box',
          color: '#9AADC1',
          margin: '0px',
          padding: '0px'
        }
      },
      MuiChip: {
        deletable: {
          borderRadius: '100px'
        },
        label: {
          padding: '4px 8px 4px 4px'
        },
        root: {
          borderRadius: 4
        }
      },
      MuiDialog: {
        paper: {
          borderRadius: '16px'
        }
      },
      MuiDialogActions: {
        root: {
          margin: '0px 16px 4px 0px'
        }
      },
      MuiDialogContent: {
        root: {
          margin: '4px',
          padding: '8px 4px'
        }
      },
      MuiFilledInput: {
        adornedEnd: {
          borderRadius: '8px'
        },
        input: {
          padding: '18.5px 14px;'
        },
        root: {
          '& svg': {
            fill: '#435C75'
          },
          '&.Mui-focused': {
            backgroundColor: '#F5F8FA'
          },
          '&:hover': {
            '@media (hover: none)': {
              backgroundColor: '#F5F8FA'
            },
            backgroundColor: '#F5F8FA'
          },
          backgroundColor: '#F5F8FA',
          height: '40px'
        },
        underline: {
          '&&&:before': {
            borderBottom: 'none',
            borderWidth: 0
          },
          '&&:after': {
            borderBottom: 'none',
            borderWidth: 0
          }
        }
      },
      MuiIcon: {
        fontSizeSmall: {
          fontSize: '15.33px !important'
        }
      },
      MuiList: {
        padding: {
          paddingBottom: '0px',
          paddingTop: '0px'
        }
      },
      MuiListItem: {
        gutters: {
          paddingLeft: '12px'
        }
      },
      MuiListItemIcon: {
        root: {
          minWidth: 0
        }
      },
      MuiListItemText: {},
      MuiMenu: {
        paper: {
          margin: '0px',
          padding: '0px'
        }
      },
      MuiOutlinedInput: {
        root: {
          '& fieldset': {
            borderColor: '#9AADC1'
          },
          '& svg': {
            boxSizing: 'border-box',
            fill: '#52708F'
          },
          '&.Mui-focused fieldset': {
            borderColor: 'undefined !important'
          },
          '&:hover': {
            borderColor: '#9AADC1'
          },
          height: '40px'
        }
      },
      MuiPaper: {
        rounded: {
          borderRadius: 4
        }
      },
      MuiPickersCalendarHeader: {
        switchHeader: {
          justifyContent: 'center'
        },
        transitionContainer: {
          '& p': {
            fontWeight: 400
          },
          width: '36%'
        }
      },
      MuiPopover: {
        paper: {
          marginTop: '4px'
        }
      },
      MuiRadio: {
        root: {
          '& svg': {
            height: '24px',
            width: '24px'
          },
          '&$checked': {
            '& svg': {
              height: '24px',
              width: '24px'
            },
            '&.Mui-checked': {
              color: '#2E3F50'
            },
            '&:hover': {
              backgroundColor: '#FFFFFF'
            }
          },
          '&:hover': {
            backgroundColor: '#FFFFFF'
          },
          color: '#CCD6E2',
          margin: '0px',
          padding: '0px'
        }
      },
      MuiSelect: {
        filled: {
          background: '#F5F8FA',
          borderRadius: '8px',
          boxSizing: 'border-box',
          padding: '12px'
        },
        outlined: {
          borderColor: '#9AADC1',
          borderRadius: '4px',
          boxSizing: 'border-box',
          padding: '4px'
        }
      },
      MuiSvgIcon: {
        fontSizeSmall: {
          fontSize: '26px'
        }
      },
      MuiSwitch: {
        colorPrimary: {
          '&$checked': {
            color: '#2196F3'
          },
          '&$checked + $track': {
            backgroundColor: '#2196F3'
          }
        }
      }
    },
    palette: {
      action: {
        activatedOpacity: 0.12,
        active: 'rgba(0, 0, 0, 0.54)',
        disabled: 'rgba(0, 0, 0, 0.26)',
        disabledBackground: 'rgba(0, 0, 0, 0.12)',
        disabledOpacity: 0.38,
        focus: 'rgba(0, 0, 0, 0.12)',
        focusOpacity: 0.12,
        hover: 'rgba(0, 0, 0, 0.04)',
        hoverOpacity: 0.04,
        selected: 'rgba(0, 0, 0, 0.08)',
        selectedOpacity: 0.08
      },
      augmentColor: function noRefCheck() {},
      background: {
        default: '#fafafa',
        paper: '#fff'
      },
      common: {
        black: '#000',
        white: '#fff'
      },
      contrastThreshold: 3,
      divider: 'rgba(0, 0, 0, 0.12)',
      error: {
        contrastText: '#fff',
        dark: 'rgb(143, 0, 0)',
        light: 'rgb(215, 51, 51)',
        main: '#CD0000'
      },
      getContrastText: function noRefCheck() {},
      grey: {
        '50': '#fafafa',
        '100': '#f5f5f5',
        '200': '#eeeeee',
        '300': '#e0e0e0',
        '400': '#bdbdbd',
        '500': '#9e9e9e',
        '600': '#757575',
        '700': '#616161',
        '800': '#424242',
        '900': '#212121',
        A100: '#d5d5d5',
        A200: '#aaaaaa',
        A400: '#303030',
        A700: '#616161'
      },
      info: {
        contrastText: '#fff',
        dark: 'rgb(48, 56, 56)',
        light: 'rgb(106, 115, 115)',
        main: '#455051'
      },
      primary: {
        contrastText: '#fff',
        dark: 'rgb(32, 44, 56)',
        light: 'rgb(87, 101, 115)',
        main: '#2E3F50'
      },
      secondary: {
        contrastText: 'rgba(0, 0, 0, 0.87)',
        dark: 'rgb(87, 107, 126)',
        light: 'rgb(151, 173, 195)',
        main: '#7D99B5'
      },
      success: {
        contrastText: 'rgba(0, 0, 0, 0.87)',
        dark: '#388e3c',
        light: '#81c784',
        main: '#4caf50'
      },
      text: {
        disabled: 'rgba(0, 0, 0, 0.38)',
        hint: 'rgba(0, 0, 0, 0.38)',
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(0, 0, 0, 0.54)'
      },
      tonalOffset: 0.2,
      type: 'light',
      warning: {
        contrastText: 'rgba(0, 0, 0, 0.87)',
        dark: '#f57c00',
        light: '#ffb74d',
        main: '#ff9800'
      }
    },
    props: {},
    shadows: [
      'none',
      '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
      '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
      '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
      '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
      '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
      '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
      '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
      '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
      '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
      '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
      '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
      '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
      '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
      '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
      '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
      '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
      '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
      '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
      '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
      '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
      '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
      '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
      '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
      '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)'
    ],
    shape: {
      borderRadius: 4
    },
    spacing: function noRefCheck() {},
    transitions: {
      create: function noRefCheck() {},
      duration: {
        complex: 375,
        enteringScreen: 225,
        leavingScreen: 195,
        short: 250,
        shorter: 200,
        shortest: 150,
        standard: 300
      },
      easing: {
        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
        sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
      },
      getAutoHeightDuration: function noRefCheck() {}
    },
    typography: {
      body1: {
        color: '#000000',
        fontFamily: 'Roboto,sans-serif',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '20px'
      },
      body2: {
        color: '#000000',
        fontFamily: 'Roboto,sans-serif',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '20px'
      },
      button: {
        fontFamily: 'Roboto,sans-serif',
        fontSize: '0.875rem',
        fontWeight: 500,
        lineHeight: 1.75,
        textTransform: 'uppercase'
      },
      caption: {
        fontFamily: 'Roboto,sans-serif',
        fontSize: '0.75rem',
        fontWeight: 400,
        lineHeight: 1.66
      },
      fontFamily: 'Roboto,sans-serif',
      fontSize: 14,
      fontWeightBold: 700,
      fontWeightLight: 300,
      fontWeightMedium: 500,
      fontWeightRegular: 400,
      h1: {
        color: '#000000',
        fontFamily: 'Roboto,sans-serif',
        fontSize: '28px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '40px'
      },
      h2: {
        color: '#000000',
        fontFamily: 'Roboto,sans-serif',
        fontSize: '24px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '24px'
      },
      h3: {
        color: '#000000',
        fontFamily: 'Roboto,sans-serif',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '28px'
      },
      h4: {
        color: '#000000',
        fontFamily: 'Roboto,sans-serif',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '25.56px'
      },
      h5: {
        color: '#000000',
        fontFamily: 'Roboto,sans-serif',
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '17.04px'
      },
      h6: {
        color: '#000000',
        fontFamily: 'Roboto,sans-serif',
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '17px'
      },
      htmlFontSize: 16,
      overline: {
        color: '#000000',
        fontFamily: 'Roboto,sans-serif',
        fontSize: '11px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '15.62px',
        textTransform: 'none'
      },
      
      pxToRem: function noRefCheck() {},
      round: function noRefCheck() {},
      subtitle1: {
        color: '#000000',
        fontFamily: 'Roboto,sans-serif',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '23px'
      },
      subtitle2: {
        color: '#000000',
        fontFamily: 'Roboto,sans-serif',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '23px'
      }
    },
    zIndex: {
      appBar: 1100,
      drawer: 1200,
      mobileStepper: 1000,
      modal: 1300,
      snackbar: 1400,
      speedDial: 1050,
      tooltip: 1500
    }
  }}
>
  <LoginPage onClick={function noRefCheck() {}} />
</ThemeProvider>
  </React.StrictMode>
)

export default Login
