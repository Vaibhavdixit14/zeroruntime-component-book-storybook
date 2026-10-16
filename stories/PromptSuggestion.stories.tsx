import type { Meta, StoryObj } from "@storybook/nextjs";
import { ListFilter, PenLine } from "lucide-react";
import { PromptSuggestion } from "zeroruntime-component-book";

const meta = {
  title: "PromptSuggestion",
  component: PromptSuggestion,
  tags: ["autodocs"],
  args: { icon: PenLine, children: "Draft a reply" },
} satisfies Meta<typeof PromptSuggestion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Stack: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col items-start">
      <PromptSuggestion icon={PenLine}>Draft a reply</PromptSuggestion>
      <PromptSuggestion icon={ListFilter}>Summarize</PromptSuggestion>
    </div>
  ),
};
