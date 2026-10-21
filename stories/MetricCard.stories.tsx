import type { Meta, StoryObj } from "@storybook/nextjs";
import { MetricCard, type MetricColor, type MetricTrend } from "zeroruntime-component-book";

const TRENDS: MetricTrend[] = ["up", "down", "none"];
const COLORS: MetricColor[] = ["blue", "green", "purple", "neutral"];

const meta = {
  title: "Patterns/Metric Card",
  component: MetricCard,
  tags: ["autodocs"],
  argTypes: {
    trend: { control: "radio", options: TRENDS },
    color: { control: "radio", options: COLORS },
    size: { control: "radio", options: ["lg", "sm"] },
    progress: { control: { type: "range", min: 0, max: 100, step: 5 } },
  },
  args: {
    label: "Involvement rate",
    value: "85%",
    delta: "2%",
    trend: "up",
    progress: 85,
    color: "blue",
    caption: "4,151 out of 5,500",
    size: "lg",
  },
  decorators: [
    (Story, { args, parameters }) =>
      parameters.free ? <Story /> : <div className={args.size === "sm" ? "w-60" : "w-[300px]"}><Story /></div>,
  ],
} satisfies Meta<typeof MetricCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Up: Story = {};
export const Down: Story = { args: { trend: "down" } };
export const NoTrend: Story = { args: { trend: "none" } };
export const Small: Story = { args: { size: "sm" } };
export const NoBar: Story = { args: { progress: undefined } };
export const NoCaption: Story = { args: { caption: undefined } };

// Trend × Bar colour, both sizes — the Figma variant grid
export const Matrix: Story = {
  parameters: { controls: { disable: true }, free: true },
  render: () => (
    <div className="flex flex-col gap-(--space-24)">
      {(["lg", "sm"] as const).map((size) => (
        <div key={size} className="grid grid-cols-3 gap-(--space-16)" style={{ width: size === "lg" ? 960 : 760 }}>
          {COLORS.flatMap((color) =>
            TRENDS.map((trend) => (
              <MetricCard
                key={color + trend}
                size={size}
                color={color}
                trend={trend}
                label="Involvement rate"
                value="85%"
                delta="2%"
                progress={85}
                caption="4,151 out of 5,500"
              />
            )),
          )}
        </div>
      ))}
    </div>
  ),
};

// Four KPI cards as on the Dashboard template (3 + 3 + 3 + 3 columns)
export const DashboardRow: Story = {
  parameters: { controls: { disable: true }, free: true },
  decorators: [(Story) => <div className="w-[1200px] max-w-full"><Story /></div>],
  render: () => (
    <div className="grid grid-cols-4 gap-(--space-24)">
      <MetricCard label="Calls handled" value="1,120" delta="12%" trend="up" progress={86} color="blue" caption="1,120 out of 1,300" />
      <MetricCard label="Success rate" value="94.2%" delta="2.1%" trend="up" progress={94} color="green" caption="1,055 out of 1,120" />
      <MetricCard label="Quality score" value="4.4/5" delta="1%" trend="down" progress={88} color="purple" caption="88 out of 100 reviews" />
      <MetricCard label="Active agents" value="12" progress={60} color="neutral" caption="12 out of 20 seats" />
    </div>
  ),
};
