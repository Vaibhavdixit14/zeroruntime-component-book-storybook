import type { Meta, StoryObj } from "@storybook/nextjs";
import { Search } from "zeroruntime-component-book";

const meta = {
  title: "Search",
  component: Search,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "radio", options: ["filled", "outline"] },
    size: { control: "radio", options: ["lg", "md"] },
    shortcut: { control: "text" },
    disabled: { control: "boolean" },
  },
  args: { variant: "filled", size: "lg", shortcut: "⌘S" },
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {};
export const Outline: Story = { args: { variant: "outline" } };
export const WithValue: Story = { args: { defaultValue: "Filled" } };
export const Disabled: Story = { args: { disabled: true } };

// Mirrors the Figma documentation board (focus the first column to see Focus)
export const AllStates: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="grid grid-cols-[repeat(3,auto)] gap-x-(--space-24) gap-y-(--space-16)">
      {(["filled", "outline"] as const).flatMap((variant) =>
        (["lg", "md"] as const).map((size) => (
          <div key={variant + size} className="contents">
            <Search variant={variant} size={size} shortcut="⌘S" className="w-64" />
            <Search variant={variant} size={size} defaultValue="Filled" className="w-64" />
            <Search variant={variant} size={size} disabled className="w-64" />
          </div>
        )),
      )}
    </div>
  ),
};
