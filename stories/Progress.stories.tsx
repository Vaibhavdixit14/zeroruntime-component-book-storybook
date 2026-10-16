import type { Meta, StoryObj } from "@storybook/nextjs";
import { Brain, Calendar, Send, Sunrise, Volume2, Zap } from "lucide-react";
import { Badge, Meter, ProgressBar, SegmentedProgress } from "zeroruntime-component-book";

const STEPS = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const meta = {
  title: "Progress",
  component: ProgressBar,
  tags: ["autodocs"],
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100, step: 10 } },
    label: { control: "text" },
  },
  args: { value: 50, showValue: true },
  decorators: [
    (Story, { parameters }) =>
      parameters.free ? <Story /> : <div className="w-[480px] max-w-full"><Story /></div>,
  ],
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bar: Story = {};
export const WithLabel: Story = { args: { label: "Thinking", icon: Brain } };

export const BarValues: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-(--space-12)">
      {[0, 10, 50, 70, 90, 100].map((v) => (
        <ProgressBar key={v} value={v} />
      ))}
    </div>
  ),
};

export const AgentStages: Story = {
  parameters: { controls: { disable: true }, free: true },
  decorators: [(Story) => <div className="w-[560px] max-w-full"><Story /></div>],
  render: () => (
    <div className="flex flex-col gap-(--space-12)">
      <ProgressBar value={0} label="Awakening" icon={Sunrise} />
      <ProgressBar value={10} label="Priming" icon={Zap} />
      <ProgressBar value={50} label="Thinking" icon={Brain} />
      <ProgressBar value={90} label="Delivering" icon={Send} />
    </div>
  ),
};

export const Segmented: Story = {
  parameters: { controls: { disable: true }, free: true },
  render: () => (
    <div className="grid grid-cols-[auto_auto] items-end gap-x-(--space-40) gap-y-(--space-24)">
      {(["block", "compact", "tick"] as const).flatMap((variant) =>
        (["neutral", "green"] as const).map((color) => (
          <div key={variant + color} className="flex flex-col gap-(--space-8)">
            <span className="text-table-header text-(--text-tertiary)">{variant} · {color}</span>
            <SegmentedProgress value={50} variant={variant} color={color} aria-label={`${variant} ${color}`} />
          </div>
        )),
      )}
    </div>
  ),
};

export const MeterValues: Story = {
  parameters: { controls: { disable: true }, free: true },
  render: () => (
    <div className="grid grid-cols-[repeat(4,180px)] gap-x-(--space-40) gap-y-(--space-20)">
      {STEPS.map((v) => (
        <Meter key={v} value={v} aria-label="Level" />
      ))}
    </div>
  ),
};

// Examples · Cards from the Figma documentation board
const cardClasses = "flex w-[300px] flex-col gap-(--space-16) rounded-xl border border-(--card-border) bg-(--field-bg-subtle) p-(--space-16)";
const cardTitle = "flex items-center gap-(--space-8) text-table-header text-(--text-secondary)";

export const ExampleCards: Story = {
  parameters: { controls: { disable: true }, free: true },
  render: () => (
    <div className="flex w-[640px] max-w-full flex-wrap items-start gap-(--space-16)">
      <div className={cardClasses}>
        <div className="flex items-center justify-between">
          <span className={cardTitle}><Calendar size={16} strokeWidth={1.75} aria-hidden />Vesting</span>
          <Badge color="green" size="sm">Cliff passed</Badge>
        </div>
        <SegmentedProgress value={50} color="green" segments={24} aria-label="Vesting" className="[&>span]:w-2" />
        <div className="flex flex-col gap-(--space-4)">
          <span className="text-field-file-name text-(--text-primary)">12 of 24 months</span>
          <span className="text-field-file-name text-(--text-secondary)">2.5% RSA</span>
        </div>
      </div>
      <div className={cardClasses}>
        <span className={cardTitle}><Volume2 size={16} strokeWidth={1.75} aria-hidden />Volume</span>
        <Meter value={60} aria-label="Volume" />
      </div>
    </div>
  ),
};
