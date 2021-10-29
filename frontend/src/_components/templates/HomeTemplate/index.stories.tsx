import React from 'react';
import { Story } from "@storybook/react";
import theme, { COLORS } from "../../../core-utils/theme";
import {ThemeProvider} from '@material-ui/core/styles';
import HomeTemplate,{HomeTemplateProps} from '.';

export default {
  title: 'templates/HomeTemplate',
  component: HomeTemplate,
   decorators: [
        (Story: () => boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => (
            <ThemeProvider theme={theme}>
                    {Story()}
            </ThemeProvider>
        ),
    ],
};
const DummyView = (props:any) => (
    <div style={{ backgroundColor: props.color, height: "100%", width: "100%" ,textAlign:"center"}}>{props.name}</div>
  );

const Template: Story<HomeTemplateProps> = (args) => <HomeTemplate {...args}/>;
export const emptyHomeTemplate = Template.bind({});
emptyHomeTemplate.args = {
    header: <DummyView  name="header"/>,
    body: <DummyView  name="body"/>,
  };
  



 