import React from 'react'
import MuiAccordion from '@material-ui/core/Accordion'
import { mount, shallow } from 'enzyme'
import Accordion from '.'

describe('Accordion  Component', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(<Accordion header="test header">test</Accordion>)
    expect(wrapper).toMatchSnapshot()
  })

  it('Allows us to set props', () => {
    const wrapper = mount(
      <Accordion header="test header" expanded>
        test
      </Accordion>
    )
    expect(wrapper.props().header).toEqual('test header')
    expect(wrapper.props().expanded).toEqual(true)
    wrapper.setProps({ header: 'foo' })
    wrapper.setProps({ expanded: false })
    expect(wrapper.props().header).toEqual('foo')
    expect(wrapper.props().expanded).toEqual(false)
  })

  it('setExpanded works', () => {
    const mockHandleChangeText = jest.fn()
    const component = mount(
      <Accordion
        header="test header"
        expanded
        setExpanded={mockHandleChangeText}
      >
        test
      </Accordion>
    )
    component
      ?.find(MuiAccordion)
      ?.props()
      ?.onChange?.(
        {
          target: { checked: true },
        } as React.ChangeEvent<HTMLInputElement>,
        true
      )
    expect(mockHandleChangeText).toHaveBeenCalledWith(false)
  })
})
