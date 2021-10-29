/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react'
import { Card, CardContent, Grid, makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import Divider from '../../atoms/Divider'
import theme, { COLORS } from '../../../core-utils/theme'
import CheckBoxComponent from '../../atoms/CheckBox'
import Typography from '../../atoms/Typography'
import ButtonComponent from '../../molecules/Button'
import Icon from '../../atoms/materialIcons'
import SelectComponent from '../../molecules/Dropdown'
import AdvanceSearchCard from '../AdvancedSearch'
import TextField from '../../atoms/TextField'
type addNew = {
  id:string
  onClick?:(id:string)=>void
}

const useStyles = makeStyles({
  grid: {
    display: 'flex',
  },
  icon: {
    paddingTop: '20px',
    cursor:"pointer",
    paddingLeft:"20px"
  },

  typo:
  {
    paddingTop:"20px",
    paddingLeft:"20px",
    paddingRight:"10px",
    
  },
  textField:
  {
    paddingTop:"10px",
    paddingLeft:"12px"
  }
})

const AddNew = ({id,onClick}:addNew) => {
  const classes = useStyles()
  
  return (
    <Grid>
          <Grid className={classes.grid}>
            <SelectComponent
              options={['AND', 'OR']}
              styles={{
                width: '108px',
                height: theme.spacing(10),
                border: `1px solid ${COLORS.TRANSPARENT_GREY_500}`,
                borderRadius: theme.spacing(2),

                marginLeft: '0px',
                marginTop: '10px',
              }}
              variant="filled"
              placeholderValue="AND"
              placeholderColor={COLORS.TEXT_700}
              value={''}
              handleChange={function (event: any): void {
                console.log('timeSelect drop down changed')
              }}
              disable={false}
            />
            <TextField variant="filled"  customStyle={classes.textField}/>
            <Typography className={classes.typo}>in</Typography>
            <SelectComponent
              options={[ 'Event ID',
              'Service Name',
              'NE Type',
              'Alert Group',
              'Type',
              'Condition',
              'Severity',
              'Agent Name',
              'Vandor Name',]}
              styles={{
                width: '190px',
                height: theme.spacing(10),
                border: `1px solid ${COLORS.TRANSPARENT_GREY_500}`,
                borderRadius: theme.spacing(2),

                marginLeft: '5px',
                marginTop: '10px',
              }}
              variant="filled"
              placeholderValue="Any Field"
              placeholderColor={COLORS.TEXT_700}
              value={''}
              handleChange={function (event: any): void {
                console.log('timeSelect drop down changed')
              }}
              disable={false}
            />
            <Icon icon="close" className={classes.icon} onClick={()=>onClick!(id)}/>
          </Grid>
          </Grid>
  )
}

export default AddNew
