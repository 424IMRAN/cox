import { Story, Meta } from '@storybook/react'
import { ThemeProvider } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import Accordion from '.'
import baseTheme from '../../../core-utils/theme'
import Typography from '../../atoms/Typography'

export default {
  title: 'molecules/Accordion',
  component: Accordion,
  argTypes: {
    expanded: {
      options: [false, true],
    },
    showBoxShadow: {
      options: [false, true],
    },
  },
} as Meta

const Template: Story = ({ ...args }) => (
  <ThemeProvider theme={baseTheme}>
    <Accordion
      header="Saved Filters"
      expandIcon={null}
      shrinkIcon={null}
      {...args}
    >
      <Typography variant="caption2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas adipisci
        nihil sunt ex perferendis vel reiciendis aliquam dignissimos, hic ipsam
        harum quos itaque, omnis temporibus sequi odio magni consequatur
        dolores!
      </Typography>
    </Accordion>
  </ThemeProvider>
)

export const CustomIconAccordion = Template.bind({})
CustomIconAccordion.args = {
  expanded: true,
  header: 'Saved Filters',
  showBoxShadow: false,
  expandIcon: <AddIcon />,
  shrinkIcon: <RemoveIcon />,
}

export const BasicAccordion = Template.bind({})
BasicAccordion.args = {
  expanded: true,
  header: 'Saved Filters',
  showBoxShadow: false,
  showActive: false,
}

export const BoxShadowAccordion = Template.bind({})
BoxShadowAccordion.args = {
  expanded: true,
  header: 'Saved Filters',
  showBoxShadow: true,
}
