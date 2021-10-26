// eslint-disable-next-line import/no-extraneous-dependencies
import { screen, render } from '@testing-library/react'
import SelectComponent from '.'
import { COLORS } from '../../../core-utils/theme'

const mockClick = jest.fn()
test('dropdown should be displayed with placeholder value', () => {
  render(
    <SelectComponent
      variant="outlined"
      options={['01', '02', '03', '04', '05']}
      styles={undefined}
      placeholderValue="DD"
      placeholderColor={COLORS.TEXT_500}
      value=""
      handleChange={mockClick}
    />
  )
  const selectTest = screen.getByTestId('selectTest')
  expect(selectTest).toBeVisible()
})
test('dropdown should be displayed without placeholder value', () => {
  render(
    <SelectComponent
      variant="outlined"
      options={['1', '2', '3', '4', '5']}
      styles={undefined}
      placeholderValue={undefined}
      placeholderColor={COLORS.TEXT_500}
      value=""
      handleChange={mockClick}
    />
  )
  const selectTest = screen.getByTestId('selectTest')
  expect(selectTest).toBeVisible()
})
