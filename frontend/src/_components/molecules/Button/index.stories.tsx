import ButtonComponent, { defaultProps } from "./index";
import {Meta, Story} from "@storybook/react";
import theme from "../../../core-utils/theme";
import {ThemeProvider} from '@material-ui/core/styles';
import {COLORS} from '../../../core-utils/theme'
export default {
    title: "molecules/Button",
    component: ButtonComponent,
    argTypes: {
        onClick: { action: 'clicked' },
    },
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                {Story()}
            </ThemeProvider>
        ),
    ],
} as Meta;

const Template: Story<defaultProps> = (args) => <ButtonComponent {...args}></ButtonComponent>;

export const LargeButton = Template.bind({})
LargeButton.args = {
    children: 'Button',
    startIcon:"add",
    color:COLORS.TEXT_900,
    variant:'contained',
    width:"86px",
    height:"40px",
    backgroundColor:COLORS.TERTIARY_GREY_50,

}
export const ButtonIcon = Template.bind({})
ButtonIcon.args = {
    children: 'Button',
    startIcon:"add",
    endIcon:"add",
    variant:'contained',
    width:"106px",
    height:"40px",
    color:COLORS.TEXT_900,
    backgroundColor:COLORS.TERTIARY_GREY_50
}
export const Button = Template.bind({})
Button.args = {
    children: 'Button',
    variant:'contained',
    width:"86px",
    height:"40px",
    color:COLORS.TEXT_900,
    backgroundColor:COLORS.TERTIARY_GREY_50
}

export const Large = Template.bind({})
Large.args = {
    children: 'Button',
    endIcon:"add",
    variant:'contained',
    width:"86px",
    height:"40px",
    color:COLORS.TEXT_900,
    backgroundColor:COLORS.TERTIARY_GREY_50
}


