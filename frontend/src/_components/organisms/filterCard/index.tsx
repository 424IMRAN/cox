/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Menu,
  MenuItem,
} from '@material-ui/core'
import { useState } from 'react'
import reverse from '../../../assets/reverse.svg'
import theme, { COLORS } from '../../../core-utils/theme'
import Divider from '../../atoms/Divider'
import Icon from '../../atoms/materialIcons'
import SvgIcon from '../../atoms/svgIcons'
import TextField from '../../atoms/TextField'
import Typography from '../../atoms/Typography'
import Accordion from '../../molecules/Accordion'
import ButtonComponent from '../../molecules/Button'
import List from '../../molecules/List'

type FilterListProps = {
  savedFilters: any
  isSaved: boolean
}

const useStyles = makeStyles({
  card: {
    maxWidth: '246px',
    height: theme.spacing(126),
    boxShadow: 'none',
    border: '1px solid',
    borderColor: COLORS.TRANSPARENT_GREY_300,
    borderRadius: theme.spacing(1),
    boxSizing: 'border-box',
  },
  cardContent: {
    padding: theme.spacing(0),
  },
  grid1: {
    paddingTop: '17px',
    paddingRight: theme.spacing(5),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(4),
  },
  resetIcon: {
    marginTop: '5px',
  },
  closeIcon: {
    marginLeft: '16.64px',
    fontSize: '18px',
    marginTop: theme.spacing(1),
  },
  divider: {
    width: '100%',
    height: '1px',
    backgroundColor: COLORS.TRANSPARENT_GREY_300,
    marginBottom: theme.spacing(4),
  },
  grid2: {
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
  },
  searchSavedFilter: {
    borderRadius: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  rightIconStyle: { marginRight: '-15px', cursor: 'pointer' },
  grid3: {
    padding: '14px 16px',
  },
  listItem: {
    padding: theme.spacing(0),
    marginBottom: theme.spacing(1),
  },
  list: {
    marginBottom: theme.spacing(5),
  },
  savedFilterListItem: {
    padding: theme.spacing(0),
    marginBottom: '15px',
  },
})
const FilterList = ({ savedFilters, isSaved }: FilterListProps) => {
  const classes = useStyles()
  const [searchFieldValue, setSearchFieldValue] = useState('')
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleMenuItemClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleSavedFilters = (position: string | number, value: string) => {
    console.log(`${position} ${value}`)
  }

  const [accordians, setAccordians] = useState([
    { label: 'alertGroup', value: false },
    { label: 'type', value: false },
    { label: 'condition', value: false },
    { label: 'severity', value: false },
    { label: 'soakTime', value: false },
    { label: 'soakTally', value: false },
    { label: 'alarmAction', value: false },
    { label: 'statusFlag', value: false },
    { label: 'savedFilter', value: false },
  ])

  const handleAccordian = (position: number) => {
    const setNewAccordian = accordians.map((accordian, index) => {
      if (index === position)
        return { label: accordian.label, value: !accordian.value }
      return { label: accordian.label, value: accordian.value }
    })
    setAccordians(setNewAccordian)
  }
  const [checkboxesType, setCheckboxesType] = useState([
    { label: 'NotSet', value: false },
    { label: 'Problem', value: false },
    { label: 'Resolution', value: false },
  ])
  const handleCheckBoxType = (position: number | string) => {
    const setNewCheckBox = checkboxesType.map((checkbox, index) => {
      if (index === position)
        return { label: checkbox.label, value: !checkbox.value }
      return { label: checkbox.label, value: checkbox.value }
    })
    setCheckboxesType(setNewCheckBox)
  }
  const [checkboxesSeverity, setCheckboxesSeverity] = useState([
    { label: 'Critical', value: false },
    { label: 'Major', value: false },
    { label: 'Minor', value: false },
    { label: 'Warning', value: false },
    { label: 'Indeterminate', value: false },
    { label: 'clear', value: false },
  ])
  const handleCheckBoxSeverity = (position: number | string) => {
    const setNewCheckBox = checkboxesSeverity.map((checkboxSeverity, index) => {
      if (index === position)
        return { label: checkboxSeverity.label, value: !checkboxSeverity.value }
      return { label: checkboxSeverity.label, value: checkboxSeverity.value }
    })
    setCheckboxesSeverity(setNewCheckBox)
  }
  const [checkboxesSoakTally, setCheckboxesSoakTally] = useState([
    { label: '1-10', value: false },
    { label: '11-20', value: false },
    { label: '21-30', value: false },
    { label: '31-40', value: false },
    { label: '41-50', value: false },
    { label: '51-60', value: false },
    { label: '61-70', value: false },
    { label: '71-80', value: false },
    { label: '81-90', value: false },
    { label: '91-99+', value: false },
  ])
  const handleCheckBoxSoakTally = (position: number | string) => {
    const setNewCheckBox = checkboxesSoakTally.map(
      (checkboxSoaktally, index) => {
        if (index === position)
          return {
            label: checkboxSoaktally.label,
            value: !checkboxSoaktally.value,
          }
        return {
          label: checkboxSoaktally.label,
          value: checkboxSoaktally.value,
        }
      }
    )
    setCheckboxesSoakTally(setNewCheckBox)
  }
  const [checkboxesAlarmAction, setCheckboxesAlarmAction] = useState([
    { label: 'scopeId', value: false },
    { label: 'noticket', value: false },
    { label: 'trend', value: false },
  ])
  const handleCheckBoxAlarmAction = (position: number | string) => {
    const setNewCheckBox = checkboxesAlarmAction.map(
      (checkboxAlarmAction, index) => {
        if (index === position)
          return {
            label: checkboxAlarmAction.label,
            value: !checkboxAlarmAction.value,
          }
        return {
          label: checkboxAlarmAction.label,
          value: checkboxAlarmAction.value,
        }
      }
    )
    setCheckboxesAlarmAction(setNewCheckBox)
  }

  return (
    <Card className={classes.card} data-testid="filterId">
      <CardContent className={classes.cardContent}>
        <Grid
          container
          className={classes.grid1}
          justifyContent="space-between"
        >
          <Grid item xs={9}>
            <Typography variant="subtitle1">Filter</Typography>
          </Grid>
          <Grid container xs={3}>
            <Grid item>
              <SvgIcon icon={reverse} className={classes.resetIcon} />
            </Grid>
            <Grid item>
              <Icon icon="close" className={classes.closeIcon} />
            </Grid>
          </Grid>
        </Grid>
        <Divider variant="fullWidth" customClass={classes.divider} />
        <Grid
          container
          className={classes.grid2}
          style={{
            maxHeight: '370px',
            overflow: 'auto',
          }}
        >
          <Grid item xs={12}>
            <Accordion
              header="Saved Filters"
              setExpanded={() => handleAccordian(8)}
              expanded={accordians[8].value}
            >
              <Grid
                container
                style={{
                  maxHeight: '260px',
                  overflow: 'auto',
                }}
              >
                <Grid item xs={12}>
                  <TextField
                    variant="filled"
                    value={searchFieldValue}
                    handleChange={(value) => setSearchFieldValue(value)}
                    placeholder="Search..."
                    endAdorment={
                      <Icon
                        icon="search"
                        iconColor={COLORS.TERTIARY_GREY_600}
                      />
                    }
                    customStyle={classes.searchSavedFilter}
                  />
                </Grid>
                <Grid item xs={12}>
                  <List
                    list={savedFilters}
                    rightIcon={<Icon icon="more_horiz_outlined" />}
                    itemStyle={classes.savedFilterListItem}
                    secondaryItemStyle={classes.rightIconStyle}
                    handleActionClick={handleMenuItemClick}
                    onClick={(index, value) => handleSavedFilters(index, value)}
                  />
                </Grid>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  getContentAnchorEl={null}
                >
                  <MenuItem onClick={handleClose}>
                    <Icon
                      icon="edit"
                      type="filled"
                      iconColor={COLORS.TERTIARY_GREY_600}
                    />{' '}
                    <Typography
                      variant="body2"
                      styles={{ color: COLORS.TEXT_500, marginLeft: '10px' }}
                    >
                      Edit
                    </Typography>
                  </MenuItem>
                  <Divider variant="fullWidth" />
                  <MenuItem onClick={handleClose}>
                    <Icon
                      icon="edit"
                      type="filled"
                      iconColor={COLORS.TERTIARY_GREY_600}
                    />{' '}
                    <Typography
                      variant="body2"
                      styles={{ color: COLORS.TEXT_500, marginLeft: '10px' }}
                    >
                      Rename
                    </Typography>
                  </MenuItem>

                  <Divider variant="fullWidth" />
                  <MenuItem onClick={handleClose}>
                    <Icon
                      icon="delete"
                      type="filled"
                      iconColor={COLORS.TERTIARY_GREY_600}
                    />{' '}
                    <Typography
                      variant="body2"
                      styles={{ color: COLORS.TEXT_500, marginLeft: '10px' }}
                    >
                      Delete
                    </Typography>
                  </MenuItem>
                </Menu>
              </Grid>
            </Accordion>
          </Grid>
          <Divider variant="fullWidth" customClass={classes.divider} />
          <Grid item xs={12}>
            <Accordion
              expandIcon={<Icon icon="add" />}
              shrinkIcon={<Icon icon="remove" />}
              header="Alert Group"
              setExpanded={() => handleAccordian(0)}
              expanded={accordians[0].value}
            >
              data
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            <Accordion
              expandIcon={<Icon icon="add" />}
              shrinkIcon={<Icon icon="remove" />}
              header="Type"
              setExpanded={() => handleAccordian(1)}
              expanded={accordians[1].value}
            >
              <List
                list={[
                  { checked: checkboxesType[0].value, value: 'Not set (0)' },
                  { checked: checkboxesType[1].value, value: 'Problem (1)' },
                  { checked: checkboxesType[2].value, value: 'Resolution (2)' },
                ]}
                onClick={(index) => handleCheckBoxType(index)}
                checkedList
                itemStyle={classes.listItem}
                customStyle={classes.list}
              />
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            <Accordion
              expandIcon={<Icon icon="add" />}
              shrinkIcon={<Icon icon="remove" />}
              header="Condition"
              setExpanded={() => handleAccordian(2)}
              expanded={accordians[2].value}
            >
              data
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            <Accordion
              expandIcon={<Icon icon="add" />}
              shrinkIcon={<Icon icon="remove" />}
              header="Severity"
              setExpanded={() => handleAccordian(3)}
              expanded={accordians[3].value}
            >
              <List
                list={[
                  {
                    checked: checkboxesSeverity[0].value,
                    value: 'Critical (5)',
                  },
                  { checked: checkboxesSeverity[1].value, value: 'Major (4)' },
                  { checked: checkboxesSeverity[2].value, value: 'Minor (3)' },
                  {
                    checked: checkboxesSeverity[3].value,
                    value: 'Warning (2)',
                  },
                  {
                    checked: checkboxesSeverity[4].value,
                    value: 'Indeterminate (1)',
                  },
                  { checked: checkboxesSeverity[5].value, value: 'Clear (0)' },
                ]}
                checkedList
                onClick={(index) => handleCheckBoxSeverity(index)}
                itemStyle={classes.listItem}
                customStyle={classes.list}
              />
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            <Accordion
              expandIcon={<Icon icon="add" />}
              shrinkIcon={<Icon icon="remove" />}
              header="Soak Time"
              setExpanded={() => handleAccordian(4)}
              expanded={accordians[4].value}
            >
              data
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            <Accordion
              expandIcon={<Icon icon="add" />}
              shrinkIcon={<Icon icon="remove" />}
              header="Soak Tally"
              setExpanded={() => handleAccordian(5)}
              expanded={accordians[5].value}
            >
              <List
                list={[
                  {
                    checked: checkboxesSoakTally[0].value,
                    value: '1-10',
                  },
                  { checked: checkboxesSoakTally[1].value, value: '11-20' },
                  { checked: checkboxesSoakTally[2].value, value: '21-30' },
                  {
                    checked: checkboxesSoakTally[3].value,
                    value: '31-40',
                  },
                  {
                    checked: checkboxesSoakTally[4].value,
                    value: '41-50',
                  },
                  { checked: checkboxesSoakTally[5].value, value: '51-60' },
                  { checked: checkboxesSoakTally[6].value, value: '61-70' },
                  { checked: checkboxesSoakTally[7].value, value: '71-80' },
                  { checked: checkboxesSoakTally[8].value, value: '81-90' },
                  { checked: checkboxesSoakTally[9].value, value: '91-99+' },
                ]}
                checkedList
                onClick={(index) => handleCheckBoxSoakTally(index)}
                itemStyle={classes.listItem}
                customStyle={classes.list}
              />
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            <Accordion
              expandIcon={<Icon icon="add" />}
              shrinkIcon={<Icon icon="remove" />}
              header="Alarm Action"
              setExpanded={() => handleAccordian(6)}
              expanded={accordians[6].value}
            >
              <List
                list={[
                  {
                    checked: checkboxesAlarmAction[0].value,
                    value: 'Scope ID',
                  },
                  {
                    checked: checkboxesAlarmAction[1].value,
                    value: 'No Ticket',
                  },
                  {
                    checked: checkboxesAlarmAction[2].value,
                    value: 'Trend',
                  },
                ]}
                checkedList
                onClick={(index) => handleCheckBoxAlarmAction(index)}
                itemStyle={classes.listItem}
                customStyle={classes.list}
              />
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            <Accordion
              expandIcon={<Icon icon="add" />}
              shrinkIcon={<Icon icon="remove" />}
              header="Status Flag"
              setExpanded={() => handleAccordian(7)}
              expanded={accordians[7].value}
            >
              data
            </Accordion>
          </Grid>
        </Grid>

        <Divider
          variant="fullWidth"
          customClass={classes.divider}
          customStyle={{ marginBottom: '0px' }}
        />
        <Grid
          container
          className={classes.grid3}
          justifyContent="space-between"
        >
          {isSaved ? (
            <ButtonComponent
              startIcon="save"
              startIconType="filled"
              variant="outlined"
              height="32px"
              fullWidth
              iconColor={COLORS.TERTIARY_GREY_50}
              color={COLORS.TERTIARY_GREY_50}
            >
              <Typography variant="body2">Save Filter</Typography>
            </ButtonComponent>
          ) : (
            <>
              <Grid item style={{ width: '101px', marginRight: '10px' }}>
                <ButtonComponent variant="outlined" height="32px" fullWidth>
                  <Typography variant="body2">Clear</Typography>
                </ButtonComponent>
              </Grid>
              <Grid item style={{ width: '101px' }}>
                <ButtonComponent
                  variant="contained"
                  backgroundColor={COLORS.TERTIARY_GREY_900}
                  height="32px"
                  fullWidth
                >
                  <Typography
                    variant="body2"
                    styles={{ color: COLORS.TEXT_900 }}
                  >
                    Save
                  </Typography>
                </ButtonComponent>
              </Grid>
            </>
          )}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default FilterList
