import type { Meta, StoryObj } from "@storybook/react";

import Pagination from ".";

const meta = {
  title: "Components/Pagnation",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Pagination>;

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
    page: {
      description: "Currenty page",
      defaultValue: "10",
    },
    pageSize: {
      description: "Total items per page",
    },
  },
};
