import type { Meta, StoryObj } from "@storybook/nextjs";
import { Bold, Heading1, Italic } from "lucide-react";
import { Mention, RichTextEditor, ToolbarButton, mentionToHtml, type MentionOption } from "zeroruntime-component-book";

const MENTIONS: MentionOption[] = [
  { id: "cold-transfer", label: "Cold Transfer Call", kind: "tool" },
  { id: "caller-name", label: "caller_name", kind: "variable" },
  { id: "support", label: "Support Specialist", kind: "agent" },
  { id: "billing-faq", label: "Billing FAQ", kind: "knowledge" },
  { id: "john", label: "John Doe", kind: "other" },
];

const FILLED = `${mentionToHtml(MENTIONS[0])} routes billing calls and summarises the reason for John Doe.`;

const meta = {
  title: "Rich Text Editor",
  component: RichTextEditor,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    showToolbar: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: {
    label: "Instructions",
    placeholder: "Write instructions… type @ to mention a tool or variable",
    mentions: MENTIONS,
    onExpand: () => {},
    onCollapse: () => {},
  },
  decorators: [(Story) => <div className="w-[640px] max-w-full"><Story /></div>],
} satisfies Meta<typeof RichTextEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};
export const Filled: Story = { args: { defaultValue: FILLED } };
export const NoToolbar: Story = { args: { showToolbar: false, defaultValue: FILLED } };
export const Disabled: Story = { args: { disabled: true, defaultValue: FILLED } };

export const ToolbarButtons: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex gap-(--space-8)">
      <ToolbarButton icon={Bold} label="Default" />
      <ToolbarButton icon={Italic} label="Active" active />
      <ToolbarButton icon={Heading1} label="Disabled" disabled />
    </div>
  ),
};

export const Mentions: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-wrap gap-(--space-8)">
      {MENTIONS.map((m) => (
        <Mention key={m.id} label={m.label} kind={m.kind} />
      ))}
    </div>
  ),
};
