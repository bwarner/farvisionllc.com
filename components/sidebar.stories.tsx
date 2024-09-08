import type { Meta, StoryObj } from "@storybook/react";
import Sidebar from "./sidebar";

const meta = {
  title: "Components/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) => (
      <div className="wrapper">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
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
