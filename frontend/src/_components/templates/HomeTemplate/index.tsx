/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import baseTheme, { COLORS } from '../../../core-utils/theme'
import theme from '../../../core-utils/theme'

const useStyles = makeStyles(() => ({
  header: {
    minHeight: '80px',
    width: '100%',
    backgroundColor:COLORS.TEXT_700
  },
  body: {
    minHeight: '688px',
    width: '100%',
    backgroundColor:COLORS.TEXT_500
  },
  root: {
    padding:theme.spacing(2)
  },
}))
export interface HomeTemplateProps {
  header: React.ReactChild
  body: React.ReactChild
}
const HomeTemplate: React.FC<HomeTemplateProps> = (props) => {
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <Grid >
        <Grid item className={classes.header}>
          {props.header}
        </Grid>
        <Grid item className={classes.body}>
          {props.body}
        </Grid>
      </Grid>
    </Paper>
  )
}

export default HomeTemplate
