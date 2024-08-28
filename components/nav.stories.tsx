import type { Meta, StoryObj } from "@storybook/react";
import Nav from "./nav";
import { deflate } from "zlib";

const meta = {
  title: "Nav",
  component: Nav,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) => (
      <div className="grid grid-col-1 lg:grid-col-2 min-h-screen min-w-lg">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Nav>;

export default meta;

type Story = StoryObj<typeof Nav>;

export const SideNav: Story = {
  args: {
    className: "min-w-60",
  },
  argTypes: {
    className: {
      control: {
        type: "text",
      },
    },
  },
} satisfies Story;
