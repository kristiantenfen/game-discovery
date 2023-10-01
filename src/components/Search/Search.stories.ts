import type { Meta, StoryObj } from "@storybook/react";

import Search from ".";

const meta = {
  title: "Components/Search",
  component: Search,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Component: Story = {
  argTypes: {
    onChange: {
      action: "keyPressDown",
      description:
        "onSubmit will be executed when the key Press Down is triggered",
      type: "function",
    },
    onSubmit: {
      action: "keyPressDown",
      description:
        "onSubmit will be executed when the key Press Down Enter code is triggered",
      type: "function",
    },
  },
};
