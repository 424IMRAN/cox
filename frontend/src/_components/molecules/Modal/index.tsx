import React from 'react'
import { Theme, makeStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Divider from '@material-ui/core/Divider'
import PropTypes from 'prop-types'
import Typography from '../../atoms/Typography'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: 0,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}))

export interface DialogTitleProps {
  children: string
  onClose: () => void
  buttonStyle: string
}

const DialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, buttonStyle, ...other } = props
  return (
    <MuiDialogTitle {...other}>
      <Typography variant="heading2">{children}</Typography>
      {/* {children} */}
      <IconButton aria-label="close" className={buttonStyle} onClick={onClose}>
        <CloseIcon />
      </IconButton>
    </MuiDialogTitle>
  )
}

type ModalProps = {
  handleModalClose: (close: boolean) => void
  open: boolean
  title: string
  children: React.ReactNode
  primaryButton?: React.ReactNode
  secondaryButton?: React.ReactNode
}

const Modal = ({
  handleModalClose,
  open,
  title,
  children,
  primaryButton,
  secondaryButton,
}: ModalProps) => {
  const handleClose = () => {
    handleModalClose(false)
  }
  const classes = useStyles()
  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth={false}
      >
        <DialogTitle onClose={handleClose} buttonStyle={classes.closeButton}>
          {title}
        </DialogTitle>
        <Divider />
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          {secondaryButton}
          {primaryButton}
        </DialogActions>
      </Dialog>
    </div>
  )
}
Modal.propTypes = {
  handleModalClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.elementType.isRequired,
  primaryButton: PropTypes.elementType,
  secondaryButton: PropTypes.elementType,
}

Modal.defaultProps = {
  primaryButton: null,
  secondaryButton: null,
}

export default Modal
