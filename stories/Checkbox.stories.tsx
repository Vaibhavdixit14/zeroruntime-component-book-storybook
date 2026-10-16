import type { Meta, StoryObj } from "@storybook/nextjs";
import { Checkbox, type CheckboxVariant } from "zeroruntime-component-book";

const VARIANTS: CheckboxVariant[] = ["square", "soft"];
const VALUES = [false, "indeterminate", true] as const;

const meta = {
  title: "Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "radio", options: VARIANTS },
    disabled: { control: "boolean" },
  },
  args: { variant: "square", "aria-label": "Select" },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Square: Story = {};
export const Soft: Story = { args: { variant: "soft", defaultChecked: true } };
export const Indeterminate: Story = { args: { checked: "indeterminate" } };

// Mirrors the Figma documentation board: style × value × state
export const AllStates: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="grid grid-cols-[140px_repeat(3,96px)] items-center gap-y-(--space-16)">
      <span />
      {["Unchecked", "Indet.", "Checked"].map((h) => (
        <span key={h} className="text-table-header text-(--text-secondary)">{h}</span>
      ))}
      {VARIANTS.flatMap((variant) =>
        [false, true].map((disabled) => (
          <div key={`${variant}-${disabled}`} className="contents">
            <span className="text-table-header text-(--text-secondary)">
              {variant} · {disabled ? "disabled" : "default"}
            </span>
            {VALUES.map((value) => (
              <Checkbox key={String(value)} variant={variant} checked={value} disabled={disabled} aria-label="Select" />
            ))}
          </div>
        )),
      )}
    </div>
  ),
};
