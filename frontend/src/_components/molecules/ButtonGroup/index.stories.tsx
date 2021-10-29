import { Story, Meta } from '@storybook/react'
import { ThemeProvider } from '@material-ui/core/styles'
import ButtonGroup from '.'
import baseTheme from '../../../core-utils/theme'

export default {
  title: 'molecules/ButtonGroup',
  component: ButtonGroup,
  argTypes: {},
} as Meta

const Template: Story = ({ ...args }) => (
  <ThemeProvider theme={baseTheme}>
    <ButtonGroup labels={[]} activeIndex={0} {...args} />
  </ThemeProvider>
)

export const DefaultButtonGroup = Template.bind({})
DefaultButtonGroup.args = {
  labels: ['A - Z', 'Z - A'],
  activeIndex: 0,
}
