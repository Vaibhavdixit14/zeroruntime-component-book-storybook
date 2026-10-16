import type { Meta, StoryObj } from "@storybook/nextjs";
import { Notification, type NotificationType } from "zeroruntime-component-book";

const TYPES: NotificationType[] = ["info", "danger", "warning", "success"];

// Stand-in until Text input ships
const ConfirmInput = () => (
  <input
    aria-label="Type the agent name to confirm"
    placeholder="Appointment Booker"
    className="h-10 w-full rounded-(--radius-lg) border border-(--field-border) bg-(--field-bg) px-(--space-12) text-body-md-regular text-(--field-text) outline-none placeholder:text-(--field-placeholder) focus:border-(--field-border-focus)"
  />
);

const meta = {
  title: "Notification",
  component: Notification,
  tags: ["autodocs"],
  argTypes: {
    type: { control: "select", options: TYPES },
    label: { control: "text" },
    children: { control: "text", name: "body" },
  },
  args: {
    type: "info",
    label: "Toast label",
    children: "Snackbar text",
    onClose: () => {},
    primaryAction: { label: "Action 1" },
    secondaryAction: { label: "Action 2" },
  },
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {};
export const Danger: Story = { args: { type: "danger", primaryAction: { label: "Delete" } } };
export const Warning: Story = { args: { type: "warning" } };
export const Success: Story = { args: { type: "success" } };
export const NoActions: Story = { args: { primaryAction: undefined, secondaryAction: undefined } };
export const SingleAction: Story = { args: { secondaryAction: undefined } };

// Agent examples from the Figma documentation board
export const AgentExamples: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="grid grid-cols-1 items-start gap-(--space-16) lg:grid-cols-2">
      <Notification type="success" label="Run complete" onClose={() => {}} primaryAction={{ label: "View call" }} secondaryAction={{ label: "Dismiss" }}>
        Appointment Booker finished 24 calls. 22 booked, 2 need follow-up.
      </Notification>
      <Notification type="warning" label="Override recommendation?" onClose={() => {}} primaryAction={{ label: "Override" }} secondaryAction={{ label: "Keep" }}>
        The agent suggests a 15-minute slot. Override with 30 minutes for John Doe?
      </Notification>
      <Notification type="info" label="Agent paused" onClose={() => {}} primaryAction={{ label: "Resume" }} secondaryAction={{ label: "View logs" }}>
        Lead Qualifier paused after 3 failed calls in a row.
      </Notification>
      <Notification type="danger" label="Delete agent?" onClose={() => {}} input={<ConfirmInput />} primaryAction={{ label: "Delete agent" }}>
        This removes Appointment Booker and its call history. Type the agent name to confirm.
      </Notification>
    </div>
  ),
};

export const AllTypes: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="grid grid-cols-1 items-start gap-(--space-16) lg:grid-cols-2">
      {TYPES.map((type) => (
        <Notification
          key={type}
          type={type}
          label="Toast label"
          onClose={() => {}}
          primaryAction={{ label: type === "danger" ? "Delete" : "Action 1" }}
          secondaryAction={{ label: "Action 2" }}
        >
          Snackbar text
        </Notification>
      ))}
    </div>
  ),
};
