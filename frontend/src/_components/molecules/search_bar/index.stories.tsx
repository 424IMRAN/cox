import {Meta, Story} from "@storybook/react";
import theme from "../../../core-utils/theme";
import {ThemeProvider} from '@material-ui/core/styles';
import { SearchAppBar } from ".";

export default {
    title: "molecules/searchbar",
    component:SearchAppBar,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                {Story()}
            </ThemeProvider>
        ),
    ],
} as Meta;

const Template: Story = (args) => <SearchAppBar />;

export const Large = Template.bind({})