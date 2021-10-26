import { makeStyles } from "@material-ui/core";
import theme from "./theme";
import baseTheme, { COLORS } from "./theme";

export const useGlobalStyles = makeStyles({
  chip: {
    backgroundColor: COLORS.WARNING_300 + " !important",
    padding: "-4px 8px 4px 4px",
    height: "32px",
    width: "87px",
    fontWeight: 600,
    fontSize: "12px !important",
    lineHeight: "18px",
    justifyContent: "flex-start",
    color: COLORS['SECONDARY_COLOR_500'] + " !important",
  },

  gloabalBorderRadius: {
    borderRadius: "4px",
  },

  tooltip: {
    borderRadius:4
  },

  caption2: {
    fontFamily: baseTheme.typography.fontFamily,
    fontWeight: 400,
    fontSize: "12px" + '!important',
    lineHeight: "18px" + '!important',
  },
  statusChipInfo : {
    color: COLORS["INFO_500"] + ' !important',
    backgroundColor: COLORS["INFO_100"] + ' !important',
    height: '26px !important',
    minWidth: '88px !important',
  },
  statusChipSuccess : {
    color: COLORS["SUCCESS_500"] + ' !important',
    backgroundColor: COLORS["SUCCESS_100"] + ' !important',
    height: '26px !important',
    minWidth: '88px !important',
  },
  statusChipWarning : {
    color: COLORS["WARNING_500"] + ' !important',
    backgroundColor: COLORS["WARNING_100"] + ' !important',
    height: '26px !important',
    minWidth: '88px !important',
  },
  statusChipError : {
    color: COLORS["ERROR_500"] + ' !important',
    backgroundColor: COLORS["ERROR_100"] + ' !important',
    height: '26px !important',
    minWidth: '88px !important',
  },
  roundedBox: {
    backgroundColor: COLORS.PRIMARY_COLOR_100,
    border : '1px solid ' + COLORS.PRIMARY_COLOR_500,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(3),
    marginTop: '14px',
  },
  storybookDecorator: {
    padding: 20,
    backgroundColor: '#F7F7F7',
    height:1000,
    width:1000,
  },
});

