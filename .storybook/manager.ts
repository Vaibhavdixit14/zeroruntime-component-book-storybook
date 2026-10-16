import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

// Storybook chrome in ZRT dark neutrals (manager theme needs literal colours)
addons.setConfig({
  theme: create({
    base: "dark",
    brandTitle: "ZRT · component-book",
    brandUrl: "https://github.com/zujonow/zeroruntime-component-book",
    brandTarget: "_blank",
    fontBase: "'Geist', ui-sans-serif, system-ui, sans-serif",
    fontCode: "'Geist Mono', ui-monospace, monospace",
    colorPrimary: "#FFFFFF",
    colorSecondary: "#4D93FC",
    appBg: "#000000",
    appContentBg: "#000000",
    appPreviewBg: "#000000",
    appBorderColor: "#363636",
    appBorderRadius: 6,
    barBg: "#191919",
    textColor: "#FFFFFF",
    textMutedColor: "#8F8F8F",
  }),
});
