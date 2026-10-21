import type { Meta, StoryObj } from "@storybook/nextjs";
import { Plus } from "lucide-react";
import { Button, PageHeader, Tab, TabGroup, Tabs } from "zeroruntime-component-book";

const actions = (
  <>
    <Button variant="secondary">Test</Button>
    <Button leadingIcon={Plus}>New agent</Button>
  </>
);

const meta = {
  title: "Patterns/Page Header",
  component: PageHeader,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  argTypes: { title: { control: "text" }, description: { control: "text" } },
  args: {
    title: "Agents",
    description: "Every agent in this workspace, where it's live and how it's doing this week.",
    breadcrumbs: [{ label: "Workspace", href: "#" }, { label: "Agents" }],
    actions,
  },
  decorators: [(Story) => <div className="w-[1000px] max-w-full"><Story /></div>],
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const NoBreadcrumbs: Story = { args: { breadcrumbs: undefined } };
export const NoDescription: Story = { args: { description: undefined } };
export const NoActions: Story = { args: { actions: undefined } };
export const PrimaryOnly: Story = { args: { actions: <Button leadingIcon={Plus}>New agent</Button> } };

export const WithViewTabs: Story = {
  args: {
    tabs: (
      <Tabs defaultValue="all">
        <TabGroup type="underline" size="sm" aria-label="View">
          <Tab value="all" label="All" count={12} />
          <Tab value="live" label="Live" count={7} />
          <Tab value="draft" label="Draft" count={5} />
        </TabGroup>
      </Tabs>
    ),
  },
};
