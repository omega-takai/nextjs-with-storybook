import React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";

import { Button as ScssButton } from "./index";

export default {
  title: "Button",
  component: ScssButton,
  decorators: [withKnobs],
};

export const Basic = (): JSX.Element => <ScssButton>Submit</ScssButton>;

export const DynamicVariables = (): JSX.Element => {
  const label = select("label", ["Submit", "Cancel"], "Docs");
  return <ScssButton>{label}</ScssButton>;
};
