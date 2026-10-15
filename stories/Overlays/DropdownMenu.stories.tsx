import type { Meta, StoryObj } from "@storybook/nextjs";
import { Copy, ExternalLink, MoreHorizontal, RotateCw, Trash2 } from "lucide-react";
import { Button, DropdownMenu } from "zeroruntime-component-book";

const meta = {
  title: "Overlays/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
  args: {
    trigger: (
      <Button variant="outline" size="icon" aria-label="Deployment actions">
        <MoreHorizontal className="size-4" />
      </Button>
    ),
    items: [
      { type: "label", label: "api-gateway" },
      { label: "Visit", icon: <ExternalLink />, shortcut: "⌘O" },
      { label: "Copy URL", icon: <Copy />, shortcut: "⌘C" },
      { label: "Redeploy", icon: <RotateCw /> },
      { label: "Promote to production", disabled: true },
      { type: "separator" },
      { label: "Delete", icon: <Trash2 />, danger: true },
    ],
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const AlignStart: Story = {
  args: { align: "start", trigger: <Button variant="outline">Actions</Button> },
};
