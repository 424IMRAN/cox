/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react'
import { Card, CardContent, Grid, makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import Divider from '../../atoms/Divider'
import theme, { COLORS } from '../../../core-utils/theme'
import CheckBoxComponent from '../../atoms/CheckBox'
import Typography from '../../atoms/Typography'
import ButtonComponent from '../../molecules/Button'

type SearchCardProps = {
  searchResults: any
  searchedValue: string
  handleAdvancedSearch: () => void
}

const useStyles = makeStyles({
  card: {
    maxWidth: theme.spacing(156),
    height: theme.spacing(154),
    boxSizing: 'border-box',
    boxShadow: 'none',
    border: '1px solid',
    borderColor: COLORS.SECONDARY_COLOR_100,
    borderRadius: theme.spacing(3),
    padding: theme.spacing(4),
  },
  cardContent: {
    padding: theme.spacing(0),
  },
  buttonsGrid: {
    marginTop: theme.spacing(3),
  },
  currentButton: {
    marginRight: theme.spacing(2.5),
    height: theme.spacing(9),
  },
  scheduledButtons: {
    height: theme.spacing(9),
    marginRight: theme.spacing(2.5),
  },
  draftButtons: {
    height: theme.spacing(9),
  },
  checkboxRow: {
    marginTop: theme.spacing(3),
  },
  attributes: {
    display: 'inline',
    color: COLORS.TEXT_500,
    marginLeft: theme.spacing(2),
  },
  divider: {
    width: '100%',
    height: '1px',
    backgroundColor: COLORS.TERTIARY_GREY_900,
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(3),
  },
  searchResultButton: {
    marginRight: '12.19px',
  },
  hoverContained: {
    '&:hover': {
      backgroundColor: COLORS.TERTIARY_GREY_50,
    },
  },
  advanceSearch: {
    cursor: 'pointer',
  },
})

const SearchResult = (results: any, searchedValue: string) => {
  const classes = useStyles()
  const [isHovering, setIsHovering] = useState(false)
  const [position, setPosition] = useState(-1)

  const handleMouseOver = (index: number) => {
    setIsHovering(true)
    setPosition(index)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }

  return results.map(
    (result: { title: string; detail: string }, index: number) => {
      const indexes = result.title.indexOf(searchedValue)
      const id = `mouseEnter${index}`
      return (
        <>
          <div
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={handleMouseOut}
            data-testid={id}
            key={id}
            style={{ width: '575px' }}
          >
            {isHovering && position === index ? (
              <Grid
                container
                justifyContent="space-between"
                style={{ paddingTop: '0px', paddingBottom: '20px' }}
              >
                <Grid item>
                  <Typography variant="body2">
                    <>
                      {result.title.substring(0, indexes)}
                      <Typography
                        variant="body1"
                        styles={{ display: 'inline' }}
                      >
                        {searchedValue}
                      </Typography>
                      {result.title.substring(indexes + searchedValue.length)}
                    </>
                  </Typography>
                  <Typography
                    variant="caption2"
                    styles={{ color: COLORS.TEXT_500 }}
                  >
                    {result.detail.length > 60
                      ? `${result.detail.substring(0, 60)}...`
                      : result.detail}
                  </Typography>
                </Grid>
                <Grid item>
                  <ButtonComponent
                    variant="outlined"
                    width="83.27px"
                    height={theme.spacing(8)}
                    className={classes.searchResultButton}
                  >
                    <Typography variant="body2">History</Typography>
                  </ButtonComponent>
                  <ButtonComponent
                    variant="contained"
                    width="83.27px"
                    height={theme.spacing(8)}
                    backgroundColor={COLORS.TERTIARY_GREY_50}
                    className={classes.hoverContained}
                  >
                    <Typography
                      variant="body2"
                      styles={{ color: COLORS.TEXT_900 }}
                    >
                      Edit
                    </Typography>
                  </ButtonComponent>
                </Grid>
              </Grid>
            ) : (
              <Grid item style={{ paddingTop: '0px', paddingBottom: '20px' }}>
                <Typography variant="body2">
                  <>
                    {result.title.substring(0, indexes)}
                    <Typography variant="body1" styles={{ display: 'inline' }}>
                      {searchedValue}
                    </Typography>
                    {result.title.substring(indexes + searchedValue.length)}
                  </>
                </Typography>
                <Typography
                  variant="caption2"
                  styles={{ color: COLORS.TEXT_500 }}
                >
                  {`${result.detail}`}
                </Typography>
              </Grid>
            )}
          </div>
        </>
      )
    }
  )
}

const SearchCard = ({
  searchedValue,
  searchResults,
  handleAdvancedSearch,
}: SearchCardProps) => {
  const classes = useStyles()

  const [buttons, setButtons] = useState([
    { label: 'current', value: true },
    { label: 'scheduled', value: false },
    { label: 'draft', value: false },
  ])
  const [checkboxes, setCheckBoxes] = useState([
    { label: 'eventId', value: false },
    { label: 'serviceName', value: false },
    { label: 'neType', value: false },
    { label: 'alertGroup', value: false },
    { label: 'type', value: false },
    { label: 'condition', value: false },
    { label: 'severity', value: false },
    { label: 'escalation', value: false },
    { label: 'soakTime', value: false },
    { label: 'agent', value: false },
    { label: 'vendor', value: false },
  ])

  const handleButton = (label: string) => {
    const newButton = buttons.map((button) => {
      if (label === button.label && button.value === false)
        return { label: button.label, value: true }
      if (label === button.label && button.value === true)
        return { label: button.label, value: true }
      return { label: button.label, value: false }
    })

    setButtons(newButton)
  }

  const handleCheckBox = (label: string) => {
    const setNewCheckBox = checkboxes.map((checkbox) => {
      if (checkbox.label === label)
        return { label: checkbox.label, value: !checkbox.value }
      return { label: checkbox.label, value: checkbox.value }
    })
    setCheckBoxes(setNewCheckBox)
  }

  return (
    <Card className={classes.card} data-testid="searchCard">
      <CardContent className={classes.cardContent}>
        <Grid container>
          <Grid container justifyContent="space-between">
            <Grid item xs={9}>
              <Typography variant="body2" styles={{ color: COLORS.TEXT_500 }}>
                Search Tables
              </Typography>
            </Grid>
            <Grid item xs="auto">
              <div
                onClick={handleAdvancedSearch}
                className={classes.advanceSearch}
              >
                <Typography
                  variant="body1"
                  styles={{ color: COLORS.TERTIARY_GREY_50 }}
                >
                  Advanced Search
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.buttonsGrid}>
            <ButtonComponent
              endIcon={buttons[0].value === true ? 'done' : ''}
              variant="contained"
              backgroundColor={
                buttons[0].value === true
                  ? COLORS.TERTIARY_GREY_50
                  : COLORS.TRANSPARENT_GREY_100
              }
              color={
                buttons[0].value === true ? COLORS.TEXT_900 : COLORS.TEXT_100
              }
              className={clsx(
                classes.currentButton,
                buttons[0].value === true && classes.hoverContained
              )}
              onClick={() => handleButton('current')}
            >
              <Typography
                variant="body2"
                styles={{
                  color:
                    buttons[0].value === true
                      ? COLORS.TEXT_900
                      : COLORS.TEXT_100,
                }}
              >
                Current
              </Typography>
            </ButtonComponent>
            <ButtonComponent
              endIcon={buttons[1].value === true ? 'done' : ''}
              variant="contained"
              backgroundColor={
                buttons[1].value === true
                  ? COLORS.TERTIARY_GREY_50
                  : COLORS.TRANSPARENT_GREY_100
              }
              color={
                buttons[1].value === true ? COLORS.TEXT_900 : COLORS.TEXT_100
              }
              className={clsx(
                classes.scheduledButtons,
                buttons[1].value === true && classes.hoverContained
              )}
              onClick={() => handleButton('scheduled')}
            >
              <Typography
                variant="body2"
                styles={{
                  color:
                    buttons[1].value === true
                      ? COLORS.TEXT_900
                      : COLORS.TEXT_100,
                }}
              >
                Scheduled
              </Typography>
            </ButtonComponent>
            <ButtonComponent
              endIcon={buttons[2].value === true ? 'done' : ''}
              variant="contained"
              backgroundColor={
                buttons[2].value === true
                  ? COLORS.TERTIARY_GREY_50
                  : COLORS.TRANSPARENT_GREY_100
              }
              color={
                buttons[2].value === true ? COLORS.TEXT_900 : COLORS.TEXT_100
              }
              className={clsx(
                classes.draftButtons,
                buttons[2].value === true && classes.hoverContained
              )}
              onClick={() => handleButton('draft')}
            >
              <Typography
                variant="body2"
                styles={{
                  color:
                    buttons[2].value === true
                      ? COLORS.TEXT_900
                      : COLORS.TEXT_100,
                }}
              >
                Draft
              </Typography>
            </ButtonComponent>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              marginTop: theme.spacing(5),
              marginBottom: theme.spacing(3.5),
            }}
          >
            <Typography variant="body2" styles={{ color: COLORS.TEXT_500 }}>
              Search Attributes
            </Typography>
          </Grid>
          <Grid container>
            <Grid container item spacing={4}>
              <Grid item xs={3}>
                <CheckBoxComponent
                  isChecked={checkboxes[0].value}
                  handleChange={() => handleCheckBox('eventId')}
                />
                <Typography variant="body2" className={classes.attributes}>
                  Event Id
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <CheckBoxComponent
                  isChecked={checkboxes[1].value}
                  handleChange={() => handleCheckBox('serviceName')}
                />
                <Typography variant="body2" className={classes.attributes}>
                  Service Name
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <CheckBoxComponent
                  isChecked={checkboxes[2].value}
                  handleChange={() => handleCheckBox('neType')}
                />
                <Typography variant="body2" className={classes.attributes}>
                  NE Type
                </Typography>
              </Grid>
              <Grid item xs={3} style={{ textAlign: 'right' }}>
                <CheckBoxComponent
                  isChecked={checkboxes[3].value}
                  handleChange={() => handleCheckBox('alertGroup')}
                />
                <Typography variant="body2" className={classes.attributes}>
                  Alert Group
                </Typography>
              </Grid>
            </Grid>
            <Grid container item spacing={4} className={classes.checkboxRow}>
              <Grid item xs={3}>
                <CheckBoxComponent
                  isChecked={checkboxes[4].value}
                  handleChange={() => handleCheckBox('type')}
                />
                <Typography variant="body2" className={classes.attributes}>
                  Type
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <CheckBoxComponent
                  isChecked={checkboxes[5].value}
                  handleChange={() => handleCheckBox('condition')}
                />
                <Typography variant="body2" className={classes.attributes}>
                  Condition
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <CheckBoxComponent
                  isChecked={checkboxes[6].value}
                  handleChange={() => handleCheckBox('severity')}
                />
                <Typography variant="body2" className={classes.attributes}>
                  Severity
                </Typography>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ textAlign: 'right', paddingRight: '15px' }}
              >
                <CheckBoxComponent
                  isChecked={checkboxes[7].value}
                  handleChange={() => handleCheckBox('escalation')}
                />
                <Typography variant="body2" className={classes.attributes}>
                  Escalation
                </Typography>
              </Grid>
            </Grid>
            <Grid container item spacing={4} className={classes.checkboxRow}>
              <Grid item xs={3}>
                <CheckBoxComponent
                  isChecked={checkboxes[8].value}
                  handleChange={() => handleCheckBox('soakTime')}
                />
                <Typography variant="body2" className={classes.attributes}>
                  Soak Time
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <CheckBoxComponent
                  isChecked={checkboxes[9].value}
                  handleChange={() => handleCheckBox('agent')}
                />
                <Typography variant="body2" className={classes.attributes}>
                  Agent
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <CheckBoxComponent
                  isChecked={checkboxes[10].value}
                  handleChange={() => handleCheckBox('vendor')}
                />
                <Typography variant="body2" className={classes.attributes}>
                  Vendor
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Divider variant="fullWidth" customClass={classes.divider} />

          <Grid container justifyContent="space-between">
            <Grid item xs={9}>
              <Typography variant="body2" styles={{ color: COLORS.TEXT_500 }}>
                Results
              </Typography>
            </Grid>
            <Grid item xs="auto">
              <ButtonComponent
                variant="outlined"
                startIcon="download_outlined"
                width="105px"
                height="28px"
              >
                <Typography variant="body2" styles={{ color: COLORS.TEXT_500 }}>
                  Download
                </Typography>
              </ButtonComponent>
            </Grid>
          </Grid>
          <Grid
            container
            style={{
              marginTop: theme.spacing(1),
              maxHeight: theme.spacing(71),
              overflow: 'auto',
            }}
          >
            {SearchResult(searchResults, searchedValue)}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default SearchCard
