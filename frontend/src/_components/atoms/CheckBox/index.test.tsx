// eslint-disable-next-line import/no-extraneous-dependencies
import { screen, render } from '@testing-library/react'
import CheckBoxComponent from '.'

const mockClick = jest.fn()
test('checkbox should be displayed', () => {
  render(
    <CheckBoxComponent
      isChecked
      indeterminate={false}
      handleChange={mockClick}
      indeterminateIconSrc={undefined}
    />
  )
  const checkbox = screen.getByTestId('checkboxTest')
  expect(checkbox).toBeVisible()
})
