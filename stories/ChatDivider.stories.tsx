import type { Meta, StoryObj } from "@storybook/nextjs";
import { ChatDivider } from "zeroruntime-component-book";

const meta = {
  title: "ChatDivider",
  component: ChatDivider,
  tags: ["autodocs"],
  args: { label: "Task initiated" },
  decorators: [(Story) => <div className="w-[560px] max-w-full"><Story /></div>],
} satisfies Meta<typeof ChatDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Today: Story = { args: { label: "Today" } };
