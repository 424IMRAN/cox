import { ThemeProvider } from '@material-ui/core'
import { SavedFilters } from '../../../constants'
import { Meta, Story } from '@storybook/react'
import FilterList from '.'
import theme from '../../../core-utils/theme'

export default {
  title: 'organisms/FilterList',
  component: FilterList,
} as Meta

const Template: Story = ({ savedFilters, isSaved }) => (
  <ThemeProvider theme={theme}>
    <FilterList savedFilters={savedFilters} isSaved={isSaved} />
  </ThemeProvider>
)

export const WithSavedFilters = Template.bind({})
WithSavedFilters.args = {
  savedFilters: SavedFilters,
  isSaved: false,
}
export const WithoutSavedFilters = Template.bind({})
WithoutSavedFilters.args = {
  savedFilters: SavedFilters,
  isSaved: true,
}
