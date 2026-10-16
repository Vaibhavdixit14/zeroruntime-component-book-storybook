import type { Meta, StoryObj } from "@storybook/nextjs";
import { ChatInput } from "zeroruntime-component-book";

const noop = () => {};

const meta = {
  title: "ChatInput",
  component: ChatInput,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "radio", options: ["elevated", "subtle"] },
    disabled: { control: "boolean" },
    model: { control: "text" },
  },
  args: { variant: "elevated", onAttach: noop, onMic: noop, onSubmit: noop, onFilesDrop: noop },
  decorators: [(Story) => <div className="w-[560px] max-w-full"><Story /></div>],
} satisfies Meta<typeof ChatInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Elevated: Story = {};
export const Subtle: Story = { args: { variant: "subtle", placeholder: "Ask a follow up…" } };
export const Filled: Story = { args: { defaultValue: "Show me the revenue since the beginning of the year." } };
export const WithModel: Story = { args: { model: "Gemini 3", onModelClick: noop } };
export const Disabled: Story = { args: { disabled: true } };
export const Minimal: Story = { args: { onAttach: undefined, onMic: undefined } };
