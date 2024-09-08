import type { Meta, StoryObj } from "@storybook/react";
import One from "./one";

const meta = {
  title: "Components/One",
  component: One,
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
} satisfies Meta<typeof One>;

export default meta;

type Story = StoryObj<typeof One>;

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
