import type { Meta, StoryObj } from "@storybook/nextjs";
import { Badge, type BadgeVariant } from "zeroruntime-component-book";

const VARIANTS: BadgeVariant[] = ["neutral", "accent", "success", "warning", "danger", "outline"];

const meta = {
  title: "Display/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: { variant: { control: "select", options: VARIANTS } },
  args: { children: "Ready", variant: "success" },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithDot: Story = { args: { dot: true } };

export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-wrap gap-2">
      {VARIANTS.map((v) => (
        <Badge key={v} variant={v} dot>
          {v}
        </Badge>
      ))}
    </div>
  ),
};
