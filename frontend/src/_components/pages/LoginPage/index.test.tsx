// eslint-disable-next-line import/no-extraneous-dependencies
import { screen, render } from '@testing-library/react'
import LoginPage from '.'

test('login page should be displayed', () => {
  render(<LoginPage onClick={undefined} />)
  const loginPage = screen.getByTestId('loginTestId')
  expect(loginPage).toBeVisible()
})
