import type { Meta, StoryObj } from "@storybook/nextjs";
import { Folder } from "lucide-react";
import { BreadcrumbItem, BreadcrumbOverflow, Breadcrumbs } from "zeroruntime-component-book";

const meta = {
  title: "Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
  argTypes: { maxVisible: { control: { type: "number", min: 2, max: 6 } } },
  args: {
    items: [
      { label: "Dashboard", href: "#" },
      { label: "Agents", href: "#" },
    ],
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TwoLevels: Story = {};
export const ThreeLevels: Story = {
  args: {
    items: [
      { label: "Workflows", href: "#", icon: Folder },
      { label: "Agents", href: "#" },
      { label: "Customer support" },
    ],
  },
};
export const FourLevels: Story = {
  args: {
    items: [
      { label: "Workflows", href: "#" },
      { label: "Agents", href: "#" },
      { label: "Support", href: "#" },
      { label: "Group 1" },
    ],
  },
};
// Past four levels the earlier ones collapse into "…"
export const Collapsed: Story = {
  args: {
    items: [
      { label: "Dashboard", href: "#" },
      { label: "Settings", href: "#" },
      { label: "Workflows", href: "#" },
      { label: "Agents", href: "#" },
      { label: "Support", href: "#" },
      { label: "Group 1" },
    ],
  },
};

// Mirrors the Figma documentation board: item states and overflow
export const ItemStates: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="grid grid-cols-[repeat(4,auto)] items-center gap-x-(--space-32) gap-y-(--space-12)">
      {["Default", "With icon", "Current", "Overflow"].map((h) => (
        <span key={h} className="text-table-header text-(--text-secondary)">{h}</span>
      ))}
      <BreadcrumbItem href="#">Label</BreadcrumbItem>
      <BreadcrumbItem href="#" icon={Folder}>Label</BreadcrumbItem>
      <BreadcrumbItem current>Label</BreadcrumbItem>
      <BreadcrumbOverflow
        items={[
          { label: "Dashboard", href: "#" },
          { label: "Settings", href: "#" },
          { label: "Admin", href: "#" },
        ]}
      />
    </div>
  ),
};
