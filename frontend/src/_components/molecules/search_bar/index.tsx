import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, alpha, Theme, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Icon from '../../atoms/materialIcons'
import { COLORS } from '../../../core-utils/theme';
import Typography  from '../../atoms/Typography'
import search from '../../../assets/Vector.svg'
import SvgIcon from '../../atoms/svgIcons';

export interface defaultProps {
  children?: string
  className?: string
  color?: string
  variant?: 'outlined' | 'contained'
  iconColor?: string
  backgroundColor?: string
  disableRipple?: boolean
  width?: string
  height?: string
  onClick?: () => React.MouseEventHandler<HTMLButtonElement>;
}
const useStyles = makeStyles((theme:Theme) =>
  createStyles({
    // root: {
    //   borderColor:"red",
    // },
    search: {
      position: 'relative',
      borderRadius: "12px",
      backgroundColor: COLORS.TRANSPARENT_GREY_500,
      '&:hover': {
        backgroundColor:COLORS.TRANSPARENT_GREY_500,
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      display: 'flex',
      float:"right",
      color:"red"
    },
    Icon:
    {
      color:COLORS.TERTIARY_GREY_600,
      paddingRight:"16px",
       paddingTop:"10px",
      paddingBottom:"9.41px"
    },
    inputInput: {
      paddingTop:"9.67px",
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '50ch',
        },
      },
    },
})
);

export const SearchAppBar: React.FC<defaultProps> = (children) => {
  const classes = useStyles();

  return (
       <Toolbar>
          <div className={classes.search}>
            <InputBase 
              placeholder="Search..."
              classes={{
                input: classes.inputInput,
              }}
            />
            <div className={classes.searchIcon}> 
            <SvgIcon  icon={search} className={classes.Icon} width="16.93px" height="16.93px"  />
            </div>
          </div>
        </Toolbar>
  );
}
export default SearchAppBar