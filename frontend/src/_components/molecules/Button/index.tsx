/* eslint-disable no-nested-ternary */
import React, { ReactNode } from 'react'
import Button, { ButtonProps } from '@material-ui/core/Button'
import { makeStyles, Typography } from '@material-ui/core'
import clsx from 'clsx'
import { CSSProperties } from '@material-ui/styles'
import theme, { COLORS } from '../../../core-utils/theme'
import Icon from '../../atoms/materialIcons'
import { useGlobalStyles } from '../../../core-utils/global'

export interface defaultProps {
  startIcon?: string | ReactNode
  endIcon?: string
  children: string | ReactNode
  className?: string
  textStyle?: string
  color?: string
  variant?: 'outlined' | 'contained'
  iconColor?: string
  backgroundColor?: string
  disableRipple?: boolean
  height?: string
  fullWidth?: boolean
  startIconType?: string
  endIconType?: string
  size?: 'small' | 'medium' | 'large' | undefined
  onClick?: () => React.MouseEventHandler<HTMLButtonElement>
  customStyles?: CSSProperties
}

const ButtonComponent: React.FC<defaultProps> = (defaultProps) => {
  const useStyles = makeStyles({
    root: {
      borderRadius: theme.spacing(2),
      paddingTop: theme.spacing(2),
      paddingRight: theme.spacing(3),
      paddingLeft: theme.spacing(3),
      paddingBottom: theme.spacing(2),
      height: defaultProps.height,
    },
    contained: {
      backgroundColor: defaultProps.backgroundColor,
    },
    button: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontWeightBold,
    },
    Icon: {
      width: '9.33px',
      height: '9.33px',
      fontSize: '100px',
    },
  })
  const classes = useStyles()
  const globalClasses = useGlobalStyles()

  return (
    <Button
      fullWidth={defaultProps.fullWidth}
      size={defaultProps.size}
      className={defaultProps.className}
      startIcon={
        defaultProps.startIcon ? (
          typeof defaultProps.startIcon !== 'string' ? (
            defaultProps.startIcon
          ) : (
            <Icon
              icon={defaultProps.startIcon}
              iconColor={defaultProps.color}
              fontSize="small"
              type={defaultProps.startIconType}
            />
          )
        ) : null
      }
      endIcon={
        defaultProps.endIcon ? (
          typeof defaultProps.endIcon !== 'string' ? (
            defaultProps.endIcon
          ) : (
            <Icon
              icon={defaultProps.endIcon}
              iconColor={defaultProps.color}
              fontSize="small"
              type={defaultProps.endIconType}
            />
          )
        ) : null
      }
      variant={defaultProps.variant}
      classes={{
        root: classes.root,
        contained: classes.contained,
      }}
      onClick={defaultProps.onClick}
      style={defaultProps.customStyles}
    >
      <Typography
        variant="body1"
        style={{ color: defaultProps.color }}
        className={clsx(defaultProps.textStyle)}
      >
        {' '}
        {defaultProps.children}
      </Typography>
    </Button>
  )
}

export default ButtonComponent
