import { Story, Meta } from '@storybook/react'
import Header from '.'
import { ThemeProvider } from '@material-ui/core/styles'

import settings from '../../../assets/settings.svg'
import LogoImage from '../../../assets/logo.png'
import baseTheme from '../../../core-utils/theme'

export default {
  title: 'organisms/Header',
  component: Header,
} as Meta

const Template: Story = ({ isAdmin, image, settingIcon }) => (
  <ThemeProvider theme={baseTheme}>
    <Header isAdmin={isAdmin} image={image} settingIcon={settingIcon} />
  </ThemeProvider>
)

export const Heading = Template.bind({})
Heading.args = {
  isAdmin: true,
  image: LogoImage,
  settingIcon: settings,
}
