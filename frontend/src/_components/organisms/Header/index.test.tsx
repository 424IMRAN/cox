// eslint-disable-next-line import/no-extraneous-dependencies
import { screen, render } from '@testing-library/react'
import Header from '.'

test('header setting should be displayed', () => {
  render(<Header isAdmin image="test" settingIcon="test" />)
  const header = screen.getByTestId('appBar')
  expect(header).toBeVisible()
})
test('header setting icon should not be displayed', () => {
  render(<Header isAdmin={false} image="test" settingIcon="test" />)
  const header = screen.getByTestId('appBar')
  expect(header).toBeVisible()
})
