import SelectButtonComponent, { SelectButtonProps } from './index'
import { Meta, Story } from '@storybook/react'
import theme, { COLORS } from '../../../core-utils/theme'
import { ThemeProvider } from '@material-ui/core/styles'

export default {
  title: 'molecules/Dropdown',
  component: SelectButtonComponent,
} as Meta

const Template: Story<SelectButtonProps> = (args) => (
  <ThemeProvider theme={theme}>
    <SelectButtonComponent {...args}></SelectButtonComponent>
  </ThemeProvider>
)
export const footerSelect = Template.bind({})
footerSelect.args = {
  value: '',
  handleChange: () => {
    console.log('footerSelect drop down changed')
  },
  options: [2, 3, 4, 5, 6, 7, 8, 9, 10],
  variant: 'outlined',
  styles: {
    width: '52px',
    height: theme.spacing(7),
    marginLeft: '18px',
  },
  placeholderValue: undefined,
  placeholderColor: COLORS.TEXT_500,
}
export const actionSelect = Template.bind({})
actionSelect.args = {
  value: '',
  handleChange: () => {
    console.log('actionSelect drop down changed')
  },
  options: ['Discard', 'Trend', 'Non-actionable', 'Ticket'],
  variant: 'outlined',
  styles: {
    width: theme.spacing(43),
    height: theme.spacing(7),

    marginLeft: '18px',
  },
  placeholderValue: 'Select',
  placeholderColor: COLORS.TEXT_500,
}
export const dateSelect = Template.bind({})
dateSelect.args = {
  value: '',
  handleChange: () => {
    console.log('dateSelect drop down changed')
  },
  options: ['01', '02', '03', '04', '05'],
  variant: 'outlined',
  styles: {
    width: '54px',
    height: theme.spacing(7),

    marginLeft: '18px',
  },
  placeholderValue: 'DD',
  placeholderColor: COLORS.TEXT_500,
}
export const timeSelect = Template.bind({})
timeSelect.args = {
  value: '',
  handleChange: () => {
    console.log('timeSelect drop down changed')
  },
  options: [
    '10:00am (0 mins)',
    '10:15am (15 mins)',
    '10:30am (30 mins)',
    '10:45am (45 mins)',
  ],
  variant: 'filled',
  styles: {
    width: '214px',
    height: theme.spacing(10),
    border: `1px solid ${COLORS.TRANSPARENT_GREY_500}`,
    borderRadius: theme.spacing(2),

    marginLeft: '18px',
  },
  placeholderValue: 'Pick from list',
  placeholderColor: COLORS.TEXT_700,
}
