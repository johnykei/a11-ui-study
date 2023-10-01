import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import Tooltip from '.'
type TooltipProps = React.ComponentProps<typeof Tooltip>;

export default {
  title: 'UI/Tooltip',
  component: Tooltip,
} as Meta

const Template: StoryFn<TooltipProps> = args => <Tooltip {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Hello',
}
