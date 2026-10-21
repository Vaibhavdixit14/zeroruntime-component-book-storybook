import type { Meta, StoryObj } from "@storybook/nextjs";
import { FeedItem, type FeedTone } from "zeroruntime-component-book";

const TONES: FeedTone[] = ["danger", "warning", "neutral", "success"];

const meta = {
  title: "Patterns/Feed Item",
  component: FeedItem,
  tags: ["autodocs"],
  argTypes: { tone: { control: "radio", options: TONES } },
  args: {
    tone: "danger",
    title: "Content gap detected",
    message: '47 queries failed due to missing "Subscription Upgrade" documentation.',
    actionLabel: "View details",
    onDismiss: () => {},
  },
  decorators: [(Story, { parameters }) => (parameters.free ? <Story /> : <div className="w-[280px]"><Story /></div>)],
} satisfies Meta<typeof FeedItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Danger: Story = {};
export const Warning: Story = { args: { tone: "warning" } };
export const Neutral: Story = { args: { tone: "neutral" } };
export const Success: Story = { args: { tone: "success" } };
export const NoAction: Story = { args: { actionLabel: undefined } };
export const NoDismiss: Story = { args: { onDismiss: undefined } };

export const AllTones: Story = {
  parameters: { controls: { disable: true }, free: true },
  render: () => (
    <div className="grid w-[1200px] max-w-full grid-cols-4 gap-(--space-16)">
      {TONES.map((tone) => (
        <FeedItem key={tone} tone={tone} title="Content gap detected" message='47 queries failed due to missing "Subscription Upgrade" documentation.' actionLabel="View details" onDismiss={() => {}} />
      ))}
    </div>
  ),
};

// Performance feed column, 10px apart, as on the Dashboard template
export const FeedColumn: Story = {
  parameters: { controls: { disable: true }, free: true },
  decorators: [(Story) => <div className="w-[320px]"><Story /></div>],
  render: () => (
    <div className="flex flex-col gap-[10px]">
      <FeedItem tone="danger" title="Content gap detected" message='47 queries failed due to missing "Subscription Upgrade" documentation.' actionLabel="Add docs" onDismiss={() => {}} />
      <FeedItem tone="danger" title="API timeout issues" message="CRM integration experiencing 12% timeout rate." actionLabel="View logs" onDismiss={() => {}} />
      <FeedItem tone="warning" title="Content update impact" message="Updating 18 security topics could improve success rate by 8%." actionLabel="Review topics" onDismiss={() => {}} />
      <FeedItem tone="neutral" title="Peak traffic pattern" message="Request volume is 3x higher at 2–4 PM EST." actionLabel="Scale agents" onDismiss={() => {}} />
      <FeedItem tone="success" title="Booking flow improved" message="Variant 9 booked 14% more appointments than Variant 8." actionLabel="Promote" onDismiss={() => {}} />
    </div>
  ),
};
