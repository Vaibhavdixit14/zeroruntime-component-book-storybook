import type { Meta, StoryObj } from "@storybook/nextjs";
import { Inbox, PhoneOff, Sparkles } from "lucide-react";
import { Button, EmptyState } from "zeroruntime-component-book";

const actions = (
  <>
    <Button variant="secondary">Read docs</Button>
    <Button>New agent</Button>
  </>
);

const meta = {
  title: "Patterns/Empty State",
  component: EmptyState,
  tags: ["autodocs"],
  argTypes: { title: { control: "text" }, description: { control: "text" } },
  args: {
    icon: Sparkles,
    title: "No agents yet",
    description: "Create your first agent to start handling calls, chats and tasks.",
    actions,
  },
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const NoActions: Story = { args: { actions: undefined } };
export const PrimaryOnly: Story = { args: { actions: <Button>New agent</Button> } };
export const NoCalls: Story = {
  args: { icon: PhoneOff, title: "No calls yet", description: "Calls show up here as soon as your agent picks one up.", actions: <Button variant="secondary">Make a test call</Button> },
};
export const NoResults: Story = {
  args: { icon: Inbox, title: "Nothing matches", description: "Try a different search or clear the filters.", actions: <Button variant="secondary">Clear filters</Button> },
};
