import { createTheme } from '@material-ui/core/styles'
import '../index.css'

export const pxToRem = (fontSize: number) => {
  return `${fontSize / 16}rem`
}

export interface ColorMap {
  [name: string]: string
}

export const COLORS: ColorMap = {
  PRIMARY_COLOR_100: '#009AE0',
  PRIMARY_COLOR_300: '#00A846',
  PRIMARY_COLOR_500: '#2196F3',

  SECONDARY_COLOR_50: '#285A93',
  SECONDARY_COLOR_100: '#127C65',
  SECONDARY_COLOR_300: '#028399',
  SECONDARY_COLOR_500: '#828E96',

  TERTIARY_100: '#FC9318',
  TERTIARY_300: '#CD0000',
  TERTIARY_500: '#7D55A0',

  TERTIARY_GREY_50: '#2E3F50',
  TERTIARY_GREY_100: '#435C75',
  TERTIARY_GREY_300: '#52708F',
  TERTIARY_GREY_600: '#7D99B5',
  TERTIARY_GREY_700: '#9AADC1',
  TERTIARY_GREY_900: '#CCD6E2',

  TRANSPARENT_GREY_100: '#DFE3EB',
  TRANSPARENT_GREY_300: '#EAF0F6',
  TRANSPARENT_GREY_500: '#F5F8FA',

  TEXT_100: '#000000',
  TEXT_500: '#455051',
  TEXT_700: '#B9C9D2',
  TEXT_900: '#FFFFFF',
}

