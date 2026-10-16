import type { Meta, StoryObj } from "@storybook/nextjs";
import { Globe, PenLine, Plug, Upload } from "lucide-react";
import { OptionCard, OptionCardGroup } from "zeroruntime-component-book";

const meta = {
  title: "Option Card",
  component: OptionCard,
  tags: ["autodocs"],
  argTypes: {
    heading: { control: "text" },
    description: { control: "text" },
    disabled: { control: "boolean" },
  },
  args: {
    value: "a",
    heading: "Option title",
    description: "Short description of this option.",
    icon: Upload,
  },
  render: (args) => (
    <OptionCardGroup aria-label="Option" className="w-58 grid-cols-1">
      <OptionCard {...args} />
    </OptionCardGroup>
  ),
} satisfies Meta<typeof OptionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const NoIcon: Story = { args: { icon: undefined } };
export const Disabled: Story = { args: { disabled: true } };

// Mirrors the Figma documentation board: Default · Hover (hover it) · Active · Disabled
export const States: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <OptionCardGroup aria-label="States" defaultValue="active" className="grid-cols-[repeat(4,--spacing(58))]">
      {["default", "hover", "active"].map((value) => (
        <OptionCard key={value} value={value} icon={Upload} heading="Option title" description="Short description of this option." />
      ))}
      <OptionCard value="disabled" icon={Upload} heading="Option title" description="Short description of this option." disabled />
    </OptionCardGroup>
  ),
};

export const KnowledgeSource: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <OptionCardGroup aria-label="Knowledge source" defaultValue="files" className="w-[800px] max-w-full grid-cols-4">
      <OptionCard value="files" icon={Upload} heading="Upload files" description="PDFs, Word, text or CSV." />
      <OptionCard value="website" icon={Globe} heading="A website" description="Read your FAQ or help pages and keep them in sync." />
      <OptionCard value="write" icon={PenLine} heading="Write it here" description="Quick answers, like parking or prices policy." />
      <OptionCard value="app" icon={Plug} heading="Connect an app" description="Google Drive, Notion, Zendesk and more." />
    </OptionCardGroup>
  ),
};
