/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid } from '@material-ui/core'
import { CSSProperties, useState } from 'react'
import theme, { COLORS } from '../../../core-utils/theme'
import SelectComponent from '../../molecules/Dropdown'

export type TimePickerProps = {
  styles?: CSSProperties | undefined
  changedSoakTime: (value: number) => void
}

const options = (maxRange: number) => {
  const range = []
  for (let i = 0; i <= maxRange; i += 1) {
    if (i < 10) range.push(`0${i}`)
    else range.push(i)
  }
  return range
}

const TimePicker: React.FC<TimePickerProps> = ({ styles, changedSoakTime }) => {
  const [soakTime, setSoakTime] = useState(['', '', ''])

  const handleChange = (position: number, event: any) => {
    const setNewSoakTime = soakTime.map((time, index) => {
      if (index === position) return event.target.value
      return soakTime[index]
    })
    setSoakTime(setNewSoakTime)

    const tempSoakTime =
      Number(setNewSoakTime[0]) * 86400 +
      Number(setNewSoakTime[1]) * 3600 +
      Number(setNewSoakTime[2]) * 60
    changedSoakTime(tempSoakTime)
  }
  return (
    <Grid
      container
      style={{ boxSizing: 'border-box' }}
      data-testid="timePickerTest"
    >
      <Grid item style={styles}>
        <SelectComponent
          value={soakTime[0]}
          handleChange={(event: any) => handleChange(0, event)}
          options={options(99)}
          variant="outlined"
          styles={{
            width: '54px',
            height: theme.spacing(7),
          }}
          placeholderValue="DD"
          placeholderColor={COLORS.TEXT_500}
          menuItemsStyle={{ maxHeight: '260px', maxWidth: '80px' }}
        />
      </Grid>
      <Grid item style={{ marginLeft: '5px' }}>
        <SelectComponent
          value={soakTime[1]}
          handleChange={(event: any) => handleChange(1, event)}
          options={options(23)}
          variant="outlined"
          styles={{
            width: '54px',
            height: theme.spacing(7),
          }}
          placeholderValue="HH"
          placeholderColor={COLORS.TEXT_500}
          menuItemsStyle={{ maxHeight: '260px', maxWidth: '80px' }}
        />
      </Grid>
      <Grid item style={{ marginLeft: '5px' }}>
        <SelectComponent
          value={soakTime[2]}
          handleChange={(event: any) => handleChange(2, event)}
          options={options(59)}
          variant="outlined"
          styles={{
            width: '54px',
            height: theme.spacing(7),
          }}
          placeholderValue="MM"
          placeholderColor={COLORS.TEXT_500}
          menuItemsStyle={{ maxHeight: '260px', maxWidth: '80px' }}
        />
      </Grid>
    </Grid>
  )
}

export default TimePicker