const defaultSpacing = 4

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.TERTIARY_GREY_50,
    },
    secondary: {
      main: COLORS.TERTIARY_GREY_600,
    },
    info: {
      main: COLORS.TEXT_500,
    },
    error: {
      main: COLORS.TERTIARY_300,
    },
  },
  spacing: defaultSpacing,
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
    h1: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '28px',
      lineHeight: '40px',
      color: COLORS.TEXT_100,
    },
    h2: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '24px',
      lineHeight: '24px',
      color: COLORS.TEXT_100,
    },
    h3: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '20px',
      lineHeight: '28px',
      color: COLORS.TEXT_100,
    },
    h4: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '18px',
      lineHeight: '25.56px',
      color: COLORS.TEXT_100,
    },

    subtitle1: {
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '23px',
      color: COLORS.TEXT_100,
    },
    subtitle2: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '23px',
      color: COLORS.TEXT_100,
    },
    body1: {
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: '20px',
      color: COLORS.TEXT_100,
    },
    body2: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '20px',
      color: COLORS.TEXT_100,
    },
    h5: {
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '12px',
      lineHeight: '17.04px',
      color: COLORS.TEXT_100,
    },
    h6: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '17px',
      color: COLORS.TEXT_100,
    },
    overline: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '11px',
      lineHeight: '15.62px',
      color: COLORS.TEXT_100,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 4,
  },
  overrides: {
    MuiPickersCalendarHeader: {
      switchHeader: {
        justifyContent: 'center',
      },
      transitionContainer: {
        width: '36%',
        '& p': {
          fontWeight: 400,
        },
      },
    },
    MuiCheckbox: {
      root: {
        color: COLORS.TERTIARY_GREY_700,
        margin: '0px',
        padding: '0px',
        borderRadius: '0px',
        boxSizing: 'content-box',
        '& svg': {
          width: '16px',
          height: '16px',
          margin: '0px',
          padding: '0px',
        },

        '&$checked': {
          '&.Mui-checked': {
            color: COLORS.TERTIARY_GREY_50,
          },
        },
        '&:hover': {
          backgroundColor: COLORS.TEXT_900,
          boxShadow: 'none',
        },
      },
      indeterminate: {
        '& img': {
          backgroundColor: COLORS.PRIMARY_COLOR_100,
          color: COLORS.TRANSPARENT_GREY_300,
        },
      },
    },
    MuiRadio: {
      root: {
        color: COLORS.TERTIARY_GREY_900,
        '& svg': {
          width: '24px',
          height: '24px',
        },
        margin: '0px',
        padding: '0px',
        '&$checked': {
          '& svg': {
            width: '24px',
            height: '24px',
          },
          '&.Mui-checked': {
            color: COLORS.TERTIARY_GREY_50,
          },
          '&:hover': {
            backgroundColor: COLORS.TEXT_900,
          },
        },
        '&:hover': {
          backgroundColor: COLORS.TEXT_900,
        },
      },
    },
    MuiSelect: {
      outlined: {
        padding: '4px',
        borderRadius: '4px',
        boxSizing: 'border-box',
        borderColor: COLORS.TERTIARY_GREY_700,
      },
      filled: {
        padding: '12px',
        borderRadius: '8px',
        boxSizing: 'border-box',
        background: COLORS.TRANSPARENT_GREY_500,
      },
    },
    MuiList: {
      padding: {
        paddingTop: '0px',
        paddingBottom: '0px',
      },
    },
    MuiListItem: {
      gutters: {
        paddingLeft: '12px',
      },
    },
    MuiPopover: {
      paper: {
        marginTop: '4px',
      },
    },
    MuiMenu: {
      paper: {
        margin: '0px',
        padding: '0px',
      },
    },
    MuiAppBar: {
      colorDefault: {
        backgroundColor: COLORS.GAMMA_WHITE,
      },
    },
    MuiCard: {
      root: {
        borderRadius: defaultSpacing,
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: defaultSpacing,
      },
    },
    MuiChip: {
      root: {
        borderRadius: defaultSpacing,
      },
      deletable: {
        borderRadius: '100px',
      },
      label: {
        padding: '4px 8px 4px 4px',
      },
    },
    MuiButton: {
      root: {
        height: '42px',
        borderRadius: defaultSpacing,
        textTransform: 'none',
      },
      contained: {
        backgroundColor: COLORS.PRIMARY_COLOR_500,

        color: COLORS.GAMMA_WHITE,

        boxShadow: 'none',
        '&:hover': {
          backgroundColor: COLORS.PRIMARY_COLOR_300,
          boxShadow: 'none',
        },
        '&:disabled': {
          backgroundColor: COLORS.PRIMARY_COLOR_100,
          color: COLORS.GAMMA_WHITE,
        },
        minWidth: '74px',
        minHeight: '32px',
        padding: '8px 16px',
      },
      outlined: {
        color: COLORS.TEXT_500,
        boxShadow: 'none',

        boxSizing: 'border-box',
        '&:hover': {
          backgroundColor: COLORS.SECONDARY_COLOR_50,
          color: COLORS.GAMMA_WHITE,

          boxShadow: 'none',
        },
        '&:disabled': {
          backgroundColor: COLORS.SECONDARY_COLOR_100,
          color: COLORS.GAMMA_WHITE,
        },
        minWidth: '74px',
        minHeight: '32px',
        padding: '8px 16px',

        borderColor: COLORS.SECONDARY_COLOR_500,
      },

      text: {
        color: COLORS.ALPHA_PRIMARY_GREEN_500,
        borderRadius: 'null',
        textTransform: 'none',
        minHeight: '14px',
        minWidth: '32px',
        padding: '8px 16px',

        '&:hover': {
          color: COLORS.ALPHA_PRIMARY_GREEN_700,
        },
        '&:disabled': {
          color: COLORS.ALPHA_PRIMARY_GREEN_100,
        },
      },

      textSizeSmall: {
        minHeight: '14px',
        minWidth: '39px',
        padding: '8px 16px',
      },

      textSizeLarge: {
        minHeight: '42px',
        minWidth: '74px',
        padding: '8px 16px',
      },

      outlinedSizeSmall: {
        minWidth: '74px',
        minHeight: '28px',
        padding: '8px 16px',
      },
      outlinedSizeLarge: {
        minWidth: '74px',
        minHeight: '42px',
        padding: '13px 16px',
      },

      containedSizeSmall: {
        minWidth: '74px',
        minHeight: '28px',
        padding: '8px 16px',
      },
      containedSizeLarge: {
        minWidth: '74px',
        minHeight: '42px',
        padding: '13px 16px',
      },
      sizeLarge: {
        height: '46px',
      },
    },
    MuiOutlinedInput: {
      root: {
        '& fieldset': {
          borderColor: COLORS.TERTIARY_GREY_700,
        },
        '&.Mui-focused fieldset': {
          borderColor: `${COLORS.INFO_500} !important`,
        },
        '&:hover': {
          borderColor: COLORS.TERTIARY_GREY_700,
        },
        '& svg': {
          boxSizing: 'border-box',
          fill: COLORS.TERTIARY_GREY_300,
        },
        height: '40px',
      },
    },
    MuiFilledInput: {
      root: {
        backgroundColor: COLORS.TRANSPARENT_GREY_500,
        '&:hover': {
          backgroundColor: COLORS.TRANSPARENT_GREY_500,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: COLORS.TRANSPARENT_GREY_500,
          },
        },
        '&.Mui-focused': {
          backgroundColor: COLORS.TRANSPARENT_GREY_500,
        },
        '& svg': {
          fill: COLORS.TERTIARY_GREY_100,
        },
        height: '40px',
      },
      input: {
        padding: '18.5px 14px;',
      },
      underline: {
        '&&&:before': {
          borderBottom: 'none',
          borderWidth: 0,
        },
        '&&:after': {
          borderBottom: 'none',
          borderWidth: 0,
        },
      },
    },
    MuiSwitch: {
      colorPrimary: {
        '&$checked': {
          color: COLORS.PRIMARY_COLOR_500,
        },
        '&$checked + $track': {
          backgroundColor: COLORS.PRIMARY_COLOR_500,
        },
      },
    },
    MuiDialog: {
      paper: {
        borderRadius: '16px',
      },
    },
    MuiDialogContent: {
      root: {
        margin: '4px',
      },
    },
    MuiDialogActions: {
      root: {
        margin: '0px 16px 4px 0px',
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 0,
      },
    },
    MuiListItemText: {},
  },
})
export default theme
