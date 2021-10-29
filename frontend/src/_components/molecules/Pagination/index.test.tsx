import { render } from '@testing-library/react'
import { TablePagination } from '@material-ui/core'
import { mount } from 'enzyme'
import Pagination from './index'

describe('Pagination Testing', () => {
  it('Matches Snapshot', () => {
    const { container } = render(
      <Pagination rowsPerPage={1} page={1} totalRows={1} />
    )
    expect(container).toMatchSnapshot()
  })

  it('Allows us to set props', () => {
    const wrapper = mount(<Pagination rowsPerPage={1} page={1} totalRows={1} />)
    expect(wrapper.props().rowsPerPage).toEqual(1)
    expect(wrapper.props().page).toEqual(1)
    expect(wrapper.props().totalRows).toEqual(1)
    wrapper.setProps({ page: 2 })
    wrapper.setProps({ rowsPerPage: 2 })
    expect(wrapper.props().page).toEqual(2)
    expect(wrapper.props().rowsPerPage).toEqual(2)
  })

  it('onChange works', () => {
    const mockHandleChange = jest.fn()
    const component = mount(
      <Pagination
        rowsPerPage={1}
        page={1}
        totalRows={2}
        setPage={mockHandleChange}
      />
    )

    component
      ?.find(TablePagination)
      ?.props()
      ?.onPageChange?.({} as any, 2)
    expect(mockHandleChange).toHaveBeenCalledWith(2)
  })
})
