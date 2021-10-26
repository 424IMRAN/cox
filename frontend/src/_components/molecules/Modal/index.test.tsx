import React from 'react'
import { mount, shallow } from 'enzyme'
import Dialog from '@material-ui/core/Dialog'
import Modal from '.'
import TextField from '../../atoms/TextField'

describe('Text Field  Component', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(
      <Modal handleModalClose={() => {}} open title="test">
        <TextField label="Filter Name" fullWidth />
      </Modal>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('Allows us to set props', () => {
    const wrapper = mount(
      <Modal handleModalClose={() => {}} open title="test">
        <TextField label="Filter Name" fullWidth />
      </Modal>
    )
    expect(wrapper.props().title).toEqual('test')
    wrapper.setProps({ title: 'foo' })
    expect(wrapper.find(TextField).props().label).toEqual('Filter Name')
    expect(wrapper.props().title).toEqual('foo')
  })

  it('onChange works', () => {
    const mockHandleChangeText = jest.fn()
    const component = mount(
      <Modal handleModalClose={mockHandleChangeText} open title="test">
        <TextField label="Filter Name" fullWidth />
      </Modal>
    )
    component
      ?.find(Dialog)
      ?.props()
      ?.onClose?.(
        {
          target: { checked: true },
        } as React.ChangeEvent<HTMLInputElement>,
        'backdropClick'
      )
    expect(mockHandleChangeText).toHaveBeenCalledWith(false)
  })
})
