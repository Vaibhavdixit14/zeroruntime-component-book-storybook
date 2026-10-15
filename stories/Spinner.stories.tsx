import type { Meta, StoryObj } from "@storybook/nextjs";
import { Spinner } from "zeroruntime-component-book";

const meta = {
  title: "Spinner",
  component: Spinner,
  tags: ["autodocs"],
  argTypes: { size: { control: "select", options: ["sm", "md", "lg"] } },
  args: { size: "md", label: "Loading" },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Accent: Story = { args: { className: "text-accent" } };

export const Sizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex items-center gap-4 text-muted">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
};
