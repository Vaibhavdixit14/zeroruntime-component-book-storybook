import type { Meta, StoryObj } from "@storybook/nextjs";
import { Plus, X } from "lucide-react";
import { Badge, type BadgeColor, type BadgeShape, type BadgeSize } from "zeroruntime-component-book";

const COLORS: BadgeColor[] = ["green", "red", "yellow", "orange", "blue", "purple", "teal", "pink", "neutral", "white"];
const SHAPES: BadgeShape[] = ["square", "pill"];
const SIZES: BadgeSize[] = ["sm", "md", "lg"];

const meta = {
  title: "Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    color: { control: "select", options: COLORS },
    shape: { control: "radio", options: SHAPES },
    size: { control: "radio", options: SIZES },
    border: { control: "boolean" },
    children: { control: "text" },
  },
  args: { children: "Label", color: "green", shape: "square", size: "md", border: true },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Pill: Story = { args: { shape: "pill" } };
export const NoBorder: Story = { args: { border: false } };
export const WithIcons: Story = { args: { leadingIcon: Plus, trailingIcon: X, size: "lg" } };

// Mirrors the Figma documentation board: colours × shape/border/size
export const Colours: Story = {
  parameters: { layout: "padded", controls: { disable: true } },
  render: () => (
    <div className="grid grid-cols-[160px_repeat(10,auto)] items-center justify-start gap-x-(--space-12) gap-y-(--space-8)">
      <span />
      {COLORS.map((c) => (
        <span key={c} className="text-table-header text-(--text-secondary)">{c}</span>
      ))}
      {SHAPES.flatMap((shape) =>
        [true, false].flatMap((border) =>
          SIZES.map((size) => (
            <div key={`${shape}-${border}-${size}`} className="contents">
              <span className="text-table-header text-(--text-secondary)">
                {shape} · {border ? "border" : "no border"} · {size}
              </span>
              {COLORS.map((color) => (
                <Badge key={color} color={color} shape={shape} size={size} border={border} leadingIcon={Plus}>
                  Label
                </Badge>
              ))}
            </div>
          )),
        ),
      )}
    </div>
  ),
};
