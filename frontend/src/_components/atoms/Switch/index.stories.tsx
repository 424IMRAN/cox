import { Story, Meta } from '@storybook/react'
import { ThemeProvider } from '@material-ui/core/styles'
import Switch from '.'
import baseTheme from '../../../core-utils/theme'

export default {
  title: 'atoms/Switch',
  component: Switch,
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'default'],
      control: { type: 'select' },
      checked: {
        options: [true, false],
        control: { type: 'radio' },
      },
    },
  },
} as Meta

const Template: Story = ({ ...args }) => (
  <ThemeProvider theme={baseTheme}>
    <Switch {...args} />
  </ThemeProvider>
)

export const DefaultSwitch = Template.bind({})
DefaultSwitch.args = {
  checked: false,
}

export const PrimaryColorSwitch = Template.bind({})
PrimaryColorSwitch.args = {
  checked: true,
  color: 'primary',
}

export const DisabledSwitch = Template.bind({})
DisabledSwitch.args = {
  checked: true,
  disabled: true,
}
