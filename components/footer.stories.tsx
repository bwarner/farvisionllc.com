import type { Meta, StoryObj } from "@storybook/react";
import Footer from "./footer";

const meta = {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof Footer>;

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
