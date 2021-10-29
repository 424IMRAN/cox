import { ThemeProvider } from '@material-ui/core'

import { Meta, Story } from '@storybook/react'
import SearchCard from '.'
import { SearchResults } from '../../../constants'
import baseTheme from '../../../core-utils/theme'
export default {
  title: 'organisms/SearchCard',
  component: SearchCard,
} as Meta

const Template: Story = ({
  searchedValue,
  searchResults,
  handleAdvancedSearch,
}) => (
  <ThemeProvider theme={baseTheme}>
    <SearchCard
      searchResults={searchResults}
      searchedValue={searchedValue}
      handleAdvancedSearch={handleAdvancedSearch}
    />
  </ThemeProvider>
)

export const Search = Template.bind({})
Search.args = {
  searchedValue: 'Alert',
  searchResults: SearchResults,
  handleAdvancedSearch: () => {
    console.log('Advanced Search Clicked')
  },
}
