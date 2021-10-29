// eslint-disable-next-line import/no-extraneous-dependencies
import { screen, render } from '@testing-library/react'
import Divider from '.'

test('divider component should be displayed', () => {
  render(<Divider />)
  const divider = screen.getByTestId('dividerTest')
  expect(divider).toBeVisible()
})
