import type { Meta, StoryObj } from "@storybook/nextjs";
import { Copy } from "lucide-react";
import { Button, Tooltip } from "zeroruntime-component-book";

const meta = {
  title: "Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: { side: { control: "select", options: ["top", "right", "bottom", "left"] } },
  args: {
    content: "Copy deployment URL",
    side: "top",
    children: (
      <Button variant="outline" size="icon" aria-label="Copy deployment URL">
        <Copy className="size-4" />
      </Button>
    ),
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sides: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex gap-3 p-12">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Tooltip key={side} content={`On ${side}`} side={side}>
          <Button variant="outline" size="sm">{side}</Button>
        </Tooltip>
      ))}
    </div>
  ),
};
