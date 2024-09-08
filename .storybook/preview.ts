import type { Preview } from "@storybook/react";
import "../app/globals.css";

import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";

const CustomViewports = {
  desktop: {
    name: "Desktop",
    styles: {
      width: "1440px",
      height: "1024px",
    },
  },
};

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        ...CustomViewports,
        ...MINIMAL_VIEWPORTS,
      },
      defaultViewport: "Desktop",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

console.log("preview ", preview);

export default preview;
