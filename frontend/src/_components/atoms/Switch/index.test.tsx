import React from 'react'
import { mount, shallow } from 'enzyme'
import { Switch as MUISwitch } from '@material-ui/core'
import Switch from '.'

describe('Switch Component', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(<Switch />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Allows us to set props', () => {
    const wrapper = mount(<Switch checked ariaLabel="testLabel" />)
    expect(wrapper.props().checked).toEqual(true)
    expect(wrapper.props().ariaLabel).toEqual('testLabel')
    wrapper.setProps({ ariaLabel: 'test' })
    wrapper.setProps({ checked: false })
    expect(wrapper.props().ariaLabel).toEqual('test')
    expect(wrapper.props().checked).toEqual(false)
  })

  it('onChange works', () => {
    const mockHandleChangeText = jest.fn()
    const component = mount(
      <Switch
        name="field"
        setChecked={mockHandleChangeText}
        endAdorment="kg"
        margin="normal"
        variant="standard"
      />
    )
    component
      ?.find(MUISwitch)
      ?.props()
      ?.onChange?.(
        {
          target: { checked: true },
        } as React.ChangeEvent<HTMLInputElement>,
        true
      )
    expect(mockHandleChangeText).toHaveBeenCalledWith(true)
  })
})
