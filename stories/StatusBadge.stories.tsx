import type { Meta, StoryObj } from "@storybook/nextjs";
import { StatusBadge, type Status } from "zeroruntime-component-book";

const STATUSES: Status[] = [
  "pending", "active", "success", "canceled", "failed", "error", "rejected",
  "approved", "archived", "none", "deleted", "request", "inQueue", "passed",
];

const meta = {
  title: "StatusBadge",
  component: StatusBadge,
  tags: ["autodocs"],
  argTypes: {
    status: { control: "select", options: STATUSES },
    size: { control: "radio", options: ["md", "lg"] },
  },
  args: { status: "active", size: "md" },
} satisfies Meta<typeof StatusBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const CustomLabel: Story = { args: { status: "failed", children: "Call dropped" } };

// Mirrors the Figma documentation board
export const AllStatuses: Story = {
  parameters: { layout: "padded", controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-(--space-12)">
      {(["lg", "md"] as const).map((size) => (
        <div key={size} className="flex flex-wrap gap-(--space-8)">
          {STATUSES.map((status) => (
            <StatusBadge key={status} status={status} size={size} />
          ))}
        </div>
      ))}
    </div>
  ),
};
