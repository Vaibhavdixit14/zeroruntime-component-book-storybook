import type { Meta, StoryObj } from "@storybook/nextjs";
import { CopyButton } from "zeroruntime-component-book";

const meta = {
  title: "CopyButton",
  component: CopyButton,
  tags: ["autodocs"],
  argTypes: { size: { control: "radio", options: ["md", "sm"] } },
  args: { value: "npm install @zrt/ui" },
} satisfies Meta<typeof CopyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Small: Story = { args: { size: "sm" } };
export const NoTooltip: Story = { args: { showTooltip: false } };
export const Disabled: Story = { args: { disabled: true } };
