import type { Meta, StoryObj } from "@storybook/nextjs";
import { Tabs } from "zeroruntime-component-book";

const meta = {
  title: "Tabs",
  component: Tabs,
  tags: ["autodocs"],
  args: {
    items: [
      { value: "overview", label: "Overview", content: <p className="text-sm text-muted">Deployment summary.</p> },
      { value: "logs", label: "Logs", content: <p className="font-mono text-sm text-muted">[build] Compiled in 4.2s</p> },
      { value: "env", label: "Environment", content: <p className="text-sm text-muted">3 variables.</p> },
      { value: "billing", label: "Billing", content: null, disabled: true },
    ],
  },
  decorators: [(Story) => <div className="w-[480px] max-w-full"><Story /></div>],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const StartOnLogs: Story = { args: { defaultValue: "logs" } };
