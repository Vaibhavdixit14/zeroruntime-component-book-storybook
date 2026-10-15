import type { Meta, StoryObj } from "@storybook/nextjs";
import { Switch } from "zeroruntime-component-book";

const meta = {
  title: "Forms/Switch",
  component: Switch,
  tags: ["autodocs"],
  args: { id: "auto-deploy", label: "Auto-deploy on push" },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const On: Story = { args: { defaultChecked: true } };
export const Disabled: Story = { args: { disabled: true, defaultChecked: true } };
export const WithoutLabel: Story = { args: { label: undefined, "aria-label": "Toggle" } };
