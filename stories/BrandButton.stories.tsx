import type { Meta, StoryObj } from "@storybook/nextjs";
import { ArrowRight } from "lucide-react";
import { BrandButton, Button, type ButtonSize } from "zeroruntime-component-book";

const SIZES: ButtonSize[] = ["lg", "md", "sm"];

const meta = {
  title: "BrandButton",
  component: BrandButton,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: SIZES },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
  args: { children: "Get started", size: "lg" },
} satisfies Meta<typeof BrandButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const TrailingIcon: Story = { args: { children: "Upgrade to Pro", trailingIcon: ArrowRight } };
export const Loading: Story = { args: { loading: true } };
export const Disabled: Story = { args: { disabled: true } };

// One per screen, paired with a quieter Secondary/Ghost alternative
export const PairedWithSecondary: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex items-center gap-3 rounded-xl bg-(--card-bg) p-(--space-16)">
      <BrandButton size="md" trailingIcon={ArrowRight}>Upgrade to Pro</BrandButton>
      <Button variant="secondary" size="md">Maybe later</Button>
    </div>
  ),
};

export const AllStates: Story = {
  parameters: { layout: "padded", controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-4">
      {SIZES.map((size) => (
        <div key={size} className="flex items-center gap-4">
          <span className="w-10 text-table-header text-(--text-secondary)">{size}</span>
          <BrandButton size={size}>Get started</BrandButton>
          <BrandButton size={size} trailingIcon={ArrowRight}>Get started</BrandButton>
          <BrandButton size={size} disabled>Get started</BrandButton>
          <BrandButton size={size} loading>Get started</BrandButton>
        </div>
      ))}
    </div>
  ),
};
