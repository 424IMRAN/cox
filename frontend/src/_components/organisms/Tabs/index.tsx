import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { Grid, MenuItem, MenuList } from '@material-ui/core'
import { NavMenuTitles } from '../../../constants'
import Typography from '../../atoms/Typography'
import { title } from 'process'
import theme, { COLORS } from '../../../core-utils/theme'

const useStyles = makeStyles({
  root: {
    '& .Mui-selected': {
      fontWeight:"bold",
      color:COLORS.TEXT_100
    },
  },
  typo:
  {
    fontFamily: theme.typography.fontFamily,
    fontSize:"16px",
    fontStyle:"normal",
    textTransform:"none",
    fontWeight:"normal",
    textAlign:"center",
    color:COLORS.TEXT_500,
  }
})

export default function CenteredTabs() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }
  const tabList=NavMenuTitles.map((title)=><Tab label={title.title}  className={classes.typo}/>)
  return (
    <Grid>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        className={classes.typo}
        classes={{ root: classes.root }}
      >
        {tabList}
      </Tabs>
    </Grid>
  )
}
