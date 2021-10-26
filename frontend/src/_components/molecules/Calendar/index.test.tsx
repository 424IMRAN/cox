import React from 'react'
import { mount, shallow } from 'enzyme'
import { DatePicker } from '@material-ui/pickers'
import Calendar from '.'

describe('Text Field  Component', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(
      <Calendar
        date={new Date('August 19, 1975 23:15:30')}
        onDateChange={jest.fn()}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('Allows us to set props', () => {
    const wrapper = mount(
      <Calendar date={new Date()} onDateChange={jest.fn()} />
    )
    // expect(wrapper.props().date).toEqual(new Date())
    expect(wrapper.props().date.getDay()).toEqual(new Date().getDay())
  })

  it('onChange works', () => {
    const mockHandleChange = jest.fn()
    const component = mount(
      <Calendar date={new Date()} onDateChange={mockHandleChange} />
    )
    component
      ?.find(DatePicker)
      ?.props()
      ?.onChange?.(new Date('August 19, 1975 23:15:30') as any)
    expect(mockHandleChange).toHaveBeenCalledWith(
      new Date('August 19, 1975 23:15:30')
    )
  })
})
