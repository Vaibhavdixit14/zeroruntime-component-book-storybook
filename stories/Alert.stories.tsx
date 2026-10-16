import type { Meta, StoryObj } from "@storybook/nextjs";
import { Alert, type AlertVariant } from "zeroruntime-component-book";

const VARIANTS: AlertVariant[] = ["danger", "warning", "neutral", "success"];

const meta = {
  title: "Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: VARIANTS },
    title: { control: "text" },
    children: { control: "text", name: "message" },
  },
  args: {
    variant: "neutral",
    title: "Knowledge base syncing",
    children: "New documents are available to the agent in about a minute.",
  },
  decorators: [
    (Story, { name }) =>
      name === "All Types" ? <Story /> : <div className="w-[480px] max-w-full"><Story /></div>,
  ],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = {};
export const Danger: Story = {
  args: { variant: "danger", title: "Agent failed to deploy", children: "The telephony number is no longer active." },
};
export const Warning: Story = {
  args: { variant: "warning", title: "Usage at 85%", children: "You're close to this month's call minutes." },
};
export const Success: Story = {
  args: { variant: "success", title: "Agent deployed", children: "Support agent is live on +1 555 0100." },
};
export const TitleOnly: Story = { args: { children: undefined } };
export const WithClose: Story = { args: { onClose: () => {} } };

// Mirrors the Figma documentation board
export const AllTypes: Story = {
  parameters: { controls: { disable: true } },
  decorators: [(Story) => <div className="w-[720px] max-w-full"><Story /></div>],
  render: () => (
    <div className="grid grid-cols-2 gap-(--space-16)">
      {VARIANTS.map((variant) => (
        <Alert key={variant} variant={variant} title="Title" onClose={() => {}}>
          Message
        </Alert>
      ))}
    </div>
  ),
};
