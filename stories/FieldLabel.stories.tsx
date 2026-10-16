import type { Meta, StoryObj } from "@storybook/nextjs";
import { FieldLabel } from "zeroruntime-component-book";

const meta = {
  title: "FieldLabel",
  component: FieldLabel,
  tags: ["autodocs"],
  args: { children: "Agent name" },
} satisfies Meta<typeof FieldLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Required: Story = { args: { required: true } };
export const WithInfo: Story = { args: { required: true, info: "Shown to callers" } };
export const Disabled: Story = { args: { required: true, disabled: true } };
