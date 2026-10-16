import type { Meta, StoryObj } from "@storybook/nextjs";
import { Radio, RadioCard, RadioGroup, RadioItem } from "zeroruntime-component-book";

const OPTIONS = [
  { value: "a", label: "Label" },
  { value: "b", label: "Label" },
  { value: "c", label: "Label" },
];

const meta = {
  title: "Radio",
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {
    direction: { control: "radio", options: ["vertical", "horizontal"] },
    label: { control: "text" },
    helper: { control: "text" },
    disabled: { control: "boolean" },
  },
  args: { options: OPTIONS, defaultValue: "a", label: "Label", helper: "Helper text", direction: "vertical" },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GroupVertical: Story = {};
export const GroupHorizontal: Story = { args: { direction: "horizontal" } };

export const WithDescriptions: Story = {
  args: {
    label: "Voice",
    helper: undefined,
    defaultValue: "warm",
    options: [
      { value: "warm", label: "Warm", description: "Friendly and conversational." },
      { value: "neutral", label: "Neutral", description: "Clear and even." },
      { value: "formal", label: "Formal", description: "Polite and precise.", disabled: true },
    ],
  },
};

// Mirrors the Figma documentation board
export const States: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-(--space-24)">
      <div className="flex gap-(--space-40)">
        <RadioGroup defaultValue="on" aria-label="True default"><Radio value="on" aria-label="True default" /></RadioGroup>
        <RadioGroup defaultValue="on" disabled><Radio value="on" aria-label="True disabled" /></RadioGroup>
        <RadioGroup><Radio value="on" aria-label="False default" /></RadioGroup>
        <RadioGroup disabled><Radio value="on" aria-label="False disabled" /></RadioGroup>
      </div>
      <div className="flex gap-(--space-40)">
        <RadioGroup><RadioItem value="a" label="Label" description="Description" /></RadioGroup>
        <RadioGroup defaultValue="a"><RadioItem value="a" label="Label" description="Description" /></RadioGroup>
        <RadioGroup disabled><RadioItem value="a" label="Label" description="Description" /></RadioGroup>
        <RadioGroup disabled defaultValue="a"><RadioItem value="a" label="Label" description="Description" /></RadioGroup>
      </div>
    </div>
  ),
};

export const Cards: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <RadioGroup defaultValue="yearly" className="gap-(--space-12)">
      <RadioCard value="yearly" label="Yearly" badge="Save 33%" price="$19.99/month" billing="$240 billed yearly" />
      <RadioCard value="monthly" label="Monthly" price="$24/month" billing="$24 billed monthly" />
    </RadioGroup>
  ),
};

export const ItemsWithValueInCard: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex w-[320px] flex-col gap-(--space-16) rounded-xl border border-(--card-border) bg-(--card-bg) p-(--space-20)">
      <p className="text-heading-h6 text-(--text-primary)">Billing Period</p>
      <RadioGroup defaultValue="monthly">
        <RadioItem value="monthly" label="Monthly" valueLabel="$9.99/month" />
        <RadioItem value="yearly" label="Yearly" valueLabel="$12.99/month" />
      </RadioGroup>
    </div>
  ),
};
