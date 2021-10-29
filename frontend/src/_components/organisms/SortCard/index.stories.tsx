import { ThemeProvider } from '@material-ui/core'
import { Meta, Story } from '@storybook/react'
import SortCard from '.'
import theme from '../../../core-utils/theme'
export default {
  title: 'organisms/SortCard',
  component: SortCard,
} as Meta

const Template: Story = () => (
  <ThemeProvider theme={theme}>
    <SortCard />
  </ThemeProvider>
)

export const Sort = Template.bind({})
