import type { Meta, StoryObj } from "@storybook/nextjs";
import { Mail, MessageSquare, Send, AudioLines } from "lucide-react";
import { Tab, TabGroup, TabPanel, Tabs, type TabSize, type TabType } from "zeroruntime-component-book";

const TYPES: TabType[] = ["segment-pill", "outline", "segment", "underline"];

const meta = {
  title: "Tabs",
  component: TabGroup,
  tags: ["autodocs"],
  argTypes: {
    type: { control: "select", options: TYPES },
    size: { control: "radio", options: ["sm", "lg"] },
  },
  args: { type: "underline", size: "lg" },
  render: (args) => (
    <Tabs defaultValue="plan">
      <TabGroup {...args} aria-label="Mode">
        <Tab value="plan" label="Plan" />
        <Tab value="execute" label="Execute" />
        <Tab value="review" label="Review" count={12} />
      </TabGroup>
      <TabPanel value="plan" className="pt-(--space-16) text-body-sm-regular text-(--text-secondary)">Plan panel</TabPanel>
      <TabPanel value="execute" className="pt-(--space-16) text-body-sm-regular text-(--text-secondary)">Execute panel</TabPanel>
      <TabPanel value="review" className="pt-(--space-16) text-body-sm-regular text-(--text-secondary)">Review panel</TabPanel>
    </Tabs>
  ),
} satisfies Meta<typeof TabGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Underline: Story = {};
export const Outline: Story = { args: { type: "outline" } };
export const SegmentPill: Story = { args: { type: "segment-pill" } };
export const Segment: Story = { args: { type: "segment", size: "sm" } };

// Mirrors the Figma Tab Group section: 2 to 5 tabs in each type and size
export const AllGroups: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="grid grid-cols-2 gap-x-(--space-40) gap-y-(--space-24)">
      {TYPES.flatMap((type) =>
        (["lg", "sm"] as TabSize[]).map((size) => (
          <div key={type + size} className="flex flex-col gap-(--space-8)">
            <span className="text-table-header text-(--text-tertiary)">{type} · {size}</span>
            <Tabs defaultValue="0">
              <TabGroup type={type} size={size} aria-label={`${type} ${size}`}>
                {[0, 1, 2, 3].map((i) => (
                  <Tab key={i} value={String(i)} label="Tab" />
                ))}
              </TabGroup>
            </Tabs>
          </div>
        )),
      )}
    </div>
  ),
};

// Usage examples from the Figma documentation board
export const Usage: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-(--space-24)">
      <Tabs defaultValue="design">
        <TabGroup type="outline" size="sm" aria-label="Persona">
          <Tab value="design" label="Design" />
          <Tab value="deploy" label="Deploy" />
        </TabGroup>
      </Tabs>
      <Tabs defaultValue="logs">
        <TabGroup type="segment-pill" size="lg" aria-label="Views">
          <Tab value="logs" label="Call logs" />
          <Tab value="chats" label="Chats" alert />
          <Tab value="workflows" label="Workflows" />
        </TabGroup>
      </Tabs>
      <Tabs defaultValue="pending">
        <TabGroup type="underline" size="lg" aria-label="Status">
          <Tab value="pending" label="Pending" />
          <Tab value="complete" label="Complete" />
          <Tab value="failed" label="Failed" dot />
        </TabGroup>
      </Tabs>
      <Tabs defaultValue="voice">
        <TabGroup type="underline" size="lg" aria-label="Channel">
          <Tab value="voice" label="Voice" icon={AudioLines} />
          <Tab value="chat" label="Chat" icon={MessageSquare} />
          <Tab value="email" label="Email" icon={Mail} />
          <Tab value="sms" label="SMS" icon={Send} count={3} />
        </TabGroup>
      </Tabs>
      <Tabs defaultValue="observe">
        <TabGroup type="segment" size="sm" aria-label="Autonomy">
          <Tab value="observe" label="Observe" />
          <Tab value="suggest" label="Suggest" />
          <Tab value="copilot" label="Co-pilot" />
          <Tab value="autonomous" label="Autonomous" />
        </TabGroup>
      </Tabs>
    </div>
  ),
};
