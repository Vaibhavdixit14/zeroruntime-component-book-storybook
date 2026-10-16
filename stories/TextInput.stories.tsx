import type { Meta, StoryObj } from "@storybook/nextjs";
import { TextInput, type FieldStatus } from "zeroruntime-component-book";

const meta = {
  title: "Text Input",
  component: TextInput,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "radio", options: ["lg", "md"] },
    status: { control: "select", options: ["default", "success", "error", "warning"] },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
  },
  args: { label: "Label", placeholder: "Placeholder", helper: "Helper text", size: "lg", status: "default" },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Filled: Story = { args: { defaultValue: "Text" } };
export const Medium: Story = { args: { size: "md" } };
export const Required: Story = { args: { label: "Email address", required: true, info: "We send call summaries here" } };
export const Disabled: Story = { args: { disabled: true } };

const STATES: { status: FieldStatus; helper: string }[] = [
  { status: "success", helper: "Success message" },
  { status: "error", helper: "Error message" },
  { status: "warning", helper: "Warning message" },
];

// Mirrors the Figma documentation board (hover and focus the first one)
export const AllStates: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-(--space-32)">
      {(["lg", "md"] as const).map((size) => (
        <div key={size} className="grid grid-cols-[repeat(4,240px)] gap-(--space-24)">
          <TextInput size={size} label="Label" placeholder="Placeholder" helper="Helper text" />
          <TextInput size={size} label="Label" defaultValue="Text" helper="Helper text" />
          <TextInput size={size} label="Label" placeholder="Placeholder" helper="Helper text" disabled />
          <span />
          {STATES.map(({ status, helper }) => (
            <TextInput key={status} size={size} label="Label" defaultValue="Text" status={status} helper={helper} />
          ))}
        </div>
      ))}
    </div>
  ),
};
