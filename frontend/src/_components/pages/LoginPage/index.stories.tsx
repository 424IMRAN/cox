import { Story, Meta } from '@storybook/react'
import LoginPage from '.'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../../../core-utils/theme'

export default {
  title: 'pages/LoginScreen',
  component: LoginPage,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta

const Template: Story = ({ onClick }) => (
  <ThemeProvider theme={theme}>
    <LoginPage onClick={onClick} />
  </ThemeProvider>
)

export const SSOLoginPage = Template.bind({})
SSOLoginPage.args = {
  onClick: () => {
    console.log('Clicked')
  },
}
