import type { Meta, StoryObj } from "@storybook/nextjs";
import { Insights, type Insight } from "zeroruntime-component-book";

const items: Insight[] = [
  { id: "gap", tone: "danger", title: "Content gap detected", message: "23 questions about parking had no answer in any source.", actionLabel: "Add an answer" },
  { id: "stale", tone: "danger", title: "May be out of date", message: "help-center.pdf is 94 days old and 6 answers quoted from it mention last year's hours.", actionLabel: "Review source" },
  { id: "win", tone: "warning", title: "Biggest win", message: "Covering accepted insurance plans would answer about 41 more calls a week.", actionLabel: "Draft an answer" },
];

const meta = {
  title: "Patterns/Insights",
  component: Insights,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  argTypes: { title: { control: "text" }, summary: { control: "text" } },
  args: { title: "Insights", summary: "From the last 7 days of calls · 2 to fix · 1 opportunity", items },
  decorators: [(Story) => <div className="w-[1100px] max-w-full"><Story /></div>],
} satisfies Meta<typeof Insights>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Expanded: Story = {};
export const Collapsed: Story = { args: { defaultCollapsed: true } };
export const Empty: Story = { args: { items: [], summary: "From the last 7 days of calls · All clear" } };
export const WithDismissed: Story = { args: { dismissed: ["stale"], onDismiss: () => {} } };
