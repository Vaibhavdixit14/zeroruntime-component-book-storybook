import type { Meta, StoryObj } from "@storybook/nextjs";
import { Link, Search, Trash2 } from "lucide-react";
import { Button, IconButton, Tooltip } from "zeroruntime-component-book";

const meta = {
  title: "Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "radio", options: ["sm", "md", "lg"] },
    side: { control: "select", options: ["top", "bottom", "left", "right"] },
    align: { control: "radio", options: ["start", "center", "end"] },
    arrow: { control: "boolean" },
    content: { control: "text" },
  },
  args: { content: "Tooltip text", size: "md", side: "top", align: "center", arrow: true, children: null },
  render: (args) => (
    <div className="flex h-60 items-center justify-center">
      <Tooltip {...args}>
        <Button variant="secondary">Hover me</Button>
      </Tooltip>
    </div>
  ),
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Small: Story = { args: { size: "sm" } };
export const Large: Story = { args: { size: "lg", content: "Run the agent against today’s calls" } };
export const NoArrow: Story = { args: { arrow: false } };

// "In use" from the Figma board: tooltips sit 6px from the trigger, arrow pointing at it
export const InUse: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex h-60 items-center justify-center gap-(--space-24)">
      <Tooltip content="Copy link" size="sm">
        <IconButton icon={Link} variant="ghost" aria-label="Copy link" />
      </Tooltip>
      <Tooltip content="Search" size="sm">
        <IconButton icon={Search} variant="ghost" aria-label="Search" />
      </Tooltip>
      <Tooltip content="Delete" size="sm">
        <IconButton icon={Trash2} variant="ghost" aria-label="Delete" />
      </Tooltip>
    </div>
  ),
};
