import type { Meta, StoryObj } from "@storybook/nextjs";
import { HelperText } from "zeroruntime-component-book";

const meta = {
  title: "HelperText",
  component: HelperText,
  tags: ["autodocs"],
  argTypes: { variant: { control: "select", options: ["default", "success", "error", "warning"] } },
  args: { variant: "default", children: "Helper text" },
} satisfies Meta<typeof HelperText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// Mirrors the Figma documentation board
export const AllTypes: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-(--space-12)">
      <HelperText>Helper text</HelperText>
      <HelperText variant="success">Success message</HelperText>
      <HelperText variant="error">Error message</HelperText>
      <HelperText variant="warning">Warning message</HelperText>
    </div>
  ),
};
