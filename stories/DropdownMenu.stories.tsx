import type { Meta, StoryObj } from "@storybook/nextjs";
import { ChevronDown, Copy, Pencil, Trash2 } from "lucide-react";
import { Button, DropdownMenu } from "zeroruntime-component-book";

const meta = {
  title: "DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
  args: {
    trigger: <Button variant="secondary" trailingIcon={ChevronDown}>Actions</Button>,
    items: [
      { label: "Rename", icon: Pencil },
      { label: "Duplicate", icon: Copy },
      { label: "Archive", disabled: true },
      { label: "Delete", icon: Trash2 },
    ],
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const TextOnly: Story = {
  args: { items: [{ label: "Today" }, { label: "Last 7 days" }, { label: "Last 30 days" }] },
};
