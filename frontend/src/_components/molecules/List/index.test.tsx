import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import { mount, shallow } from 'enzyme'
import List from '.'

describe('List  Component', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(<List list={[{ value: 'hello' }]} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Allows us to set props', () => {
    const wrapper = mount(<List list={[{ value: 'hello' }]} checkedList />)
    expect(wrapper.props().checkedList).toEqual(true)
    expect(wrapper.props().list).toEqual([{ value: 'hello' }])
  })

  it('onClick works', () => {
    const mockHandleChangeText = jest.fn()
    const component = mount(
      <List
        list={[{ value: 'hello' }]}
        checkedList
        onClick={mockHandleChangeText}
      />
    )
    component
      ?.find(ListItem)
      ?.props()
      ?.onClick?.({ target: {} } as any)
    expect(mockHandleChangeText).toHaveBeenCalledWith(0, 'hello')
  })
})
