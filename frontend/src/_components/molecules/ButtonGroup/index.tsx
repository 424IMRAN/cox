/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import clsx from 'clsx'
import Typography from '../../atoms/Typography'
import { COLORS } from '../../../core-utils/theme'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: COLORS.TRANSPARENT_GREY_300,
    maxWidth: 'max-content',
    borderRadius: theme.spacing(3),
    padding: theme.spacing(0.5),
    '&&:after': {},
  },
  typogrpahy: {
    minWidth: '68px',
    textAlign: 'center',
  },
  activeTypoGraphyDiv: {
    backgroundColor: COLORS.TERTIARY_GREY_100,
  },
  typographyDiv: {
    padding: `${theme.spacing(1.5)}px ${theme.spacing(4)}px`,
    borderRadius: `${theme.spacing(3)}px`,
  },
  activeTypoGraphy: {
    color: COLORS.TEXT_900,
  },
}))

type ButtonGroupProps = {
  labels?: Array<string>
  activeIndex?: number
  setActive?: (idx: number) => void
}

const ButtonGroup = ({ labels, activeIndex, setActive }: ButtonGroupProps) => {
  const classes = useStyles()
  const handleOnClick = (idx: number) => () => {
    setActive?.(idx)
  }
  return (
    <div className={classes.root} style={{ cursor: 'pointer' }}>
      {labels?.map((label, idx) => (
        <div
          className={clsx(
            classes.typographyDiv,
            activeIndex === idx && classes.activeTypoGraphyDiv
          )}
          onClick={handleOnClick(idx)}
          key={label}
        >
          <Typography
            variant="body2"
            className={clsx(
              classes.typogrpahy,
              activeIndex === idx && classes.activeTypoGraphy
            )}
          >
            {label}
          </Typography>
        </div>
      ))}
    </div>
  )
}

ButtonGroup.propTypes = {}
ButtonGroup.defaultProps = {
  setActive: null,
  labels: [],
  activeIndex: null,
}

export default ButtonGroup
