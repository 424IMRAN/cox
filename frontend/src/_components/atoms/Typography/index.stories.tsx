import { Story, Meta } from '@storybook/react'
import { ThemeProvider } from '@material-ui/core/styles'
import TypographyComponent from '.'
import baseTheme from '../../../core-utils/theme'

export default {
  title: 'atoms/Typography',
  component: TypographyComponent,
  argTypes: {
    variant: {
      options: [
        'heading1',
        'heading2',
        'heading3',
        'heading4',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'caption1',
        'caption2',
        'overline',
      ],
      control: { type: 'select' },
    },
  },
} as Meta

const Template: Story = ({ children, ...args }) => (
  <ThemeProvider theme={baseTheme}>
    <TypographyComponent {...args}>{children}</TypographyComponent>
  </ThemeProvider>
)

export const Heading1 = Template.bind({})
Heading1.args = {
  children: 'Heading1',
  variant: 'heading1',
}
export const Heading2 = Template.bind({})
Heading2.args = {
  children: 'Heading2',
  variant: 'heading2',
}

export const Heading3 = Template.bind({})
Heading3.args = {
  children: 'Heading3',
  variant: 'heading3',
}

export const Heading4 = Template.bind({})
Heading4.args = {
  children: 'Heading4',
  variant: 'heading4',
}

export const Subtitle1 = Template.bind({})
Subtitle1.args = {
  children: 'Subtitle1',
  variant: 'subtitle1',
}

export const Subtitle2 = Template.bind({})
Subtitle2.args = {
  children: 'Subtitle2',
  variant: 'subtitle2',
}

export const Body1 = Template.bind({})
Body1.args = {
  children: 'Body1',
  variant: 'body1',
}

export const Body2 = Template.bind({})
Body2.args = {
  children: 'Body2',
  variant: 'body2',
}

export const Caption1 = Template.bind({})
Caption1.args = {
  children: 'Caption1',
  variant: 'caption1',
}

export const Caption2 = Template.bind({})
Caption2.args = {
  children: 'Caption2',
  variant: 'caption2',
}

export const Overline = Template.bind({})
Overline.args = {
  children: 'Overline1',
  variant: 'overline',
}
