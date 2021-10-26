import { Story, Meta } from '@storybook/react'
import CheckBoxComponent from '.'
import { ThemeProvider } from '@material-ui/core/styles'
import baseTheme from '../../../core-utils/theme'
import CheckboxInderminate from '../../../assets/checkboxIndeterminate.svg'

export default {
  title: 'atoms/CheckBox',
  component: CheckBoxComponent,
} as Meta

const Template: Story = ({
  isChecked,
  handleChange,
  indeterminate,
  indeterminateIconSrc,
}) => (
  <ThemeProvider theme={baseTheme}>
    <CheckBoxComponent
      isChecked={isChecked}
      handleChange={handleChange}
      indeterminate={indeterminate}
      indeterminateIconSrc={indeterminateIconSrc}
    />
  </ThemeProvider>
)

export const CheckedCheckBox = Template.bind({})
CheckedCheckBox.args = {
  isChecked: true,
  handleChange: () => {
    console.log('Checked Checkbox toggled')
  },
}

export const UnCheckedCheckBox = Template.bind({})
UnCheckedCheckBox.args = {
  isChecked: false,
  handleChange: () => {
    console.log('CheckBox toggled')
  },
}
export const IndeterminateCheckBox = Template.bind({})
IndeterminateCheckBox.args = {
  isChecked: true,
  handleChange: () => {
    console.log('Indeterminate checkbox toggled')
  },
  indeterminate: true,
  indeterminateIconSrc: CheckboxInderminate,
}
