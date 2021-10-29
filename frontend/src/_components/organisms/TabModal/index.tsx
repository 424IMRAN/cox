import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import React from 'react'
import theme, { COLORS } from '../../../core-utils/theme'
import Modal from '../../molecules/Modal'

import ButtonComponent from '../../molecules/Button'
import Typography from '../../atoms/Typography'

type TabModalProps = {
  modalTitle: string
  isOpen: boolean
  tabModel: any
}

const useStyles = makeStyles({
  root: {
    '& .Mui-selected': {
      fontWeight: theme.spacing(175),
      color: COLORS.TEXT_100,
    },
  },
  typo: {
    fontFamily: theme.typography.fontFamily,
    fontSize: '14px',
    fontStyle: 'normal',
    textTransform: 'none',
    fontWeight: theme.spacing(100),
    textAlign: 'left',
    color: COLORS.TEXT_100,
    padding: theme.spacing(0),
    marginRight: theme.spacing(10),
  },
})
const HistoryTabModal = ({ modalTitle, tabModel, isOpen }: TabModalProps) => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }
  const tabList = tabModel.map((title: any) => (
    <Tab label={title.tab} className={classes.typo} />
  ))
  return (
    <Grid>
      <Modal
        handleModalClose={() => {}}
        open={isOpen}
        title={
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography variant="heading2">{modalTitle}</Typography>
            </Grid>
            <Grid item style={{ marginRight: '40.64px' }}>
              <ButtonComponent
                color={COLORS.TERTIARY_GREY_50}
                backgroundColor={COLORS.TERTIARY_GREY_900}
                variant="contained"
                startIcon="download"
                height={theme.spacing(7)}
              >
                <Typography variant="body2">Download</Typography>
              </ButtonComponent>
            </Grid>
          </Grid>
        }
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          className={classes.typo}
          classes={{ root: classes.root }}
          variant="scrollable"
          scrollButtons="auto"
          data-testid="tabModel"
          style={{
            marginLeft: theme.spacing(0),
            marginRight: theme.spacing(0),
          }}
        >
          {tabList}
        </Tabs>
      </Modal>
    </Grid>
  )
}

export default HistoryTabModal
