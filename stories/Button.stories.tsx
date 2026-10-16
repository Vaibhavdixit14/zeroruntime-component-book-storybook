import type { Meta, StoryObj } from "@storybook/nextjs";
import { ArrowRight, Plus, Trash2 } from "lucide-react";
import { Button, type ButtonSize, type ButtonVariant } from "zeroruntime-component-book";

const VARIANTS: ButtonVariant[] = ["primary", "destructive", "secondary", "ghost"];
const SIZES: ButtonSize[] = ["lg", "md", "sm"];
const ICONS = { none: undefined, Plus, ArrowRight, Trash2 };

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: VARIANTS },
    size: { control: "select", options: SIZES },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    shortcut: { control: "text" },
    children: { control: "text" },
    leadingIcon: { control: "select", options: Object.keys(ICONS), mapping: ICONS },
    trailingIcon: { control: "select", options: Object.keys(ICONS), mapping: ICONS },
  },
  args: { children: "Label", variant: "primary", size: "lg" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Destructive: Story = { args: { variant: "destructive", children: "Delete agent" } };
export const Secondary: Story = { args: { variant: "secondary" } };
export const Ghost: Story = { args: { variant: "ghost" } };
export const LeadingIcon: Story = { args: { leadingIcon: Plus, children: "New agent" } };
export const TrailingIcon: Story = { args: { variant: "secondary", trailingIcon: ArrowRight, children: "Continue" } };
export const Shortcut: Story = { args: { variant: "secondary", shortcut: "⌘K", children: "Search" } };
export const Loading: Story = { args: { loading: true, children: "Deploying" } };
export const Disabled: Story = { args: { disabled: true } };

const STATES = [
  { name: "Default", props: {} },
  { name: "Loading", props: { loading: true } },
  { name: "Disabled", props: { disabled: true } },
];

// Mirrors the Figma documentation board: states × types, per size
export const AllStates: Story = {
  parameters: { layout: "padded", controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-10">
      {SIZES.map((size) => (
        <section key={size} className="flex flex-col gap-4">
          <h3 className="text-heading-h6">{size.toUpperCase()}</h3>
          <div className="grid grid-cols-[80px_repeat(4,auto)] items-center gap-x-8 gap-y-4 justify-start">
            <span />
            {VARIANTS.map((v) => (
              <span key={v} className="text-table-header text-(--text-secondary)">{v}</span>
            ))}
            {STATES.map((state) => (
              <div key={state.name} className="contents">
                <span className="text-table-header text-(--text-secondary)">{state.name}</span>
                {VARIANTS.map((v) => (
                  <div key={v} className="flex items-center gap-2">
                    <Button variant={v} size={size} {...state.props}>Label</Button>
                    <Button variant={v} size={size} leadingIcon={Plus} {...state.props}>Label</Button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  ),
};
