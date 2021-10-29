/* eslint-disable react/jsx-no-bind */
import { makeStyles } from '@material-ui/core/styles'
import { Card, Grid } from '@material-ui/core'
import { Divider } from '@material-ui/core'
import React from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import Typography from '../../atoms/Typography'
import theme, { COLORS } from '../../../core-utils/theme'
import Icon from '../../atoms/materialIcons'
import Calendar from '../../molecules/Calendar'
import SelectComponent from '../../molecules/Dropdown'
import ButtonComponent from '../../molecules/Button'
import clsx from 'clsx'
import SvgIcon from '../../atoms/svgIcons'
import line from '../../../assets/Line 6.svg'
const useStyles = makeStyles(() => ({
  root: {
    width: '1000px',
    height: '408px',
    borderRadius: theme.spacing(4),
  },
  root1: {
    paddingBottom: theme.spacing(5),
    paddingLeft: theme.spacing(8.5),
  },
  icon: {
    paddingRight: '13px',
    paddingTop: theme.spacing(7.5),
    paddingBottom: theme.spacing(6.5),
    paddingLeft: theme.spacing(7),
  },
  grid: {
    display: 'flex',
    marginLeft: '10px',
  },
  typo: {
    paddingTop: theme.spacing(8),
    paddingRight: theme.spacing(180),
    paddingBottom: theme.spacing(5),
    fontSize: '24px',
    fontWeight: theme.typography.fontWeightRegular,
  },
  icon2: {
    paddingTop:theme.spacing(6.5),
    paddingLeft: '35.43px',
  },
  div: {
    Top: '69px',
    height: '1px',
    backgroundColor: COLORS.TRANSPARENT_GREY_300,
  },
  select: {
    fontFamily: theme.typography.fontFamily,
    fontStyle: 'normal',
    fontSize: '14px',
    fontWeight: theme.typography.fontWeightRegular,
    paddingTop: theme.spacing(2.5),
    paddingLeft: theme.spacing(7),
    paddingBottom: theme.spacing(5),
  },
  label: {
    paddingLeft: theme.spacing(2.5),
    fontFamily: theme.typography.fontFamily,
    fontSize: '16px',
    lineHeight: '23px',
    fontStyle: 'normal',
    fontWeight: theme.typography.fontWeightRegular,
    paddingRight: '43.5px',
  },
  time: {
    paddingBottom:theme.spacing(5),
    paddingLeft: theme.spacing(6),
    paddingTop: '13px',
    color: COLORS.TEXT_500,
  },
  button: {
    width:theme.spacing(28.5),
    height:theme.spacing(10),
    marginTop: theme.spacing(20),
    marginLeft: theme.spacing(4.5),
    backgroundColor: COLORS.TERTIARY_GREY_50,
  },
  button1: {
    width:theme.spacing(28.5),
    height:theme.spacing(10),
    marginTop: theme.spacing(20),
    marginLeft: theme.spacing(4.5),
  },
  disable: {
    opacity: 0.5,
    pointerEvents: 'none',
  },
}))
const ScheduledCard = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState('default')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log((event.target as HTMLInputElement).value)
    setValue((event.target as HTMLInputElement).value)
  }
  const [dropdownValue2, setDropdownValue2] = React.useState('')

  const [dropdownValue1, setDropdownValue1] = React.useState('')

  const[calendarDate,setCalendarDate]=React.useState(new Date())

  return (
    <Card className={classes.root}>
      <Grid className={classes.grid}>
        <Icon icon="keyboard_arrow_left_outlined" className={classes.icon} />
        <Typography  className={classes.typo}>
          Schedule
        </Typography>
        <Icon
          icon="close"
          className={classes.icon2}
          iconColor={COLORS.TEXT_700}
        />
      </Grid>
      <Grid>
        <Divider className={classes.div} />
        {/* <Divider></Divider> */}
      </Grid>
      <Grid className={classes.grid}>
        <Grid>
          <FormControl component="fieldset">
            <FormLabel component="legend" className={classes.select}>
              Select
            </FormLabel>
            <RadioGroup
              aria-label="schedule1"
              name="schedule"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="default"
                control={<Radio />}
                label="Default (3:00 AM Sept 16, 2021, CST) "
                classes={{ label: classes.label, root: classes.root1 }}
                id="1"
              />
              <FormControlLabel
                value="immediately"
                control={<Radio />}
                label="Immediately"
                classes={{ label: classes.label, root: classes.root1 }}
                id="2"
              />
              <FormControlLabel
                value="date and time"
                control={<Radio />}
                label="Pick date and time"
                classes={{ label: classes.label, root: classes.root1 }}
                id="3"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
          <SvgIcon icon={line}/>
        <Grid>
          <div
            className={clsx(value !== 'date and time' ? classes.disable : null)}
          >
            <Calendar
               date={calendarDate}
              onDateChange={(date: MaterialUiPickersDate): void => {
                console.log(date)
                setCalendarDate(date)
              }}
            />
          </div>
        </Grid>
        <Grid>
          <Grid
            className={clsx(value !== 'date and time' ? classes.disable : null)}
          >
            <Typography className={classes.time} variant="body2">Time</Typography>
            <SelectComponent
              options={[
                '10:00am (0 mins)',
                '10:15am (15 mins)',
                '10:30am (30 mins)',
                '10:45am (45 mins)',
              ]}
              variant="filled"
              placeholderValue="pick from list"
              placeholderColor={COLORS.TEXT_700}
              value={dropdownValue1}
              handleChange={function (event: { target: { value: React.SetStateAction<string> } }): void {
                // console.log('timeselect drop down ')
                return setDropdownValue1(event.target.value)
              }}
              disable={value !== 'date and time' ? true : false}
              styles={{
                width: '240px',
                height: theme.spacing(10),
                border: `1px solid ${COLORS.TRANSPARENT_GREY_500}`,
                borderRadius: theme.spacing(2),
                marginLeft: '18px',
              }}
            />
            <Typography className={classes.time} variant="body2">Time Zone</Typography>
            <SelectComponent
              options={[
                '(GMT+05:30) IST - Kolkata',
                '(GMT+05:00) French Southern',
                '(GMT+05:00) Maldives Time ',
                '(GMT+04:30) Iran Time',
              ]}
              variant="filled"
              placeholderValue="pick from list"
              placeholderColor={COLORS.TEXT_700}
              value={dropdownValue2}
              handleChange={function (event: { target: { value: React.SetStateAction<string> } }): void {
                // console.log('timeselect drop down ')
                return setDropdownValue2(event.target.value)
              }}
              disable={value !== 'date and time' ? true : false}
              //disable={false}
              styles={{
                width: '240px',
                height: theme.spacing(10),
                border: `1px solid ${COLORS.TRANSPARENT_GREY_500}`,
                borderRadius: theme.spacing(2),
                marginLeft: '18px',
              }}
            />
            </Grid>
            <Grid>
              <ButtonComponent
                // eslint-disable-next-line react/no-children-prop
                children="Save Draft"
                variant="outlined"
                className={classes.button1}
              />
              <ButtonComponent
                // eslint-disable-next-line react/no-children-prop
                children="Schedule"
                variant="contained"
                className={classes.button}
                color={COLORS.TEXT_900}
              />
            </Grid>
          </Grid>
        </Grid>
    </Card>
  )
}

export default ScheduledCard
