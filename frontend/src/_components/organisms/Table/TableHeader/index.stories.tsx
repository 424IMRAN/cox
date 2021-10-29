import { Story, Meta } from '@storybook/react'
import { ThemeProvider } from '@material-ui/core/styles'
import { HeaderGroup } from '.'
import baseTheme from '../../../../core-utils/theme'

export default {
  title: 'Organisms/TableHeader',
  component: HeaderGroup,
  argTypes: {},
} as Meta

const Template: Story = ({ selectedRows, indeterminate, ...args }) => (
  <ThemeProvider theme={baseTheme}>
    <HeaderGroup
      selectedRows={selectedRows}
      indeterminate={indeterminate}
      onClick={() => {}}
      {...args}
    />
  </ThemeProvider>
)

export const IndeterminateHeader = Template.bind({})
IndeterminateHeader.args = {
  indeterminate: true,
  selectedRows: 6,
}

export const AllSelectedHeader = Template.bind({})
AllSelectedHeader.args = {
  indeterminate: false,
  selectedRows: 7,
}
