import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import PropTypes from 'prop-types'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import { makeStyles } from '@material-ui/core'

type CalendarProps = {
  date: Date
  onDateChange: (date: MaterialUiPickersDate) => void
  [restProps: string]: unknown
}

const useStyles = makeStyles({
  root: {
    '.MuiTypography-root': {
      fontWeight: 400,
    },
  },
})
const Calendar = ({ date, onDateChange, ...restProps }: CalendarProps) => {
  const classes = useStyles()
  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          className={classes.root}
          autoOk
          variant="static"
          openTo="date"
          value={date}
          onChange={onDateChange}
          disableToolbar
          {...restProps}
          style={{ fontWeight: 400 }}
        />
      </MuiPickersUtilsProvider>
    </>
  )
}

Calendar.propTypes = {
  date: PropTypes.instanceOf(Date),
  onDateChange: PropTypes.func,
}
Calendar.defaultProps = {
  date: new Date(),
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onDateChange: () => {},
}

export default Calendar
