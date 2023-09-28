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

const sampleAutocompleteList = [
  {
    title: "Autocomplete item 1",
    href: "https://johnykei.net",
  },
  {
    title: "Autocomplete item 2",
    href: "https://zenn.dev/johnnykei",
  },
  {
    title: "Autocomplete item 3",
    href: "https://github.com/johnykei",
  },
  {
    title: "Autocomplete item 4",
    href: "https://twitter.com/johnykei",
  },
];

export const Default = Template.bind({});
Default.args = {
  title: "Autocomplete menu",
  autocompleteId: "sampleAutocomplete",
  autocomplete: sampleAutocompleteList,
};
