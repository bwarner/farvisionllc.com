import type { Meta, StoryObj } from "@storybook/react";
import MenuItem from "./menu-item";

const meta = {
  title: "Components/Menu Item",
  component: MenuItem,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) => (
      <ul className="p-[2.5em] pt-[0.5em] bg-[#312450] min-w-32 min-h-32">
        <Story />
      </ul>
    ),
  ],
} satisfies Meta<typeof MenuItem>;

export default meta;

type Story = StoryObj<typeof MenuItem>;

export const Item: Story = {
  args: {
    className: "",
    selected: false,
    children: "Menu Item Text", // Set the child text here
  },
  argTypes: {
    className: {
      control: {
        type: "text",
      },
    },
    selected: {
      control: {
        type: "boolean",
      },
    },
    children: {
      control: {
        type: "text",
      },
    },
  },
} satisfies Story;
