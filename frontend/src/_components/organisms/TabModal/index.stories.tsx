import { ThemeProvider } from '@material-ui/core'

import { Meta, Story } from '@storybook/react'
import HistoryTabModal from '.'

import { TabModal } from '../../../constants'
import theme from '../../../core-utils/theme'
export default {
  title: 'organisms/TabModal',
  component: HistoryTabModal,
} as Meta

const Template: Story = ({ tabModel, isOpen, modalTitle }) => (
  <ThemeProvider theme={theme}>
    <HistoryTabModal
      tabModel={tabModel}
      isOpen={isOpen}
      modalTitle={modalTitle}
    />
  </ThemeProvider>
)

export const Search = Template.bind({})
Search.args = {
  tabModel: TabModal,
  isOpen: true,
  modalTitle: 'Change History',
}
