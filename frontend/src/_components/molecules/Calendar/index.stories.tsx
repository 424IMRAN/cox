import { Story, Meta } from '@storybook/react'
import { ThemeProvider } from '@material-ui/core/styles'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import Calendar from '.'
import baseTheme from '../../../core-utils/theme'

export default {
  title: 'molecules/Calendar',
  component: Calendar,
  argTypes: {},
} as Meta

const Template: Story = ({ ...args }) => (
  <ThemeProvider theme={baseTheme}>
    <Calendar
      date={new Date()}
      onDateChange={(date: MaterialUiPickersDate) => {
        console.log(date)
      }}
      {...args}
    />
  </ThemeProvider>
)

export const DefaultCalendar = Template.bind({})
DefaultCalendar.args = {
  date: new Date(),
  onDateChange: (date: MaterialUiPickersDate): void => {
    console.log(date)
  },
}
