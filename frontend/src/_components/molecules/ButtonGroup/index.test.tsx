import React from 'react'
import { mount, shallow } from 'enzyme'
import ButtonGroup from '.'

describe('ButtonGroup Component', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(
      <ButtonGroup labels={['test', 'bar']} activeIndex={0} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('Allows us to set props', () => {
    const wrapper = mount(
      <ButtonGroup labels={['test', 'bar']} activeIndex={0} />
    )
    expect(wrapper.props().labels).toEqual(['test', 'bar'])
    expect(wrapper.props().activeIndex).toEqual(0)
    wrapper.setProps({ labels: ['bar', 'foo'] })
    wrapper.setProps({ activeIndex: 1 })
    expect(wrapper.props().activeIndex).toEqual(1)
    expect(wrapper.props().labels).toEqual(['bar', 'foo'])
  })

  it('onClick works', () => {
    const mockOnClick = jest.fn()
    const component = mount(
      <ButtonGroup
        labels={['test', 'bar']}
        activeIndex={1}
        setActive={mockOnClick}
      />
    )
    component
      ?.find('div')
      ?.at(1)
      ?.props()
      ?.onClick?.({} as any)
    expect(mockOnClick).toHaveBeenCalledWith(0)
  })
})
