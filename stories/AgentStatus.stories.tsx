import type { Meta, StoryObj } from "@storybook/nextjs";
import { AgentStatus, type AgentStatusState, type AgentStatusValue } from "zeroruntime-component-book";

const STATUSES: AgentStatusValue[] = [
  "awakening", "thinking", "priming", "delivering", "interrupted", "failed", "timedOut", "queued",
];
const STATES: AgentStatusState[] = ["idle", "active", "disabled"];

const meta = {
  title: "AgentStatus",
  component: AgentStatus,
  tags: ["autodocs"],
  argTypes: {
    status: { control: "select", options: STATUSES },
    state: { control: "radio", options: STATES },
  },
  args: { status: "thinking", state: "active" },
} satisfies Meta<typeof AgentStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// Mirrors the Figma documentation board
export const AllStatuses: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="grid grid-cols-[repeat(3,auto)] gap-x-(--space-48) gap-y-(--space-16)">
      {STATES.map((s) => (
        <span key={s} className="text-table-header text-(--text-secondary)">{s}</span>
      ))}
      {STATUSES.flatMap((status) =>
        STATES.map((state) => <AgentStatus key={`${status}-${state}`} status={status} state={state} />),
      )}
    </div>
  ),
};
