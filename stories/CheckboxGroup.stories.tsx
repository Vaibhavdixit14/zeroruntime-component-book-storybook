import type { Meta, StoryObj } from "@storybook/nextjs";
import { CheckboxGroup } from "zeroruntime-component-book";

const options = [
  { value: "email", label: "Email" },
  { value: "slack", label: "Slack" },
  { value: "sms", label: "SMS" },
];

const meta = {
  title: "CheckboxGroup",
  component: CheckboxGroup,
  tags: ["autodocs"],
  argTypes: {
    direction: { control: "radio", options: ["vertical", "horizontal"] },
    itemVariant: { control: "radio", options: ["plain", "card"] },
    helperVariant: { control: "select", options: ["default", "success", "error", "warning"] },
  },
  args: { label: "Notify me by", options, helper: "Pick at least one channel.", defaultValue: ["email"] },
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {};
export const Horizontal: Story = { args: { direction: "horizontal" } };
export const Cards: Story = {
  args: {
    direction: "horizontal",
    itemVariant: "card",
    options: [
      { value: "voice", label: "Voice", description: "Phone and web calls" },
      { value: "chat", label: "Chat", description: "In-app messages" },
    ],
    helper: undefined,
  },
};
export const Error: Story = {
  args: { required: true, defaultValue: [], helper: "Select at least one channel.", helperVariant: "error" },
};
