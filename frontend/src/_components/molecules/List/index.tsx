/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import MuiList from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import clsx from 'clsx'
import Checkbox from '../../atoms/CheckBox'
import Typography from '../../atoms/Typography'
import { COLORS } from '../../../core-utils/theme'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    primaryText: {
      color: COLORS.TEXT_500,
    },
    checkBoxStyle: {
      paddingRight: '12px',
    },
  })
)

type ListProps = {
  list: Array<any>
  rightIcon?: React.ReactNode
  checkedList?: boolean
  onClick?: (index: number, value: any) => void
  customStyle?: any
}

const List = ({
  list,
  checkedList,
  rightIcon,
  onClick,
  customStyle,
}: ListProps) => {
  const classes = useStyles()

  const handleClick = (value: number, idx: number) => () => {
    onClick?.(idx, value)
  }

  return (
    <MuiList className={clsx(classes.root, customStyle)}>
      {list.map((item, idx) => {
        return (
          <ListItem
            key={item.value}
            button
            onClick={handleClick(item?.value, idx)}
          >
            {checkedList && (
              <ListItemIcon>
                <Checkbox
                  isChecked={item.checked}
                  tabIndex={-1}
                  disableRipple
                  customStyle={classes.checkBoxStyle}
                />
              </ListItemIcon>
            )}

            <ListItemText
              disableTypography
              primary={
                <Typography variant="body2" className={classes.primaryText}>
                  {item.value}
                </Typography>
              }
            />
            <ListItemSecondaryAction>{rightIcon}</ListItemSecondaryAction>
          </ListItem>
        )
      })}
    </MuiList>
  )
}

List.defaultProps = {
  checkedList: false,
  customStyle: null,
  rightIcon: null,
  onClick: null,
}

export default List
