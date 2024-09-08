import type { Meta, StoryObj } from "@storybook/react";
import Intro from "./intro";

const meta = {
  title: "Components/Intro",
  component: Intro,
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
} satisfies Meta<typeof Intro>;

export default meta;

type Story = StoryObj<typeof Intro>;

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
