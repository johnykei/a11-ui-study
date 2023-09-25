import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import Autocomplete from ".";
type AutocompleteProps = React.ComponentProps<typeof Autocomplete>;

export default {
  title: "UI/Autocomplete",
  component: Autocomplete,
} as Meta;

const Template: StoryFn<AutocompleteProps> = (args) => (
  <Autocomplete {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Autocomplete menu",
};
