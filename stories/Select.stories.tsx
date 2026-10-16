import type { Meta, StoryObj } from "@storybook/nextjs";
import { Select } from "zeroruntime-component-book";

const ranges = [
  { value: "today", label: "Today" },
  { value: "7d", label: "Last 7 days" },
  { value: "14d", label: "Last 14 days" },
  { value: "30d", label: "Last 30 days" },
  { value: "3m", label: "Last 3 months" },
  { value: "6m", label: "Last 6 months" },
  { value: "ytd", label: "Year to date" },
];

const meta = {
  title: "Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: { size: { control: "radio", options: ["lg", "md"] } },
  args: { options: ranges, label: "Date range", size: "lg" },
  decorators: [(Story) => <div className="w-60"><Story /></div>],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {};
export const Medium: Story = { args: { size: "md" } };
export const Filled: Story = { args: { defaultValue: "7d" } };
export const Required: Story = { args: { required: true } };
export const Disabled: Story = { args: { disabled: true } };
export const NoLabel: Story = { args: { label: undefined } };
