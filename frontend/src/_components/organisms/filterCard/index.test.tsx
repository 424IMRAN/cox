// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen, fireEvent } from '@testing-library/react'
import FilterList from '.'
import { SavedFilters } from '../../../constants'

test('filter list should be displayed', () => {
  render(<FilterList savedFilters={SavedFilters} isSaved />)
  const filter = screen.getByTestId('filterId')
  expect(filter).toBeVisible()
})

test('button should be clicked', () => {
  render(<FilterList savedFilters={SavedFilters} isSaved={false} />)
  const buttons = screen.getAllByRole('button')
  buttons.forEach((button) => fireEvent.click(button))
})
