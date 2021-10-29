import { AppBar } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import ImageComponent from '../../atoms/CoxLogo'
import baseTheme, { COLORS } from '../../../core-utils/theme'
import SvgIcon from '../../atoms/svgIcons'

type HeaderProps = {
  isAdmin: boolean
  image: string
  settingIcon: string
}

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: COLORS.TEXT_900,
    boxShadow: '0px 4px 18px 0px #0000000D',
    height: baseTheme.spacing(20),
    paddingTop: baseTheme.spacing(6),
    paddingBottom: baseTheme.spacing(6),
    paddingLeft: baseTheme.spacing(7.5),
    paddingRight: baseTheme.spacing(7.5),
    boxSizing: 'border-box',
  },
  settings: {
    paddingRight: '14.36px',
  },
}))

const Header: React.FC<HeaderProps> = ({ isAdmin, image, settingIcon }) => {
  const classes = useStyles()

  return (
    <AppBar className={classes.header} data-testid="appBar">
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <ImageComponent
            alt="COX Logo"
            imageSrc={image}
            styles={{
              width: '95px',
              height: baseTheme.spacing(8),
              display: 'block',
            }}
          />
        </Grid>
        <Grid item>
          {isAdmin ? (
            <span className={classes.settings}>
              <SvgIcon icon={settingIcon} />
            </span>
          ) : null}
        </Grid>
      </Grid>
    </AppBar>
  )
}

export default Header
