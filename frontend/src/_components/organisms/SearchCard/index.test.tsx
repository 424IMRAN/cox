// eslint-disable-next-line import/no-extraneous-dependencies
import { screen, render, fireEvent } from '@testing-library/react'
import SearchResult from '.'
import { SearchResults } from '../../../constants'

test('search result card should be displayed', () => {
  render(<SearchResult searchedValue="Alert" searchResults={SearchResults} />)
  const Search = screen.getByTestId('searchCard')
  expect(Search).toBeVisible()
})

test('checkbox should be clicked', () => {
  render(<SearchResult searchedValue="Alert" searchResults={SearchResults} />)
  const checkboxes = screen.getAllByRole('checkbox')
  checkboxes.forEach((checkbox) => fireEvent.click(checkbox))
})
test('button should be clicked', () => {
  render(<SearchResult searchedValue="Alert" searchResults={SearchResults} />)
  const buttons = screen.getAllByRole('button')
  buttons.forEach((button) => fireEvent.click(button))
})

test('grid should be hovered ', () => {
  render(<SearchResult searchedValue="Alert" searchResults={SearchResults} />)
  const hover = screen.getByTestId('mouseEnter0')
  fireEvent.mouseEnter(hover)
  fireEvent.mouseOut(hover)
})
