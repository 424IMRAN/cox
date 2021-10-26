import { Story, Meta } from '@storybook/react'
import { ThemeProvider } from '@material-ui/core/styles'
import VisibilityIcon from '@material-ui/icons/Visibility'
import TextField from '.'
import baseTheme from '../../../core-utils/theme'

export default {
  title: 'atoms/TextField',
  component: TextField,
  argTypes: {
    variant: {
      options: ['filled', 'outlined', 'standard'],
      control: { type: 'select' },
    },
  },
} as Meta

const Template: Story = ({ value, ...args }) => (
  <ThemeProvider theme={baseTheme}>
    <TextField value={value} {...args} />
  </ThemeProvider>
)

export const WithLabel = Template.bind({})
WithLabel.args = {
  variant: 'outlined',
  value: 'Enter Text',
  label: 'Label',
}

export const FilledTextField = Template.bind({})
FilledTextField.args = {
  variant: 'filled',
  value: 'Enter Text',
  label: 'Label',
}

export const WithoutLabel = Template.bind({})
WithoutLabel.args = {
  variant: 'outlined',
  value: 'Enter Text',
}
export const WithPlaceHolder = Template.bind({})
WithPlaceHolder.args = {
  variant: 'outlined',
  placeholder: 'Enter Text',
  label: 'Label',
}

export const WithError = Template.bind({})
WithError.args = {
  variant: 'outlined',
  value: 'some error',
  label: 'Label',
  error: true,
}

export const FullWidthTextField = Template.bind({})
FullWidthTextField.args = {
  variant: 'outlined',
  value: 'Enter Text',
  label: 'Label',
  fullWidth: true,
}

export const WithendAdormentIcon = Template.bind({})
WithendAdormentIcon.args = {
  variant: 'outlined',
  value: 'Enter Text',
  label: 'Label',
  endAdorment: <VisibilityIcon />,
}

export const WithendAdorment = Template.bind({})
WithendAdorment.args = {
  variant: 'outlined',
  value: '23',
  label: 'Label',
  endAdorment: 'kg',
}
