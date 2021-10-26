// eslint-disable-next-line import/no-extraneous-dependencies
import { screen, render } from '@testing-library/react'
import RadioComponent from '.'

const mockClick = jest.fn()
test('radio button should be displayed', () => {
  render(<RadioComponent isChecked={false} handleClick={mockClick} />)
  const radioButton = screen.getByTestId('radioTest')
  expect(radioButton).toBeVisible()
})
