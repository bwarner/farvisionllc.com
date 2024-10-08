import type { Meta, StoryObj } from "@storybook/react";
import Nav from "./nav";
import { deflate } from "zlib";

const meta = {
  title: "Components/Nav",
  component: Nav,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) => (
      <div className="grid grid-col-1 lg:grid-col-2 h-screen md:w-[640px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Nav>;

export default meta;

type Story = StoryObj<typeof Nav>;

export const SideNav: Story = {
  args: {
    className: "",
  },
  argTypes: {
    className: {
      control: {
        type: "text",
      },
    },
  },
} satisfies Story;
