import React from "react";

import { Example } from "./Example";

export default {
  title: "Boilerplate/Example",
  component: Example,
};

const Template = (args) => <Example {...args} />;

export const example = Template.bind({});
example.args = {
  children: "flumpeiros",
};
