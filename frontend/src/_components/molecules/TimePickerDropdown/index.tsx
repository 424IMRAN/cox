import { Grid } from '@material-ui/core'
import theme, { COLORS } from '../../../core-utils/theme'
import SelectComponent from '../Dropdown'

export type TimePickerProps = {
  handleChange: () => void
}

const TimePicker: React.FC<TimePickerProps> = ({ handleChange }) => {
  return (
    <Grid
      container
      style={{ boxSizing: 'border-box' }}
      data-testid="timePickerTest"
    >
      <Grid item>
        <SelectComponent
          value=""
          handleChange={handleChange}
          options={['01', '02', '03', '04']}
          variant="outlined"
          styles={{
            width: '54px',
            height: theme.spacing(7),
          }}
          placeholderValue="DD"
          placeholderColor={COLORS.TEXT_500}
        />
      </Grid>
      <Grid item style={{ marginLeft: '5px' }}>
        <SelectComponent
          value=""
          handleChange={handleChange}
          options={['01', '02', '03', '04']}
          variant="outlined"
          styles={{
            width: '54px',
            height: theme.spacing(7),
          }}
          placeholderValue="HH"
          placeholderColor={COLORS.TEXT_500}
        />
      </Grid>
      <Grid item style={{ marginLeft: '5px' }}>
        <SelectComponent
          value=""
          handleChange={handleChange}
          options={['01', '02', '03', '04']}
          variant="outlined"
          styles={{
            width: '54px',
            height: theme.spacing(7),
          }}
          placeholderValue="MM"
          placeholderColor={COLORS.TEXT_500}
        />
      </Grid>
    </Grid>
  )
}

export default TimePicker
