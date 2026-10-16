import type { Meta, StoryObj } from "@storybook/nextjs";
import { CheckboxItem } from "zeroruntime-component-book";

const meta = {
  title: "CheckboxItem",
  component: CheckboxItem,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "radio", options: ["plain", "card"] },
    disabled: { control: "boolean" },
  },
  args: { label: "Record calls", description: "Store audio for 30 days", variant: "plain" },
} satisfies Meta<typeof CheckboxItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Plain: Story = {};
export const Card: Story = { args: { variant: "card", defaultChecked: true } };
export const Disabled: Story = { args: { disabled: true, defaultChecked: true } };

export const AllStates: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="grid grid-cols-3 gap-(--space-24)">
      {(["plain", "card"] as const).flatMap((variant) =>
        [false, true].flatMap((disabled) =>
          ([false, "indeterminate", true] as const).map((checked) => (
            <CheckboxItem
              key={`${variant}-${disabled}-${checked}`}
              variant={variant}
              disabled={disabled}
              checked={checked}
              label="Label"
              description="Description text"
            />
          )),
        ),
      )}
    </div>
  ),
};
