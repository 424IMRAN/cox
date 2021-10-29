import React from 'react'
import { Meta } from '@storybook/react'
import { ThemeProvider } from '@material-ui/core/styles'
import TablePaginationDemo from './index'
import theme from '../../../core-utils/theme'
import Pagination from './index'

export default {
  title: 'molecules/Pagination',
  component: TablePaginationDemo,
  argTypes: {
    totalItems: {
      control: { type: 'number' },
    },
    itemsPerPage: {
      control: { type: 'number' },
    },
  },
} as Meta

const Default = () => <Pagination rowsPerPage={1} page={1} totalRows={2} />

export const Primary = Default.bind({})
