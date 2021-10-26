import { Story, Meta } from '@storybook/react'
import ImageComponent from '.'
import { ThemeProvider } from '@material-ui/core/styles'
import baseTheme from '../../../core-utils/theme'
import LogoImage from './../../../assets/logo.png'

export default {
  title: 'atoms/Image',
  component: ImageComponent,
} as Meta

const Template: Story = ({ alt, imageSrc, styles }) => (
  <ThemeProvider theme={baseTheme}>
    <ImageComponent alt={alt} imageSrc={imageSrc} styles={styles} />
  </ThemeProvider>
)

export const Logo = Template.bind({})

Logo.args = {
  alt: 'COX Logo',
  imageSrc: LogoImage,
  styles: {
    width: '95px',
    height: baseTheme.spacing(8),
  },
}
