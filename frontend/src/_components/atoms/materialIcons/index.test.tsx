import { render } from '@testing-library/react'
import Icon from '.'
import { screen } from '@testing-library/react'

test('select color icon component should be displayed', () => {
  render(<Icon style={undefined} className={undefined} iconColor="select" type="filled" />)
  const icon = screen.getByTestId('icon')
  expect(icon).toBeInTheDocument()
})
test('unselect color icon component should be displayed ', () => {
  render(<Icon style={undefined} className={undefined} iconColor="unselect" type="outlined"/>)
  const icon = screen.getByTestId('icon')
  expect(icon).toBeInTheDocument()
})
test('info icon color component should be displayed', () => {
  render(<Icon style={undefined} className={undefined} iconColor="info" type="filled"/>)
  const icon = screen.getByTestId('icon')
  expect(icon).toBeInTheDocument()
})
test(' success icon color component should be displayed', () => {
  render(<Icon style={undefined} className={undefined} iconColor="success" type="filled"/>)
  const icon = screen.getByTestId('icon')
  expect(icon).toBeInTheDocument()
})
test('default icon color component should be displayed', () => {
  render(<Icon style={undefined} className={undefined} iconColor="test"type="filled"/>)
  const icon = screen.getByTestId('icon')
  expect(icon).toBeInTheDocument()
})




