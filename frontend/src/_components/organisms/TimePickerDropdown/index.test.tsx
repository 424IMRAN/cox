// eslint-disable-next-line import/no-extraneous-dependencies
import { screen, render } from '@testing-library/react'
import TimePicker from '.'

test('timepicker should be displayed', () => {
  render(<TimePicker changedSoakTime={(value: number) => console.log(value)} />)
  const timePicker = screen.getByTestId('timePickerTest')
  expect(timePicker).toBeVisible()
})
