import { render } from '@testing-library/react'
import SvgIcon from '.'
import { screen } from '@testing-library/react'

test('select color icon component should be displayed', () => {
  render(<SvgIcon />)
  const svgicon = screen.getByTestId('svgicon')
  expect(svgicon).toBeVisible()
})
