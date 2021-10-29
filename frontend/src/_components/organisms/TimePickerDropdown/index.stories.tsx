import TimePicker, { TimePickerProps } from '.'
import { Meta, Story } from '@storybook/react'
import theme from '../../../core-utils/theme'
import { ThemeProvider } from '@material-ui/core/styles'

export default {
  title: 'organisms/TimePicker',
  component: TimePicker,
} as Meta

const Template: Story<TimePickerProps> = ({ styles, changedSoakTime }) => (
  <ThemeProvider theme={theme}>
    <TimePicker styles={styles} changedSoakTime={changedSoakTime} />
  </ThemeProvider>
)

export const TimePickerStory = Template.bind({})
TimePickerStory.args = {
  styles: {
    marginLeft: '18px',
  },
  changedSoakTime: (value: number) => console.log(value),
}
