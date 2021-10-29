import { Story, Meta } from '@storybook/react'
import { ThemeProvider, makeStyles } from '@material-ui/core/styles'
import { Button, Typography } from '@material-ui/core'
import Modal from '.'
import baseTheme from '../../../core-utils/theme'
import TextField from '../../atoms/TextField'

export default {
  title: 'molecules/Modal',
  component: Modal,
  argTypes: {},
} as Meta

const useStyle = makeStyles({
  root: {
    width: '560px',
  },
})

const Template: Story = ({ ...args }) => {
  const classes = useStyle()
  return (
    <ThemeProvider theme={baseTheme}>
      <Modal handleModalClose={() => {}} open title="test" {...args}>
        <TextField label="Filter Name" fullWidth customStyle={classes.root} />
      </Modal>
    </ThemeProvider>
  )
}

export const BasicModal = Template.bind({})
BasicModal.args = {
  title: 'Add/Rename Filter',
  open: true,
  primaryButton: (
    <Button variant="contained" disabled>
      Primary
    </Button>
  ),
  secondaryButton: <Button variant="outlined">Secondary</Button>,
}

export const PrimaryModal = Template.bind({})
PrimaryModal.args = {
  title: 'Add/Rename Filter',
  open: true,
  primaryButton: (
    <Button variant="contained" disabled>
      Primary
    </Button>
  ),
}
export const NoButtonModal = Template.bind({})
NoButtonModal.args = {
  title: 'Add/Rename Filter',
  open: true,
}
