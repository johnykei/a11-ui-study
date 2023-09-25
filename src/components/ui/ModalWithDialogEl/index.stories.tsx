import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import ModalWithDialogEl from ".";
type ModalWithDialogElProps = React.ComponentProps<typeof ModalWithDialogEl>;

export default {
  title: "UI/ModalWithDialogEl",
  component: ModalWithDialogEl,
} as Meta;

const Template: StoryFn<ModalWithDialogElProps> = (args) => (
  <ModalWithDialogEl {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      Lorem ipsum dolor sit amet,{" "}
      <a href="https://johnykei.net/">consectetuer adipiscing elit</a>. Aenean
      commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
      magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
      quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
      arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
      Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
      dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
      Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
      Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
      viverra nulla ut metus varius laoreet.
    </>
  ),
  title: "This is a modal title with HTML dialog element",
};
