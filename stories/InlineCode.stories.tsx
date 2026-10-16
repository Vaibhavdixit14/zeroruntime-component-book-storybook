import type { Meta, StoryObj } from "@storybook/nextjs";
import { InlineCode } from "zeroruntime-component-book";

const meta = {
  title: "InlineCode",
  component: InlineCode,
  tags: ["autodocs"],
  args: { children: "style_taxonomy" },
} satisfies Meta<typeof InlineCode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Interactive: Story = { args: { interactive: true } };
export const Disabled: Story = { args: { disabled: true } };

export const InText: Story = {
  render: () => (
    <p className="text-body-md-regular text-(--text-primary)">
      Set <InlineCode>style_taxonomy</InlineCode> in <InlineCode>agent.config.ts</InlineCode> before running the agent.
    </p>
  ),
};
