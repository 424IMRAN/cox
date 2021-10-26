// eslint-disable-next-line import/no-extraneous-dependencies
import { screen, render } from '@testing-library/react'
import ImageComponent from '.'

test('image component should be displayed', () => {
  render(<ImageComponent alt="logo" imageSrc="test" styles={undefined} />)
  const logo = screen.getByTestId('image')
  expect(logo).toHaveAttribute('alt', 'logo')
})
