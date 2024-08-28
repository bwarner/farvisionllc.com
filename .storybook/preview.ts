import type { Preview } from "@storybook/react";
import "../app/globals.css";

import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
      },
      defaultViewport: "responsive",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};
console.log("INITIAL_VIEWPORTS: ", INITIAL_VIEWPORTS);
console.log("preview.ts: ", preview);
export default preview;
