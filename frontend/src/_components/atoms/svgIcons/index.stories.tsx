import { Story, Meta } from "@storybook/react";
import SvgIcon, { IconCompProps } from "./index";
import Vector from '../../../assets/sortIcon.svg'
import settings from '../../../assets/settings.svg'
import notification from '../../../assets/notification.svg'
import visibility from '../../../assets/visibility.svg'
import visibilityoff from '../../../assets/visibilityoff.svg'
import People from '../../../assets/people.svg'
import distribute from '../../../assets/distribute.svg'
import reverse from '../../../assets/reverse.svg'
import bargraph from '../../../assets/bargraph.svg'
import prod from '../../../assets/prod.svg'
import editoff from '../../../assets/editoff.svg'

import dragger from '../../../assets/dragger.svg'
import { ThemeProvider } from "@material-ui/styles";
import baseTheme from '../../../core-utils/theme'
export default {
  title: "atoms/svgIcon",
  component: SvgIcon,
  argTypes: { onClick: { action: "Click" } },
} as Meta;

const Template: Story<IconCompProps> = (args) => {
  return (
    <ThemeProvider theme={baseTheme}>
      <SvgIcon {...args}  />
    </ThemeProvider>
  );
};

export const sort = Template.bind({});
sort.args={icon:Vector}

export const settingsIcon = Template.bind({});
settingsIcon.args={icon:settings}

export const notificationIcon = Template.bind({});
notificationIcon.args={icon:notification}


export const visibilityIcon = Template.bind({});
visibilityIcon.args={icon:visibility}

export const visibilityoffIcon = Template.bind({});
visibilityoffIcon.args={icon:visibilityoff}

export const barGraphIcon = Template.bind({});
barGraphIcon.args={icon:bargraph}

export const prodIcon = Template.bind({});
prodIcon.args={icon:prod}

export const dragIcon = Template.bind({});
dragIcon.args={icon:dragger}

export const peopleIcon = Template.bind({});
peopleIcon.args={icon:People}

export const distributeIcon = Template.bind({});
distributeIcon.args={icon:distribute}

export const reverseIcon = Template.bind({});
reverseIcon.args={icon:reverse}

// export const editoffIcon = Template.bind({});
// editoffIcon.args={icon:editoff}
