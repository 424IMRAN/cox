import React from 'react'
import MUITextField from '@material-ui/core/TextField'
import { mount, shallow } from 'enzyme'
import { HeaderGroup } from '.'

describe('TableHeder  Component', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(
      <HeaderGroup selectedRows={6} indeterminate onClick={null} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('Allows us to set props', () => {
    const wrapper = mount(
      <HeaderGroup selectedRows={6} indeterminate onClick={null} />
    )
    expect(wrapper.props().selectedRows).toEqual(6)
    expect(wrapper.props().indeterminate).toEqual(true)
    wrapper.setProps({ selectedRows: 0 })
    wrapper.setProps({ indeterminate: false })
    expect(wrapper.props().selectedRows).toEqual(0)
    expect(wrapper.props().indeterminate).toEqual(false)
  })
})
