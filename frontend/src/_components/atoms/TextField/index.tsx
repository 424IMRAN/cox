/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import PropTypes from 'prop-types'
import { TextField as MUITextField, InputAdornment } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '../Typography'
import { textFieldmargin, textFieldVariants } from '../../../core-utils/helper'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFilledInput-root': {
      background: 'rgb(232, 241, 250)',
    },
  },
  helperText: {
    marginLeft: 0,
    marginRight: 0,
    fontSize: 14,
    lineHeight: '21px',
    letterSpacing: '0.25px',
  },
  label: {
    ...theme.typography.body2,
    color: theme.palette.info.main,
  },
}))

type TextFieldProps = {
  label?: string
  name?: string
  value?: string
  multiline?: boolean
  rows?: number
  rowsMax?: number
  placeholder?: string
  handleChange?: ((value: string) => void) | null
  variant?: string
  margin?: string
  helperText?: string
  [restProps: string]: unknown
  fullWidth?: boolean
  endAdorment?: any
  customStyle?: any
}

const TextField = ({
  label,
  name,
  value,
  multiline,
  rows,
  rowsMax,
  placeholder,
  handleChange,
  variant,
  margin,
  helperText,
  endAdorment,
  fullWidth,
  customStyle,
  ...restProps
}: TextFieldProps) => {
  const classes = useStyles()

  const onChange = ({
    target: { value: currentValue },
  }: React.ChangeEvent<HTMLInputElement>) => {
    handleChange?.(currentValue)
  }

  return (
    <>
      {label && (
        <Typography data-testid="textfield-label" className={classes.label}>
          {label ?? ''}
        </Typography>
      )}
      <MUITextField
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">{endAdorment}</InputAdornment>
          ),
        }}
        className={customStyle}
        name={name}
        margin={textFieldmargin(margin ?? '')}
        value={value}
        multiline={multiline}
        placeholder={placeholder}
        rows={rows}
        variant={textFieldVariants(variant ?? '')}
        rowsMax={rowsMax}
        onChange={onChange}
        helperText={helperText}
        fullWidth={fullWidth}
        {...restProps}
      />
    </>
  )
}

TextField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  rowsMax: PropTypes.number,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  variant: PropTypes.string,
  margin: PropTypes.string,
  helperText: PropTypes.string,
  fullWidth: PropTypes.bool,
  customStyle: PropTypes.objectOf(PropTypes.string),
}

TextField.defaultProps = {
  label: '',
  name: '',
  multiline: false,
  rows: 1,
  rowsMax: 1,
  placeholder: '',
  handleChange: null,
  variant: 'outlined',
  margin: 'none',
  helperText: '',
  value: '',
  fullWidth: false,
  endAdorment: null,
  customStyle: null,
}

export default TextField
