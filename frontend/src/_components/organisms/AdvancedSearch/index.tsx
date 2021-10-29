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
import Icon from '../../atoms/materialIcons'
import SelectComponent from '../../molecules/Dropdown'
import SearchCard from '../SearchCard'
import AddNew from '../addnew/index'
type SearchCardProps = {
  searchResults: any
  searchedValue: string
  handleAdvancedSearch: () => void
}

const useStyles = makeStyles({
  card: {
    //maxWidth: theme.spacing(156),
    //height: theme.spacing(154),
    width:"624px",
    boxSizing: 'border-box',
    boxShadow: 'none',
    border: '1px solid',
    borderColor: COLORS.TEXT_500,
    borderRadius: theme.spacing(3),
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
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
  grid: {
    display: 'flex',
  },
  icon: {
    paddingTop: theme.spacing(5),
  },
  addNewButton: {
    marginTop: theme.spacing(7.5),
    width:"114px",
    height:"32px"
  },
  clearAll: {
    marginLeft: theme.spacing(70),
    marginTop: theme.spacing(7.5),
    width:"90px",
    height:"32px",
    marginRight:theme.spacing(2.5)
  },
  searchButton: {
   // marginLeft: '20px',
    marginTop: theme.spacing(7.5),
    width:"90px",
    height:"32px",
    paddingBottom:theme.spacing(4)
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




const AdvanceSearchCard = ({
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
  const[add,setAdd]=useState(['1'])

  const[addVal,setAddVal]=useState('2')

  const addClickHandler=(id:string)=>
  {
    console.log(id)
    setAdd(add.filter((temp)=>temp!==id))
  }

  const handleAddNewClick=()=>
  {
    setAdd([...add,addVal])
    setAddVal(parseInt(addVal)+1+"")
  }
  const handleButtonSearch=()=>
  {

    console.log(searchResults)

  }

  const handleButtonClear=()=>
  {
    setAdd([])

  }

const addNewDiv=add.map((id)=><AddNew id={id} onClick={addClickHandler} />)


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

  return (
    <Card className={classes.card} data-testid="searchCard">
      <CardContent className={classes.cardContent}>
        <Grid container>
          <Grid container justifyContent="space-between">
            <Grid item xs={9} className={classes.grid}>
              <Icon icon="arrow_back" />
              <Typography
                variant="body1"
                styles={{
                  color: COLORS.TERTIARY_GREY_50,
                  paddingLeft: '10px',
                  paddingTop: '3px',
                }}
              >
                Advanced Search
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography
                variant="body2"
                styles={{
                  color: COLORS.TEXT_500,
                  paddingTop: '16px',
                  paddingLeft: '6px',
                }}
              >
                Search Tables
              </Typography>
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
          {addNewDiv}
          <Grid>
            <ButtonComponent
              variant="outlined"
              // color={
              //   buttons[2].value === true ? COLORS.TEXT_900 : COLORS.TEXT_100
              // }
              className={classes.addNewButton}
              onClick={handleAddNewClick}
              startIcon="add"
            >
              <Typography
                variant="body2"
                styles={{
                  color: COLORS.TEXT_100,
                }}
              >
                Add New
              </Typography>
            </ButtonComponent>
            <ButtonComponent
              variant="outlined"
              // color={
              //   buttons[2].value === true ? COLORS.TEXT_900 : COLORS.TEXT_100
              // }
              className={classes.clearAll}
              onClick={handleButtonClear}
            >
              <Typography
                variant="body2"
                styles={{
                  color: COLORS.TEXT_100,
                }}
              >
                Clear All
              </Typography>
            </ButtonComponent>
            <ButtonComponent
              variant="contained"
              color={COLORS.TEXT_900}
              backgroundColor={COLORS.TERTIARY_GREY_50}
              className={classes.searchButton}
              onClick={ handleButtonSearch}
              startIcon="search"
            >
              <Typography
                variant="body2"
                styles={{
                  color: COLORS.TEXT_900,
                }}
              >
                Search
              </Typography>
            </ButtonComponent>
          </Grid>
          <Grid>
            {/* {SearchResult={value !=="true" ? true : false}} */}
            {/* {SearchResult(searchResults, searchedValue)} */}
            </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default AdvanceSearchCard
