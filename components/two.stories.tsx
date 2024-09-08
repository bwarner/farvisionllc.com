import type { Meta, StoryObj } from "@storybook/react";
import Two from "./two";

const meta = {
  title: "Components/Two",
  component: Two,
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
} satisfies Meta<typeof Two>;

export default meta;

type Story = StoryObj<typeof Two>;

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
