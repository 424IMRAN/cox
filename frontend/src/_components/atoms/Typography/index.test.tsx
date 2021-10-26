// eslint-disable-next-line import/no-extraneous-dependencies
import { screen, render } from '@testing-library/react'
import TypographyComponent from '.'

describe('testing typography styles', () => {
  test('heading 1 text should be displayed', () => {
    render(
      <TypographyComponent variant="heading1">Testing1</TypographyComponent>
    )
    const text = screen.getByTestId('testTypography')
    expect(text).toBeInTheDocument()
  })
  test('heading 2 text should be displayed', () => {
    render(
      <TypographyComponent variant="heading2">Testing2</TypographyComponent>
    )
    const text = screen.getByTestId('testTypography')
    expect(text).toBeInTheDocument()
  })
  test('heading 3 text should be displayed', () => {
    render(
      <TypographyComponent variant="heading3">Testing3</TypographyComponent>
    )
    const text = screen.getByTestId('testTypography')
    expect(text).toBeInTheDocument()
  })
  test('heading4 text should be displayed', () => {
    render(
      <TypographyComponent variant="heading4">Testing4</TypographyComponent>
    )
    const text = screen.getByTestId('testTypography')
    expect(text).toBeInTheDocument()
  })
  test('subtitle1 text should be displayed', () => {
    render(
      <TypographyComponent variant="subtitle1">Testing5</TypographyComponent>
    )
    const text = screen.getByTestId('testTypography')
    expect(text).toBeInTheDocument()
  })
  test('subtitle2 text should be displayed', () => {
    render(
      <TypographyComponent variant="subtitle2">Testing6</TypographyComponent>
    )
    const text = screen.getByTestId('testTypography')
    expect(text).toBeInTheDocument()
  })
  test('body1 text should be displayed', () => {
    render(<TypographyComponent variant="body1">Testing7</TypographyComponent>)
    const text = screen.getByTestId('testTypography')
    expect(text).toBeInTheDocument()
  })
  test('body2 text should be displayed', () => {
    render(<TypographyComponent variant="body2">Testing8</TypographyComponent>)
    const text = screen.getByTestId('testTypography')
    expect(text).toBeInTheDocument()
  })
  test('caption1 text should be displayed', () => {
    render(
      <TypographyComponent variant="caption1">Testing9</TypographyComponent>
    )
    const text = screen.getByTestId('testTypography')
    expect(text).toBeInTheDocument()
  })
  test('caption2 text should be displayed', () => {
    render(
      <TypographyComponent variant="caption2">Testing10</TypographyComponent>
    )
    const text = screen.getByTestId('testTypography')
    expect(text).toBeInTheDocument()
  })
  test('overline text should be displayed', () => {
    render(
      <TypographyComponent variant="overline">Testing11</TypographyComponent>
    )
    const text = screen.getByTestId('testTypography')
    expect(text).toBeInTheDocument()
  })
  test('wrong variant text should be displayed', () => {
    render(<TypographyComponent variant="test">Testing12</TypographyComponent>)
    const text = screen.getByTestId('testTypography')
    expect(text).toBeInTheDocument()
  })
})
