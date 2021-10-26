import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import MuiAccordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Typography from '../../atoms/Typography'
import { COLORS } from '../../../core-utils/theme'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      color: COLORS.TEXT_500,
    },
    headingActive: {
      color: COLORS.TEXT_100,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    noBoxShadow: {
      boxShadow: 'none',
    },
  })
)

type AccordionProps = {
  expanded?: boolean
  setExpanded?: (arg0: boolean) => void
  header: string
  children: any
  expandIcon?: React.ReactNode
  shrinkIcon?: React.ReactNode
  showBoxShadow?: boolean
  showActive?: boolean
}

const Accordion = ({
  expanded,
  setExpanded,
  header,
  children,
  expandIcon,
  shrinkIcon,
  showBoxShadow,
  showActive,
}: AccordionProps) => {
  const classes = useStyles()

  const handleChange = (
    event: React.ChangeEvent<Record<string, unknown>>,
    isExpanded: boolean
  ) => {
    setExpanded?.(!isExpanded)
  }

  const getActiveIcon = (icon: any) =>
    icon
      ? React.cloneElement(icon, {
          className: showActive ? classes.headingActive : classes.heading,
        })
      : null

  return (
    <div className={classes.root}>
      <MuiAccordion
        expanded={expanded}
        onChange={handleChange}
        className={!showBoxShadow ? classes.noBoxShadow : undefined}
      >
        <AccordionSummary
          expandIcon={
            ((expandIcon || shrinkIcon) &&
              (!expanded
                ? expandIcon ?? shrinkIcon
                : getActiveIcon(shrinkIcon ?? expandIcon))) ?? (
              <ExpandMoreIcon
                className={
                  expanded && showActive
                    ? classes.headingActive
                    : classes.heading
                }
              />
            )
          }
        >
          <Typography
            variant="subtitle2"
            className={
              expanded && showActive ? classes.headingActive : classes.heading
            }
          >
            {header}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </MuiAccordion>
    </div>
  )
}

Accordion.propTypes = {}

Accordion.defaultProps = {
  expanded: false,
  setExpanded: null,
  expandIcon: null,
  shrinkIcon: null,
  showBoxShadow: false,
  showActive: true,
}

export default Accordion
