import TimePicker, { TimePickerProps } from '.'
import { Meta, Story } from '@storybook/react'
import theme from '../../../core-utils/theme'
import { ThemeProvider } from '@material-ui/core/styles'

export default {
  title: 'molecules/TimePicker',
  component: TimePicker,
  argTypes: {
    handleChange: { action: 'clicked' },
  },
} as Meta

const Template: Story<TimePickerProps> = ({ handleChange }) => (
  <ThemeProvider theme={theme}>
    <TimePicker handleChange={handleChange} />
  </ThemeProvider>
)

export const TimePickerStory = Template.bind({})
