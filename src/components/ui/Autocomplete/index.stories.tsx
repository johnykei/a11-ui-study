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
    title: "JavaScript tutorial",
    href: "https://example.com/javascript-tutorial",
  },
  {
    title: "How to make homemade pizza",
    href: "https://recipe.example.com/homemade-pizza",
  },
  {
    title: "Latest tech news",
    href: "https://technews.example.com",
  },
  {
    title: "Top 10 travel destinations",
    href: "https://travelblog.example.com/top-10-destinations",
  },
  {
    title: "2023 movies",
    href: "https://movies.example.com/2023-releases",
  },
  {
    title: "Digital photography tips",
    href: "https://photography.example.com/tips",
  },
  {
    title: "Best books to read",
    href: "https://books.example.com/best-books",
  },
  {
    title: "Popular fashion trends",
    href: "https://fashion.example.com/popular-trends",
  },
  {
    title: "Home gardening basics",
    href: "https://gardening.example.com/basics",
  },
  {
    title: "Fitness exercises at home",
    href: "https://fitness.example.com/home-exercises",
  },
];

export const Default = Template.bind({});
Default.args = {
  title: "Recommended Links",
  autocomplete: sampleAutocompleteList,
};
