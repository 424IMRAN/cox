import { Story, Meta } from "@storybook/react";
import RadioComponent from ".";
import { ThemeProvider } from "@material-ui/core/styles";
import baseTheme from "../../../core-utils/theme";

export default {
  title: "atoms/Radio",
  component: RadioComponent
} as Meta;


const Template: Story = ({isChecked , handleClick }) => (
  <ThemeProvider theme={baseTheme}>
    <RadioComponent isChecked={isChecked} handleClick={handleClick}/>
  </ThemeProvider>
);

export const CheckedRadio = Template.bind({});
CheckedRadio.args = {
    isChecked : true,
    handleClick: ()=> console.log("Checked radio button clicked")
    
}

export const UnCheckedRadio = Template.bind({});
UnCheckedRadio.args = {
    isChecked : false,
    handleClick: ()=> console.log("UnChecked radio button clicked")
}


