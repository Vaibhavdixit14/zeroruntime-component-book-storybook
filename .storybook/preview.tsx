import type { Preview } from "@storybook/nextjs";
import { withThemeByDataAttribute } from "@storybook/addon-themes";

import "zeroruntime-component-book/styles";
import "../styles/globals.css";

const preview: Preview = {
  decorators: [
    withThemeByDataAttribute({
      attributeName: "data-theme",
      parentSelector: "html",
      themes: { light: "light", dark: "dark" },
      defaultTheme: "dark",
    }),
  ],
  parameters: {
    layout: "centered",
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: { test: "todo" },
  },
};

export default preview;
