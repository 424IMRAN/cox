/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { AgGridColumn, AgGridReact } from 'ag-grid-react'
import AddBoxRoundedIcon from '../../../assets/atoms_icons_add.svg'
import { HeaderGroup } from './TableHeader'
import TablePaginationDemo from '../../molecules/Pagination'
import TextField from '../../atoms/TextField'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import './index.css'
import DropDown from '../../molecules/Dropdown'

const useStyles = makeStyles(() => ({
  paginationStyle: {
    bottom: 0,
    position: 'absolute',
    width: '100%',
  },
  textFieldStyle: {
    height: '32px',
  },
  selectStyle: {
    height: '70%',
  },
  normalTextFieldStyle: {
    height: '32px',
    margin: '4px',
    marginLeft: '-12px',
  },
  cursorStyle: { cursor: 'pointer' },
}))

type TableProps = {
  rows: Array<{
    eventId: string
    serviceName: string
    neType: string
    alertGroup: string
    type: number
    condition: string
    severity: string
  }>
  columns: Array<{
    field?: string
    flex?: number
    icon?: boolean
    ediatable?: boolean
  }>
  page: number
  setPage?: (curentPage: number) => void
  rowsPerPage: number
  setRowsPerPage?: (rows: number) => void
  totalRows: number
  showPagination?: boolean
  headerHeight?: number
  groupHeaderHeight?: number
  severityOptions?: Array<string>
  alarmActionOptions?: Array<string>
}

