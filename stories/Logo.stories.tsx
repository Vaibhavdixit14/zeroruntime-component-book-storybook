import type { Meta, StoryObj } from "@storybook/nextjs";
import { Logo } from "zeroruntime-component-book";

const meta = {
  title: "Logo",
  component: Logo,
  tags: ["autodocs"],
  argTypes: {
    type: { control: "radio", options: ["mark", "lockup"] },
    size: { control: { type: "range", min: 16, max: 160, step: 4 } },
    showGrid: { control: "boolean" },
    theme: { control: "radio", options: [undefined, "dark", "light"] },
  },
  args: { type: "lockup", size: 82, showGrid: true },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Lockup: Story = {};
export const Mark: Story = { args: { type: "mark", size: 82 } };
export const NoGrid: Story = { args: { type: "mark", size: 82, showGrid: false } };

// Figma Brand & Logo: the logo follows the background it sits on, not the page theme
export const OnBothBackgrounds: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="grid grid-cols-2 gap-(--space-16)">
      {(["dark", "light"] as const).map((theme) => (
        <div key={theme} data-theme={theme} className="flex flex-col items-start gap-(--space-24) rounded-xl bg-(--bg-canvas) p-(--space-32)">
          <Logo type="lockup" size={41} />
          <Logo type="mark" size={41} />
        </div>
      ))}
    </div>
  ),
};

// Product chrome sizes (use 16–48px)
export const Sizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex items-end gap-(--space-24)">
      {[16, 24, 32, 48].map((size) => (
        <div key={size} className="flex flex-col items-center gap-(--space-8)">
          <Logo size={size} />
          <span className="text-table-header text-(--text-tertiary)">{size}</span>
        </div>
      ))}
    </div>
  ),
};
