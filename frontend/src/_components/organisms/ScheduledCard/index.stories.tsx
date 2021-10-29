import React from 'react';
import {Meta, Story} from "@storybook/react";
import theme from "../../../core-utils/theme";
import {ThemeProvider} from '@material-ui/core/styles';
import ScheduledCard from '.';

export default {
  title: 'organisms/ScheduledCard',
  component: ScheduledCard,
   decorators: [
        (Story: () => boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => (
            <ThemeProvider theme={theme}>
                    {Story()}
            </ThemeProvider>
        ),
    ],
};

const Template: Story<{text:string}> = (args) => <ScheduledCard/>;
export const Primary = Template.bind({});
