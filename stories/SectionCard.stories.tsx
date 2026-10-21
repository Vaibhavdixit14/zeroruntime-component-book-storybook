import type { Meta, StoryObj } from "@storybook/nextjs";
import { Button, EmptyState, SectionCard } from "zeroruntime-component-book";

const slot = (
  <div className="flex h-40 items-center justify-center text-body-md-regular text-(--text-tertiary)">
    Content slot — replace with a chart, table or list
  </div>
);

const meta = {
  title: "Patterns/Section Card",
  component: SectionCard,
  tags: ["autodocs"],
  argTypes: { title: { control: "text" }, actionLabel: { control: "text" } },
  args: { title: "Section title", actionLabel: "View all", children: slot },
  decorators: [(Story) => <div className="w-[480px] max-w-full"><Story /></div>],
} satisfies Meta<typeof SectionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const NoAction: Story = { args: { actionLabel: undefined } };
export const WithDescription: Story = {
  args: { title: "Members", description: "People who can see and change agents in Acme Inc.", actionLabel: "Invite" },
};
export const CustomActions: Story = {
  args: { actionLabel: undefined, actions: <Button variant="secondary" size="sm">Export</Button> },
};
export const WithEmptyState: Story = {
  args: {
    title: "Agents",
    children: (
      <EmptyState title="No agents yet" description="Create your first agent to start handling calls." actions={<Button size="sm">New agent</Button>} className="mx-auto" />
    ),
  },
};
