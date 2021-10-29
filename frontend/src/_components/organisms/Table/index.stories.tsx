/* eslint-disable @typescript-eslint/no-empty-function */
import { Story, Meta } from '@storybook/react'
import { ThemeProvider } from '@material-ui/core/styles'
import Table from '.'
import baseTheme from '../../../core-utils/theme'
import HeaderCell, { SubHeaderCell } from './TableHeader'

export default {
  title: 'organisms/Table',
  component: Table,
  argTypes: {},
} as Meta
const rowData = [
  {
    eventId: 'SNMP-.1.3.6.1.4.1.24931.9.2.1.508-6-3',
    serviceName: 'VIDEO_METRO_HFC',
    neType: 'Apllication Server',
    alertGroup: 'programdiscontinuitnotify',
    type: 1,
    condition: 'PROGRAM Discontiuity',
    severity: 'intermidate(1)',
    escalation: 1,
    soakTime: '10800(00:30:00)',
    agent: 'DMS_PRIAMRY2',
    vendor: 'NORTEL NETWORKS',
  },
  {
    eventId: 'SNMP-.1.3.6.1.4.1.24931.9.2.1.508-6-3',
    serviceName: 'VIDEO_METRO_HFC',
    neType: 'Apllication Server',
    alertGroup: 'programdiscontinuitnotify',
    type: 1,
    condition: 'PROGRAM Discontiuity',
    severity: 'intermidate(1)',
    escalation: 3,
    soakTime: '10800(00:30:00)',
    agent: 'DMS_PRIAMRY2',
    vendor: 'NORTEL NETWORKS',
  },
  {
    eventId: 'SNMP-.1.3.6.1.4.1.24931.9.2.1.508-6-3',
    serviceName: 'VIDEO_METRO_HFC',
    neType: 'Apllication Server',
    alertGroup: 'programdiscontinuitnotify',
    type: 1,
    condition: 'PROGRAM Discontiuity',
    severity: 'intermidate(1)',
    escalation: 4,
    soakTime: '10800(00:30:00)',
    agent: 'DMS_PRIAMRY2',
    vendor: 'NORTEL NETWORKS',
  },
]
const cellStyle = { backGroundColor: 'red' }
const columns = [
  {
    columnName: '',
    icon: false,
    headerCheckboxSelection: true,
    headerCheckboxSelectionFilteredOnly: true,
    checkboxSelection: true,
    maxWidth: 44,
  },
  {
    field: 'eventId',
    headerName: 'Event Id',
    icon: false,
    editable: true,
    headerComponentFramework: HeaderCell,
    minWidth: 300,
  },
  {
    field: 'serviceName',
    headerName: ' Service Name',
    icon: false,
    editable: true,
    flex: 1,
    headerComponentFramework: HeaderCell,
    minWidth: 175,
  },
  {
    field: 'neType',
    icon: false,
    editable: true,
    flex: 1,
    headerComponentFramework: HeaderCell,
    minWidth: 163,
  },
  {
    field: 'alertGroup',
    icon: false,
    editable: true,
    flex: 1,
    headerComponentFramework: HeaderCell,
    minWidth: 222,
  },
  {
    field: 'type',
    icon: false,
    editable: true,
    flex: 1,
    headerComponentFramework: HeaderCell,
    minWidth: 76,
  },
  {
    field: 'condition',
    icon: false,
    editable: true,
    flex: 1,
    headerComponentFramework: HeaderCell,
    minWidth: 227,
  },
  {
    field: 'severity',
    icon: false,
    editable: false,
    flex: 1,
    headerComponentFramework: HeaderCell,
    minWidth: 160,
  },
  {
    field: 'escalation',
    icon: false,
    editable: false,
    flex: 1,
    headerComponentFramework: HeaderCell,
    minWidth: 111,
  },
  {
    field: 'soakTime',
    headerName: 'SoakTime(DD:HH:MM)',
    icon: false,
    editable: false,
    flex: 2,
    headerComponentFramework: HeaderCell,
    minWidth: 178,
  },
  {
    field: 'agent',
    icon: false,
    editable: false,
    flex: 1,
    headerComponentFramework: HeaderCell,
    minWidth: 200,
  },
  {
    field: 'vendor',
    icon: false,
    editable: false,
    flex: 1,
    headerComponentFramework: HeaderCell,
    minWidth: 180,
  },
]

const editRow = [
  {
    attributes: 'Severity',
    SNMP1: 'Warning',
    SNMP2: 'Warning',
    SNMP3: 'HIGH',
  },
  {
    attributes: 'Alarm Action',
    SNMP1: 'Program Discontinuity notify',
    SNMP2: 'Program Discontinuity notify',
    SNMP3: 'Program Discontinuity notify',
  },
  {
    attributes: 'Soak Time',
    SNMP1: '18000(00:03:00)',
    SNMP2: '18000(00:03:00)',
    SNMP3: '18000(00:03:00)',
  },
  {
    attributes: 'Soak Tally',
    SNMP1: 3,
    SNMP2: 3,
    SNMP3: 3,
  },
  {
    attributes: 'HLP ticket ID',
    SNMP1: '',
    SNMP2: '',
    SNMP3: '',
  },
]
const editColumns = [
  {
    field: 'attributes',
    icon: false,
    editable: true,
    flex: 1,
    headerComponentFramework: HeaderCell,
  },
  {
    field: 'proposed',
    icon: false,
    editable: false,
    flex: 1,
    headerComponentFramework: HeaderCell,
  },
  {
    field: 'SNMP1',
    headerName: 'SNMP1.23.3.23.2.32.32.',
    subField: 'Agent Name:DMS_PRIARY',
    icon: false,
    editable: true,
    flex: 1,
    headerComponentFramework: SubHeaderCell,
  },
  {
    field: 'SNMP2',
    headerName: 'SNMP1.23.3.23.2.32.32.',
    subField: 'Agent Name:DMS_PRIARY',
    icon: false,
    editable: true,
    flex: 1,
    headerComponentFramework: SubHeaderCell,
  },
  {
    field: 'SNMP3',
    headerName: 'SNMP1.23.3.23.2.32.32.',
    subField: 'Agent Name:DMS_PRIARY',
    icon: false,
    editable: true,
    flex: 1,
    headerComponentFramework: SubHeaderCell,
  },
]

const Template: Story = ({
  page,
  headerHeight,
  rows,
  column,
  rowsPerPage,
  ...args
}) => (
  <ThemeProvider theme={baseTheme}>
    <Table
      rows={rows}
      columns={column}
      page={page}
      rowsPerPage={rowsPerPage}
      setPage={() => {}}
      setRowsPerPage={() => {}}
      totalRows={1000}
      showPagination
      headerHeight={headerHeight}
      {...args}
    />
  </ThemeProvider>
)

export const New = Template.bind({})
New.args = {
  rows: rowData,
  column: columns,
  page: 1,
  rowsPerPage: 10,
  headerHeight: 36,
}

export const EditTable = Template.bind({})
EditTable.args = {
  rows: editRow,
  column: editColumns,
  page: 1,
  rowsPerPage: 10,
  headerHeight: 58,
}
