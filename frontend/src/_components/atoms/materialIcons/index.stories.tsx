import React from "react";
import { Story, Meta } from "@storybook/react";
import Icon, { IconCompProps } from "./index";
import { COLORS } from "../../../core-utils/theme";

export default {
  title: "atoms/Icon",
  component: Icon,
  argTypes: { onClick: { action: "Click" } },
} as Meta;

const Template: Story<IconCompProps> = (args) => {
  return (
      <Icon {...args} />
  );
};



export const addIcon = Template.bind({});
addIcon.args = { icon: "add",fontSize:"small"};


export const RemoveIcon = Template.bind({});
RemoveIcon.args = { icon: "remove",fontSize:"small"};

export const SearchIcon = Template.bind({});
SearchIcon.args = { icon: "search",fontSize:"small"};

export const closeIcon = Template.bind({});
closeIcon.args = { icon: "close",fontSize:"small"};


export const deleteIcon = Template.bind({});
deleteIcon.args = { icon: "delete",fontSize:"small",iconColor:COLORS.TERTIARY_GREY_600,type:"filled"};


export const saveIcon = Template.bind({});
saveIcon.args = { icon: "save",fontSize:"small",iconColor:COLORS.TERTIARY_GREY_600,type:"filled"};


export const errorIcon = Template.bind({});
errorIcon.args = { icon: "error",fontSize:"small"};

export const bugIcon = Template.bind({});
bugIcon.args = { icon: "bug_report",fontSize:"small",iconColor:COLORS.TERTIARY_GREY_600,type:"filled"};

export const editIcon = Template.bind({});
editIcon.args = { icon: "edit",fontSize:"small",iconColor:COLORS.TERTIARY_GREY_300,type:"filled"};


export const backIcon = Template.bind({});
backIcon.args = { icon: "arrow_back_ios_new_outlined",fontSize:"small"};

export const pieIcon = Template.bind({});
pieIcon.args = { icon: "pie_chart",fontSize:"small",type:"filled"};

export const leftArrowIcon = Template.bind({});
leftArrowIcon.args = { icon: "arrow_back",fontSize:"small"};


export const historyIcon = Template.bind({});
historyIcon.args = { icon: "history",fontSize:"small",iconColor:COLORS.TERTIARY_GREY_300};

export const analyticsIcon = Template.bind({});
analyticsIcon.args = { icon: "analytics_outlined",fontSize:"small",iconColor:COLORS.TERTIARY_GREY_300};

export const downloadIcon = Template.bind({});
downloadIcon.args = { icon: "download_outlined",fontSize:"small"};

export const listIcon = Template.bind({});
listIcon.args = { icon: "list_outlined",fontSize:"small",iconColor:COLORS.TERTIARY_GREY_300};

export const optionIcon = Template.bind({});
optionIcon.args = { icon: "more_horiz_outlined",fontSize:"small"};

export const helpIcon = Template.bind({});
helpIcon.args = { icon: "help",fontSize:"small"};


export const arrowDropDownIcon = Template.bind({});
arrowDropDownIcon.args = { icon: "arrow_drop_down",fontSize:"small",iconColor:COLORS.TERTIARY_GREY_100};

export const arrowDropUpIcon = Template.bind({});
arrowDropUpIcon.args = { icon: "arrow_drop_up",fontSize:"small"};

export const arrowLeftIcon = Template.bind({});
arrowLeftIcon.args = { icon: "arrow_left",fontSize:"small"};

export const arrowRightIcon = Template.bind({});
arrowRightIcon.args = { icon: "arrow_right",fontSize:"small"};

export const keyboardArrowDownIcon = Template.bind({});
keyboardArrowDownIcon.args = { icon: "keyboard_arrow_down_outlined",fontSize:"small",iconColor:COLORS.TERTIARY_GREY_600};

export const keyboardArrowRightIcon = Template.bind({});
keyboardArrowRightIcon.args = { icon: "keyboard_arrow_right_outlined",fontSize:"small"};

export const keyboardArrowUpIcon = Template.bind({});
keyboardArrowUpIcon.args = { icon: "keyboard_arrow_up_outlined",fontSize:"small"};

export const keyboardArrowLeftIcon = Template.bind({});
keyboardArrowLeftIcon.args = { icon: "keyboard_arrow_left_outlined",fontSize:"small"};

export const contentPasteIcon = Template.bind({});
contentPasteIcon.args = { icon: "content_paste_outlined",fontSize:"small"};

export const flagIcon = Template.bind({});
flagIcon.args = { icon: "flag",fontSize:"small",type:"filled"};

export const newTabIcon = Template.bind({});
newTabIcon.args = { icon: "open_in_new",fontSize:"small"};

export const languageIcon = Template.bind({});
languageIcon.args = { icon: "language",fontSize:"small"};

export const fileCloseIcon = Template.bind({});
fileCloseIcon.args = { icon: "insert_drive_file",fontSize:"small",type:"filled"};

export const folderCloseIcon = Template.bind({});
folderCloseIcon.args = { icon: "folder",fontSize:"small",type:"filled"};

export const folderOpenIcon = Template.bind({});
folderOpenIcon.args = { icon: "folder",fontSize:"small"};

export const timelineIcon = Template.bind({});
timelineIcon.args = { icon: "timeline",fontSize:"small"};

export const trendingUpIcon = Template.bind({});
trendingUpIcon.args = { icon: "trending_up",fontSize:"small"};

export const trendingDownIcon = Template.bind({});
trendingDownIcon.args = { icon: "trending_down",fontSize:"small"};


export const warningIcon = Template.bind({});
warningIcon.args = { icon: "warning",fontSize:"small"};

export const draggerIcon = Template.bind({});
draggerIcon.args = { icon: "drag_indicator",fontSize:"small"};

export const doneIcon = Template.bind({});
doneIcon.args = { icon: "done",fontSize:"small"};

export const infoIcon = Template.bind({});
infoIcon.args = { icon: "info_outlined",fontSize:"small",iconColor:COLORS.TERTIARY_GREY_300};

export const editoffIcon = Template.bind({});
editoffIcon.args = { icon: "edit_off",fontSize:"small",type:"filled"};


