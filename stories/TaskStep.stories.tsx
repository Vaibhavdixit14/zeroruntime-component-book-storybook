import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { Search } from "lucide-react";
import { TaskStep } from "zeroruntime-component-book";

const meta = {
  title: "TaskStep",
  component: TaskStep,
  tags: ["autodocs"],
  argTypes: { type: { control: "radio", options: ["step", "active", "subStep"] } },
  args: { type: "step", label: "Step" },
  decorators: [(Story) => <div className="w-[520px] max-w-full"><Story /></div>],
} satisfies Meta<typeof TaskStep>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Step: Story = {};
export const Active: Story = {
  args: {
    type: "active",
    children: "ZRT is the world-first Figma design system for building scalable agentic experiences with AI.",
  },
};
export const SubStep: Story = { args: { type: "subStep", label: "Write version 1" } };

// An agent thread: steps, an expandable active step and sub-steps
export const Timeline: Story = {
  parameters: { controls: { disable: true } },
  render: function Render() {
    const [open, setOpen] = useState(true);
    return (
      <div>
        <TaskStep label="Company analysis" icon={Search} />
        <TaskStep label="Brand voice" />
        <TaskStep label="Running tasks in parallel" type="active" expanded={open} onToggle={() => setOpen(!open)}>
          <div className="flex flex-col gap-(--space-8)">
            <TaskStep type="subStep" label="Write version 1" />
            <TaskStep type="subStep" label="Write version 2" />
            <span>ZRT is the world-first Figma design system for building scalable agentic experiences with AI.</span>
          </div>
        </TaskStep>
        <TaskStep label="Testing" showConnector={false} expandable={false} />
      </div>
    );
  },
};
