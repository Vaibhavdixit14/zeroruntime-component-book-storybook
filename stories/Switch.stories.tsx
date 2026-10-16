import type { Meta, StoryObj } from "@storybook/nextjs";
import { Switch, SwitchItem } from "zeroruntime-component-book";

const meta = {
  title: "Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "radio", options: ["sm", "lg"] },
    disabled: { control: "boolean" },
  },
  args: { size: "lg", defaultChecked: true, "aria-label": "Enable" },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Small: Story = { args: { size: "sm" } };
export const Disabled: Story = { args: { disabled: true } };

// Mirrors the Figma documentation board (hover and Tab to see Hover / Focus)
export const States: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="grid grid-cols-4 items-center gap-x-(--space-32) gap-y-(--space-20)">
      {(["sm", "lg"] as const).flatMap((size) => [
        <Switch key={`${size}-off`} size={size} aria-label="Off" />,
        <Switch key={`${size}-on`} size={size} defaultChecked aria-label="On" />,
        <Switch key={`${size}-off-d`} size={size} disabled aria-label="Off disabled" />,
        <Switch key={`${size}-on-d`} size={size} defaultChecked disabled aria-label="On disabled" />,
      ])}
    </div>
  ),
};

export const Items: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="grid w-[640px] grid-cols-2 gap-x-(--space-40) gap-y-(--space-24)">
      <SwitchItem label="Label" description="Description text goes here" />
      <SwitchItem label="Label" description="Description text goes here" defaultChecked />
      <SwitchItem label="Label" description="Description text goes here" disabled />
      <SwitchItem label="Label" description="Description text goes here" defaultChecked disabled />
      <SwitchItem label="Label" description="Description text goes here" position="right" />
      <SwitchItem label="Label" description="Description text goes here" position="right" defaultChecked />
    </div>
  ),
};
