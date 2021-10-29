import { Grid, makeStyles, Theme } from '@material-ui/core'
import React from 'react'
import clsx from 'clsx'
import HistoryIcon from '@material-ui/icons/History'
import EditIcon from '@material-ui/icons/Edit'
import { COLORS } from '../../../../core-utils/theme'
import Typography from '../../../atoms/Typography'
import NonEditableIcon from '../../../../assets/non-editable.svg'
import CheckBox from '../../../atoms/CheckBox'
import Button from '../../../molecules/Button'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rootCol: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  textStyle: {
    color: COLORS.TEXT_500,
    padding: 0,
    paddingRight: theme.spacing(1),
  },
  headerGroup: {
    backgroundColor: COLORS.PRIMARY_COLOR_100,
    height: '36px',
  },
  checkBoxStyle: {
    color: 'white',
  },
  selectedText: {
    color: 'white',
  },
  rightSpacing: {
    marginRight: theme.spacing(5),
  },
  buttonStyle: {
    borderColor: 'white',
  },
  color: {
    color: COLORS.TEXT_500,
  },
}))

type HeaderCellProps = {
  displayName: string
}

const HeaderCell = ({ displayName, column }: HeaderCellProps) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography variant="body1" className={classes.textStyle}>
        {displayName}
      </Typography>
      {column?.colDef?.icon && <img src={NonEditableIcon} alt="non" />}
    </div>
  )
}

type HeaderGroupProps = {
  selectedRows: number
  indeterminate: boolean
  onClick: () => void
  headerStyle?: string
}

export const HeaderGroup = ({
  selectedRows,
  indeterminate,
  onClick,
  headerStyle,
}: HeaderGroupProps) => {
  const classes = useStyles()
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      className={clsx(classes.headerGroup, headerStyle)}
    >
      <Grid item>
        <CheckBox
          isChecked={!indeterminate}
          customStyle={clsx(classes.checkBoxStyle, classes.rightSpacing)}
          indeterminate={indeterminate}
          handleChange={onClick}
        />
      </Grid>
      <Grid item>
        <Typography
          variant="body2"
          className={clsx(classes.selectedText, classes.rightSpacing)}
        >
          {`${selectedRows} selected`}
        </Typography>
      </Grid>
      <Grid container item xs={8} spacing={3}>
        <Grid item>
          <Button
            variant="outlined"
            height="28px"
            className={clsx(classes.buttonStyle)}
            textStyle={classes.selectedText}
            startIcon={<EditIcon style={{ fill: COLORS.TEXT_900 }} />}
            color={COLORS.TEXT_900}
          >
            Edit
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            height="28px"
            startIcon={<HistoryIcon style={{ fill: COLORS.TEXT_900 }} />}
            textStyle={classes.selectedText}
            className={classes.buttonStyle}
            color={COLORS.TEXT_900}
          >
            History
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

HeaderGroup.defaultProps = {
  headerStyle: null,
}

type BoldHeaderCellProps = {
  displayName: string
}

export const BoldHeaderCell = ({ displayName }: BoldHeaderCellProps) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography variant="body1">{displayName}</Typography>
    </div>
  )
}

type SubHeaderCellProps = {
  displayName: string
}

export const SubHeaderCell = (params: SubHeaderCellProps) => {
  const classes = useStyles()
  const { displayName } = params
  return (
    <div className={classes.rootCol}>
      <Typography variant="body2">{displayName}</Typography>
      <Typography variant="caption2" className={classes.textStyle}>
        {params?.column?.colDef?.subField}
      </Typography>
    </div>
  )
}

export default HeaderCell
