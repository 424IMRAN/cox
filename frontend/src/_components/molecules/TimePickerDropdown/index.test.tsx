// eslint-disable-next-line import/no-extraneous-dependencies
import { screen, render } from '@testing-library/react'
import TimePicker from '.'

const mockClick = jest.fn()
test('timepicker should be displayed', () => {
  render(<TimePicker handleChange={mockClick} />)
  const timePicker = screen.getByTestId('timePickerTest')
  expect(timePicker).toBeVisible()
})
