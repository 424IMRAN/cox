import { Checkbox } from '@material-ui/core'
import React from 'react'

type CheckBoxProps = {
  isChecked?: boolean
  handleChange?: () => void
  indeterminate?: boolean
  indeterminateIconSrc?: string | undefined
  [restProps: string]: unknown
  customStyle?: any
}

const CheckBoxComponent: React.FC<CheckBoxProps> = ({
  isChecked,
  handleChange,
  indeterminate,
  indeterminateIconSrc,
  customStyle,
  ...restProps
}) => {
  return (
    <Checkbox
      data-testid="checkboxTest"
      checked={isChecked}
      onChange={handleChange}
      indeterminate={indeterminate}
      indeterminateIcon={
        <img src={indeterminateIconSrc} alt="indeterminateIcon" />
      }
      {...restProps}
      className={customStyle}
    />
  )
}
CheckBoxComponent.defaultProps = {
  isChecked: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleChange: () => {},
  indeterminate: false,
  indeterminateIconSrc: undefined,
  customStyle: null,
}

export default CheckBoxComponent
