import type { Meta, StoryObj } from "@storybook/nextjs";
import { RadioGroup } from "zeroruntime-component-book";

const meta = {
  title: "Forms/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  args: {
    defaultValue: "edge",
    options: [
      { value: "edge", label: "Edge", description: "Runs in every region, lowest latency." },
      { value: "node", label: "Node.js", description: "Full Node APIs in a single region." },
      { value: "python", label: "Python", description: "Coming soon.", disabled: true },
    ],
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
    className: "flex-row gap-6",
    options: [
      { value: "edge", label: "Edge" },
      { value: "node", label: "Node.js" },
    ],
  },
};
