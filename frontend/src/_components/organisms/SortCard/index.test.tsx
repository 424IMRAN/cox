// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen, fireEvent } from '@testing-library/react'
import SortCard from '.'

test('sort card should be displayed', () => {
  render(<SortCard />)
  const sortCard = screen.getByTestId('sortCard')
  expect(sortCard).toBeVisible()
})

test('button should be clicked', () => {
  render(<SortCard />)
  const buttons = screen.getAllByRole('button')
  buttons.forEach((button) => fireEvent.click(button))
})

test('select component should be clickable', () => {
  render(<SortCard />)
  const dropdown = screen.getByTestId('sortDropdown')
  fireEvent.click(dropdown)
})
