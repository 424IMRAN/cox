import { ThemeProvider } from '@material-ui/core'

import { Meta, Story } from '@storybook/react'
import Divider from '.'
import theme, { COLORS } from '../../../core-utils/theme'

export default {
  title: 'atoms/Divider',
  component: Divider,
} as Meta

const Template: Story = (args) => (
  <ThemeProvider theme={theme}>
    <Divider {...args} />
  </ThemeProvider>
)

export const BasicDivider = Template.bind({})
BasicDivider.args = {
  customStyle: {
    width: theme.spacing(148),
    height: '1px',
    backgroundColor: COLORS.TERTIARY_GREY_900,
    marginTop: theme.spacing(2),
  },
}
