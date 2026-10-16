import type { Meta, StoryObj } from "@storybook/nextjs";
import { TextArea } from "zeroruntime-component-book";

const TEXT =
  "To optimize agentic workflows: 1. Define clear objectives and metrics. 2. Automate repetitive tasks with Maestro. 3. Implement regular performance reviews.";

const meta = {
  title: "Text Area",
  component: TextArea,
  tags: ["autodocs"],
  argTypes: {
    status: { control: "select", options: ["default", "success", "error", "warning"] },
    disabled: { control: "boolean" },
    readOnly: { control: "boolean" },
  },
  args: { label: "Text area label", placeholder: "Placeholder", helper: "Helper text", status: "default" },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Filled: Story = { args: { defaultValue: TEXT } };
export const ReadOnly: Story = { args: { defaultValue: TEXT, readOnly: true } };
export const Error: Story = { args: { defaultValue: TEXT, status: "error" } };
export const Disabled: Story = { args: { defaultValue: TEXT, disabled: true } };

// Mirrors the Figma documentation board
export const AllStates: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="grid grid-cols-[repeat(3,280px)] gap-(--space-24)">
      <TextArea label="Text area label" placeholder="Placeholder" helper="Helper text" />
      <TextArea label="Text area label" defaultValue={TEXT} helper="Helper text" />
      <TextArea label="Text area label" defaultValue={TEXT} helper="Helper text" readOnly />
      <TextArea label="Text area label" defaultValue={TEXT} helper="Helper text" status="error" />
      <TextArea label="Text area label" defaultValue={TEXT} helper="Helper text" disabled />
    </div>
  ),
};
