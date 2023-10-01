---
to: src/components/<%= path %>/index.stories.tsx
---
import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import <%= name %> from '.'
type <%= name %>Props = React.ComponentProps<typeof <%= name %>>;

export default {
  title: 'UI/<%= name %>',
  component: <%= name %>,
} as Meta

const Template: StoryFn<<%= name %>Props> = args => <<%= name %> {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Hello',
}
