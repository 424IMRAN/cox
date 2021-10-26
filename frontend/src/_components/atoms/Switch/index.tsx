import * as React from 'react'
import { Switch as MUISwitch } from '@material-ui/core'
import PropTypes from 'prop-types'
import { getSwitchColors } from '../../../core-utils/helper'

type SwitchProps = {
  checked?: boolean
  setChecked?: (checked: boolean) => void
  color?: string
  ariaLabel?: string
  disabled?: boolean
  [restProps: string]: unknown
}

const Switch = ({
  checked,
  setChecked,
  color,
  ariaLabel,
  disabled,
  ...restProps
}: SwitchProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked?.(event.target.checked)
  }

  return (
    <MUISwitch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': ariaLabel }}
      color={getSwitchColors(color)}
      disabled={disabled}
      {...restProps}
    />
  )
}

Switch.propTypes = {
  checked: PropTypes.bool,
  setChecked: PropTypes.func,
  color: PropTypes.string,
}

Switch.defaultProps = {
  checked: false,
  setChecked: null,
  color: 'primary',
  ariaLabel: 'Switch',
  disabled: false,
}

export default Switch
