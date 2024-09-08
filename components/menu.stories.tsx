import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Menu from "./menu";

const handleClick = (e: React.MouseEvent) => {
  let target = e.target as HTMLElement | null;

  // Traverse up the DOM tree to check if an ancestor is an anchor with href starting with '#'
  while (target && target !== e.currentTarget) {
    if (target.tagName === "A") {
      console.log("link clicked");
      const href = target.getAttribute("href");
      if (
        href &&
        href.startsWith("#") &&
        href.length > 1 &&
        href !== "#menu-open"
      ) {
        e.preventDefault();
        break;
      }
    }
    target = target.parentElement;
  }
};

const meta = {
  title: "Components/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
    // This enables Next.js-specific features for Storybook
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) => (
      <ul
        className="p-[2.5em] pt-[0.5em] bg-[#312450] min-w-32 min-h-32"
        onClick={handleClick}
      >
        <Story />
      </ul>
    ),
  ],
} satisfies Meta<typeof Menu>;

export default meta;

type Story = StoryObj<typeof Menu>;

export const Default: Story = {} satisfies Story;
