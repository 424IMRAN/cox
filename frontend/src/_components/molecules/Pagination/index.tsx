import React from 'react'
import { TablePagination } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import { COLORS } from '../../../core-utils/theme'

const useStyles = makeStyles(() => ({
  paginationStyle: {
    backgroundColor: COLORS.TRANSPARENT_GREY_500,
  },
}))

type PaginationProps = {
  page: number
  setPage?: (currentPage: number) => void
  rowsPerPage: number
  setRowsPerPage?: (rows: number) => void
  totalRows: number
  paginationStyle?: string
  [restProps: string]: any
}

const Pagination = ({
  page,
  setPage,
  rowsPerPage,
  setRowsPerPage,
  totalRows,
  paginationStyle,
  ...restProps
}: PaginationProps) => {
  const classes = useStyles()

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage?.(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage?.(parseInt(event.target.value, 10))
    setPage?.(0)
  }

  return (
    <TablePagination
      className={clsx(classes.paginationStyle, paginationStyle)}
      component="div"
      count={totalRows}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      {...restProps}
    />
  )
}

export default Pagination

Pagination.defaultProps = {
  setPage: null,
  setRowsPerPage: () => null,
  paginationStyle: null,
}