const Table = ({
  rows,
  columns,
  page,
  setPage,
  rowsPerPage,
  setRowsPerPage,
  totalRows,
  showPagination,
  headerHeight,
  groupHeaderHeight,
  severityOptions,
  alarmActionOptions,
}: TableProps) => {
  const classes = useStyles()
  const [gridApi, setGridApi] = useState(null)
  const [gridColumnApi, setGridColumnApi] = useState(null)
  const [rowData, setRowData] = useState(null)
  const [selectedRows, setSelectedRows] = useState(0)

  const onGridReady = (params: any) => {
    setGridApi(params.api)
    setGridColumnApi(params.columnApi)
    setRowData(rows)
  }

  const onRowSelected = (event: any) => {
    console.log(event.node)
  }

  const onSelectionChanged = (event: any) => {
    const rowCount = event.api.getSelectedNodes().length
    setSelectedRows(rowCount)
    if (rowCount > 0) {
      gridApi?.setHeaderHeight?.(0)
      gridApi?.setGroupHeaderHeight?.(groupHeaderHeight)
    } else {
      gridApi?.setHeaderHeight?.(headerHeight)
      gridApi?.setGroupHeaderHeight?.(0)
    }
  }
  const handleHeaderCheckboxClick = () => {
    if (selectedRows > 0) {
      gridApi.deselectAll()
    } else {
      gridApi.selectAll()
      setSelectedRows(rowData?.length)
    }
  }

  const cellRendererSelector = (params) => {
    if (
      params?.colDef?.field === 'proposed' &&
      params.data.attributes === 'Soak Tally'
    ) {
      return {
        component: 'textField',
        params: {
          value: params.value,
          handleChange: params.setValue,
          fullWidth: true,
          customStyle: classes.textFieldStyle,
        },
      }
    }
    if (
      params?.colDef?.field === 'proposed' &&
      params.data.attributes === 'Severity'
    ) {
      return {
        component: 'dropDown',
        params: {
          value: params.value,
          handleChange: params.setValue,
          options: severityOptions,
          styles: { width: '100%', height: '100%' },
          variant: 'outlined',
          selectStyle: classes.selectStyle,
        },
      }
    }
    if (
      params?.colDef?.field === 'proposed' &&
      params.data.attributes === 'Alarm Action'
    ) {
      return {
        component: 'dropDown',
        params: {
          value: params.value,
          handleChange: params.setValue,
          options: alarmActionOptions,
          styles: { width: '100%', height: '100%' },
          variant: 'outlined',
          selectStyle: classes.selectStyle,
        },
      }
    }
    if (
      params?.colDef?.field === 'proposed' &&
      params.data.attributes === 'Soak Time'
    ) {
      return {
        component: 'dropDown',
        params: {
          value: params.value,
          handleChange: params.setValue,
          options: [1, 2, 3],
          styles: { width: '100%', height: '100%' },
          variant: 'outlined',
          selectStyle: classes.selectStyle,
        },
      }
    }
    if (
      params?.colDef?.field === 'proposed' &&
      params.data.attributes === 'HLP ticket ID'
    ) {
      return {
        component: 'textField',
        params: {
          value: params.value,
          handleChange: params.setValue,
          fullWidth: true,
          customStyle: classes.textFieldStyle,
          endAdorment: (
            <img
              src={AddBoxRoundedIcon}
              onClick={hanldeCopyHLPTicket}
              className={classes.cursorStyle}
            />
          ),
        },
      }
    }
    if (
      params.data.attributes === 'HLP ticket ID' &&
      params?.colDef?.field !== 'attributes'
    ) {
      return {
        component: 'textField',
        params: {
          value: params.value,
          handleChange: params.setValue,
          fullWidth: true,
          customStyle: classes.normalTextFieldStyle,
        },
      }
    }

    return undefined
  }

  const hanldeCopyHLPTicket = () => {
    const temp: any[] = []
    gridApi?.forEachNode((node) => temp.push(node.data))
    const objKey = temp.findIndex((item) => item?.attributes == 'HLP ticket ID')
    for (const property in temp[objKey]) {
      console.log('prop', property)
      if (property !== 'proposed' && property !== 'attributes') {
        temp[objKey][property] = temp[objKey].proposed
      }
    }
    console.log(temp[objKey])
    gridApi.refreshCells()
    setRowData([...temp])
  }

  const handleCellValueChange = () => {}

  const cellClassRules = {
    'cell-editable': (params) => params?.colDef?.editable,
    'proposed-cell': (params) => params?.colDef?.field === 'proposed',
  }

  return (
    <div className="ag-theme-alpine" style={{ margin: '20px' }}>
      <AgGridReact
        rowData={rowData}
        groupSelectsChildren
        rowSelection="multiple"
        suppressRowClickSelection
        suppressRowHoverHighlight
        onRowSelected={onRowSelected}
        onSelectionChanged={onSelectionChanged}
        onGridReady={onGridReady}
        headerHeight={headerHeight}
        groupHeaderHeight={0}
        domLayout="autoHeight"
        frameworkComponents={{
          textField: TextField,
          dropDown: DropDown,
        }}
        reactUi
        onCellValueChanged={handleCellValueChange}
      >
        <AgGridColumn
          headerGroupComponentFramework={HeaderGroup}
          headerGroupComponentParams={{
            selectedRows,
            indeterminate: selectedRows !== rowData?.length,
            onClick: handleHeaderCheckboxClick,
          }}
        >
          {columns.map((column) => (
            <AgGridColumn
              {...column}
              cellClassRules={cellClassRules}
              cellRendererSelector={cellRendererSelector}
              key={column.field}
            />
          ))}
        </AgGridColumn>
      </AgGridReact>
      {showPagination && (
        <TablePaginationDemo
          page={page}
          setPage={setPage}
          totalRows={totalRows}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          paginationStyle={classes.paginationStyle}
        />
      )}
    </div>
  )
}

Table.propTypes = {}
Table.defaultProps = {
  setPage: null,
  setRowsPerPage: null,
  showPagination: true,
  headerHeight: 36,
  groupHeaderHeight: 36,
  severityOptions: ['Warning(2)', 'High(3)', 'Low(1)'],
  alarmActionOptions: ['Trending', 'New', 'Old'],
}

export default Table
