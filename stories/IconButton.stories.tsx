import type { Meta, StoryObj } from "@storybook/nextjs";
import { Plus, RefreshCw, Settings } from "lucide-react";
import { IconButton, type ButtonSize, type IconButtonVariant } from "zeroruntime-component-book";

const VARIANTS: IconButtonVariant[] = ["primary", "secondary", "ghost"];
const SIZES: ButtonSize[] = ["lg", "md", "sm"];

const meta = {
  title: "IconButton",
  component: IconButton,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: VARIANTS },
    size: { control: "select", options: SIZES },
    disabled: { control: "boolean" },
  },
  args: { icon: Plus, "aria-label": "Add", variant: "secondary", size: "lg" },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Secondary: Story = {};
export const Primary: Story = { args: { variant: "primary" } };
export const Ghost: Story = { args: { variant: "ghost", icon: Settings, "aria-label": "Settings" } };
export const Text: Story = {
  render: ({ variant, size }) => <IconButton variant={variant} size={size} text="1" aria-label="Page 1" />,
};
export const Disabled: Story = { args: { disabled: true, icon: RefreshCw, "aria-label": "Refresh" } };

export const AllStates: Story = {
  parameters: { layout: "padded", controls: { disable: true } },
  render: () => (
    <div className="grid grid-cols-[80px_repeat(3,auto)] items-center gap-x-8 gap-y-4 justify-start">
      <span />
      {VARIANTS.map((v) => (
        <span key={v} className="text-table-header text-(--text-secondary)">{v}</span>
      ))}
      {SIZES.flatMap((size) =>
        [false, true].map((disabled) => (
          <div key={`${size}-${disabled}`} className="contents">
            <span className="text-table-header text-(--text-secondary)">
              {size} {disabled ? "· disabled" : ""}
            </span>
            {VARIANTS.map((v) => (
              <div key={v} className="flex items-center gap-2">
                <IconButton variant={v} size={size} icon={Plus} aria-label="Add" disabled={disabled} />
                <IconButton variant={v} size={size} text="1" aria-label="Page 1" disabled={disabled} />
              </div>
            ))}
          </div>
        )),
      )}
    </div>
  ),
};
