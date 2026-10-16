import type { Meta, StoryObj } from "@storybook/nextjs";
import { Command } from "zeroruntime-component-book";

const meta = {
  title: "Command",
  component: Command,
  tags: ["autodocs"],
  args: { command: "npm install @zrt/ui" },
  decorators: [(Story) => <div className="w-[480px] max-w-full"><Story /></div>],
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithFlags: Story = { args: { command: "zrt deploy --env production 'support-agent'" } };
export const Disabled: Story = { args: { disabled: true } };
export const Loading: Story = { args: { loading: true } };
