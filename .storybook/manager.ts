import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

addons.setConfig({
  theme: create({
    base: "dark",
    brandTitle: "ZeroRuntime component-book",
    brandUrl: "https://github.com/zujonow/zeroruntime-component-book",
    brandTarget: "_blank",
    colorPrimary: "#818cf8",
    colorSecondary: "#4f46e5",
    appBg: "#09090b",
    appContentBg: "#09090b",
    appBorderColor: "#27272a",
    barBg: "#121214",
  }),
});
