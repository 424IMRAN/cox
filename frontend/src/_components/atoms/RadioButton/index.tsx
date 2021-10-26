import { Radio } from '@material-ui/core'
import React from 'react'

type RadioProps = {
  isChecked: boolean
  handleClick: () => void
}

const RadioComponent: React.FC<RadioProps> = ({ isChecked, handleClick }) => {
  return (
    <Radio checked={isChecked} onClick={handleClick} data-testid="radioTest" />
  )
}
export default RadioComponent
