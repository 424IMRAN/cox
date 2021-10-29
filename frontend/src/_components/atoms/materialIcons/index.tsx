import React from 'react'
import { Icon as MuiIcon, IconProps, makeStyles } from '@material-ui/core'
import { COLORS } from '../../../core-utils/theme'

export interface IconCompProps extends IconProps {
  icon?: string
  iconColor?: string
  type?: string
  className?: string
  fontSize?: 'small'
  onClick?: any
}
const Icon: React.FC<IconCompProps> = ({
  iconColor,
  icon,
  className,
  type,
  fontSize,
  onClick,
}) => {
  return (
    <MuiIcon
      data-testid="icon"
      className={[
        className,
        type === 'filled' ? 'material-icons' : 'material-icons-outlined',
      ].join(' ')}
      style={{ color: iconColor }}
      fontSize={fontSize}
      onClick={onClick}
    >
      {icon}
    </MuiIcon>
  )
}

export default Icon
