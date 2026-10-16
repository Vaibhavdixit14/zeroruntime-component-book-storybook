import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { Thermometer } from "lucide-react";
import { Badge, Slider } from "zeroruntime-component-book";

const meta = {
  title: "Slider",
  component: Slider,
  tags: ["autodocs"],
  argTypes: {
    defaultValue: { control: { type: "range", min: 0, max: 100, step: 10 } },
    disabled: { control: "boolean" },
  },
  args: { defaultValue: 30, step: 10, scale: ["0", "50", "100"], "aria-label": "Value" },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const NoScale: Story = { args: { scale: undefined } };
export const Disabled: Story = { args: { disabled: true } };

// Mirrors the Figma documentation board
export const Values: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="grid grid-cols-[repeat(3,auto)] gap-x-(--space-40) gap-y-(--space-24)">
      {[0, 30, 50, 100].map((v) => (
        <div key={v} className="flex flex-col gap-(--space-8)">
          <span className="text-table-header text-(--text-tertiary)">Value {v}</span>
          <Slider defaultValue={v} step={10} scale={["0", "50", "100"]} aria-label={`Value ${v}`} className="w-[240px]" />
        </div>
      ))}
    </div>
  ),
};

// Example card from the Progress page
export const AgentTemperature: Story = {
  parameters: { controls: { disable: true } },
  render: function Render() {
    const [value, setValue] = useState(0.3);
    const level = value < 0.34 ? "Medium" : value < 0.67 ? "Balanced" : "Creative";
    return (
      <div className="flex w-[340px] flex-col gap-(--space-16) rounded-(--radius-xl) border border-(--card-border) bg-(--field-bg-subtle) p-(--space-16)">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-(--space-8) text-table-header text-(--text-secondary)">
            <Thermometer size={16} strokeWidth={1.75} aria-hidden />
            Agent temperature
          </span>
          <Badge color="yellow" size="sm" border>
            {level} ({value.toFixed(1)})
          </Badge>
        </div>
        <Slider
          value={value * 100}
          onValueChange={(v) => setValue(v / 100)}
          step={10}
          scale={["0", "0.5", "1"]}
          aria-label="Agent temperature"
          className="w-full"
        />
        <p className="text-field-file-name text-(--text-secondary)">
          Controls how random vs. deterministic agent&apos;s outputs are during sampling.
        </p>
      </div>
    );
  },
};
