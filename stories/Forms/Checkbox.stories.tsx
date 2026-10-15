import type { Meta, StoryObj } from "@storybook/nextjs";
import { Checkbox } from "zeroruntime-component-book";

const meta = {
  title: "Forms/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: { id: "terms", label: "Notify me on failed deploys" },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Checked: Story = { args: { defaultChecked: true } };
export const Indeterminate: Story = { args: { checked: "indeterminate", label: "Select all" } };
export const Disabled: Story = { args: { disabled: true } };
export const WithoutLabel: Story = { args: { label: undefined, "aria-label": "Select row" } };
