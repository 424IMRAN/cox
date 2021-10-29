import React from 'react';
import {Meta, Story} from "@storybook/react";
import theme from "../../../core-utils/theme";
import {ThemeProvider} from '@material-ui/core/styles';
import Tabs from '.';
import CenteredTabs from '.';

export default {
  title: 'organisms/Tabs',
  component: CenteredTabs,
   decorators: [
        (Story: () => boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => (
            <ThemeProvider theme={theme}>
                    {Story()}
            </ThemeProvider>
        ),
    ],
};

const Template: Story<{text:string}> = (args) => <Tabs/>;
export const Primary = Template.bind({});

