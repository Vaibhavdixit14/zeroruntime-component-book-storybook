import type { Meta, StoryObj } from "@storybook/nextjs";
import { MessageBubble } from "zeroruntime-component-book";

const meta = {
  title: "MessageBubble",
  component: MessageBubble,
  tags: ["autodocs"],
  argTypes: { variant: { control: "radio", options: ["outline", "subtle", "solid"] } },
  args: { variant: "outline", children: "Text message goes here." },
} satisfies Meta<typeof MessageBubble>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outline: Story = {};
export const Subtle: Story = { args: { variant: "subtle" } };
export const Solid: Story = { args: { variant: "solid" } };

export const AllStyles: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex gap-(--space-16)">
      <MessageBubble variant="outline">Text message goes here.</MessageBubble>
      <MessageBubble variant="subtle">Text message goes here.</MessageBubble>
      <MessageBubble variant="solid">Text message goes here.</MessageBubble>
    </div>
  ),
};
