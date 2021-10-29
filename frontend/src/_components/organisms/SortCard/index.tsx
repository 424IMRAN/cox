/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { Card, Grid, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { SortCategoriesInArray } from '../../../constants'
import theme, { COLORS } from '../../../core-utils/theme'
import Icon from '../../atoms/materialIcons'
import Switch from '../../atoms/Switch'
import Typography from '../../atoms/Typography'
import ButtonGroup from '../../molecules/ButtonGroup'
import SelectComponent from '../../molecules/Dropdown'

const useStyles = makeStyles({
  card: {
    maxWidth: '550px',
    minHeight: theme.spacing(24),
    boxSizing: 'border-box',
    padding: theme.spacing(0),
    boxShadow: 'none',
    border: '1px solid',
    borderColor: COLORS.SECONDARY_COLOR_100,
    borderRadius: theme.spacing(3),
  },
  grid1: {
    padding: '16px 26px 9px  16px',
  },
  grid2: {
    padding: '9px 0px 9px 16px',
    height: '38px',
  },
  sortByGrid: { width: '82px', marginTop: '24px' },
  rightIconStyle: { marginTop: '1px', cursor: 'pointer' },
  listItem: {
    padding: theme.spacing(0),
  },
  divider: {
    width: '100%',
    height: '1px',
    backgroundColor: COLORS.TRANSPARENT_GREY_500,
  },
  deleteSortCategory: {
    cursor: 'pointer',
  },
})
const SortCard = () => {
  const classes = useStyles()
  const [isToggled, setToggled] = useState(true)
  const [sortCategory, setSortCategory] = useState<string[]>([])
  const [sortButtonGroups, setSortButtonGroups] = useState<number[]>([])

  const handleSortDropDown = (event: any) => {
    const { value } = event.target

    if (!sortCategory.includes(value) && value.trim().length !== 0) {
      setSortCategory([...sortCategory, value])
      setSortButtonGroups([...sortButtonGroups, 0])
    }
  }

  const handleButtonGroup = (position: number) => {
    const setNewButtonGroup = sortButtonGroups.map((value, index) => {
      if (index === position && value === 0) return 1
      if (index === position && value === 1) return 0
      return value
    })
    setSortButtonGroups(setNewButtonGroup)
  }
  const deleteCategory = (category: string) => {
    const newCategories = sortCategory.filter((item) => item !== category)
    setSortCategory(newCategories)
  }

  const changeDropDown = (position: number, data: any) => {
    if (sortCategory.includes(data.target.value)) return
    const newDropDown = sortCategory.map((value, index) => {
      if (index === position) return data.target.value
      return value
    })
    setSortCategory(newDropDown)
  }

  const selectedSortCategory = (list: any) => {
    return list.map((data: string, index: number) => {
      return (
        <Grid
          container
          item
          alignItems="center"
          xs={12}
          style={{ marginTop: '10px' }}
        >
          <Grid item>
            <Typography variant="body2">Sort by</Typography>
          </Grid>
          <Grid item style={{ marginLeft: '30px' }} xs={3}>
            <SelectComponent
              options={SortCategoriesInArray}
              variant="filled"
              placeholderValue=""
              placeholderColor={COLORS.TEXT_100}
              handleChange={(value: any) => changeDropDown(index, value)}
              disable={false}
              styles={{ minWidth: '50px' }}
              value={sortCategory[index]}
            />
          </Grid>
          <Grid item style={{ marginLeft: '14px' }}>
            <Typography variant="body2">from</Typography>
          </Grid>
          <Grid
            item
            style={{ marginLeft: '10px', height: '30px', width: '200px' }}
          >
            <ButtonGroup
              labels={['A-Z', 'Z-A']}
              activeIndex={sortButtonGroups[index]}
              setActive={() => handleButtonGroup(index)}
            />
          </Grid>
          <Grid item style={{ marginLeft: '25px', marginTop: '10px' }}>
            <Icon
              icon="close"
              onClick={() => deleteCategory(data)}
              className={classes.deleteSortCategory}
            />
          </Grid>
        </Grid>
      )
    })
  }

  return (
    <Card className={classes.card} data-testid="sortCard">
      <Grid container className={classes.grid1}>
        {sortCategory.length === 0 && (
          <Grid item xs={12}>
            <Typography variant="body2" styles={{ color: COLORS.TEXT_700 }}>
              No sorts are applied to this view yet
            </Typography>
          </Grid>
        )}
        {sortCategory.length !== 0 && selectedSortCategory(sortCategory)}
        <Grid item className={classes.sortByGrid} data-testid="sortDropdown">
          <SelectComponent
            options={SortCategoriesInArray}
            variant="filled"
            placeholderValue="Sort by"
            placeholderColor={COLORS.TEXT_100}
            handleChange={(value: any) => handleSortDropDown(value)}
            disable={false}
            styles={{ minWidth: '50px' }}
            value=""
          />
        </Grid>
      </Grid>
      {sortCategory.length !== 0 && (
        <Grid
          container
          item
          xs={12}
          style={{ backgroundColor: COLORS.TRANSPARENT_GREY_300 }}
          className={classes.grid2}
        >
          <Grid item>
            <Typography variant="body2" styles={{ color: COLORS.TEXT_500 }}>
              Keep Sort
            </Typography>
          </Grid>
          <Grid item style={{ marginTop: '-8px' }}>
            <Switch
              checked={isToggled}
              setChecked={() => setToggled(!isToggled)}
            />
          </Grid>
        </Grid>
      )}
    </Card>
  )
}

export default SortCard
