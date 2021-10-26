import { Story, Meta } from '@storybook/react'
import { ThemeProvider } from '@material-ui/core/styles'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import List from '.'
import baseTheme from '../../../core-utils/theme'

export default {
  title: 'molecules/ListField',
  component: List,
  argTypes: {},
} as Meta

const Template: Story = ({ list, ...args }) => (
  <ThemeProvider theme={baseTheme}>
    <List list={list} {...args} />
  </ThemeProvider>
)

export const CheckedList = Template.bind({})
CheckedList.args = {
  list: [
    { checked: true, value: 'hello' },
    { checked: false, value: 'test' },
    { checked: true, value: 'world' },
  ],
  checkedList: true,
}

export const BasicList = Template.bind({})
BasicList.args = {
  list: [{ value: 'hello' }, { value: 'test' }, { value: 'world' }],
}

export const ListWithRightIcon = Template.bind({})
ListWithRightIcon.args = {
  list: [
    { checked: true, value: 'hello' },
    { checked: false, value: 'test' },
    { checked: true, value: 'world' },
  ],
  rightIcon: <MoreHorizIcon />,
}
