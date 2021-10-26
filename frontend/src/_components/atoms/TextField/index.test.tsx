import React from 'react'
import MUITextField from '@material-ui/core/TextField'
import { mount, shallow } from 'enzyme'
import TextField from '.'

describe('Text Field  Component', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(<TextField />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Allows us to set props', () => {
    const wrapper = mount(
      <TextField
        label="test"
        placeholder="test placeholder"
        endAdorment="kg"
        margin="dense"
        variant="filled"
      />
    )
    expect(wrapper.props().label).toEqual('test')
    expect(wrapper.props().placeholder).toEqual('test placeholder')
    wrapper.setProps({ label: 'foo' })
    wrapper.setProps({ placeholder: 'foo placeholder' })
    expect(wrapper.props().placeholder).toEqual('foo placeholder')
    expect(wrapper.props().label).toEqual('foo')
  })

  it('onChange works', () => {
    const mockHandleChangeText = jest.fn()
    const component = mount(
      <TextField
        name="field"
        onChange={mockHandleChangeText}
        endAdorment="kg"
        margin="normal"
        variant="standard"
      />
    )
    component
      ?.find(MUITextField)
      ?.props()
      ?.onChange?.({ target: { value: 'test' } } as any)
    expect(mockHandleChangeText).toHaveBeenCalledWith({
      target: { value: 'test' },
    })
  })
})
