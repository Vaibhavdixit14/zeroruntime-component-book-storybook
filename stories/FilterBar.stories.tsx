import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { FilterBar, type AppliedFilter } from "zeroruntime-component-book";

const statuses = [
  { value: "all", label: "All statuses" },
  { value: "live", label: "Live" },
  { value: "draft", label: "Draft" },
  { value: "paused", label: "Paused" },
];
const directions = [
  { value: "all", label: "All directions" },
  { value: "in", label: "Inbound" },
  { value: "out", label: "Outbound" },
];
const outcomes = [
  { value: "all", label: "Any outcome" },
  { value: "booked", label: "Booked" },
  { value: "handed-off", label: "Handed off" },
];

const meta = {
  title: "Patterns/Filter Bar",
  component: FilterBar,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  args: {
    searchPlaceholder: "Search agents",
    filters: [{ id: "status", options: statuses, defaultValue: "all" }],
  },
  decorators: [(Story) => <div className="w-[1000px] max-w-full"><Story /></div>],
} satisfies Meta<typeof FilterBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const SearchOnly: Story = { args: { ranges: [], filters: [] } };
export const NoRange: Story = { args: { ranges: [] } };
export const ThreeFilters: Story = {
  args: {
    filters: [
      { id: "status", options: statuses, defaultValue: "all" },
      { id: "direction", options: directions, defaultValue: "all" },
      { id: "outcome", options: outcomes, defaultValue: "all" },
    ],
    onMoreFilters: () => {},
  },
};

// Chips under the controls; × removes one, Clear all removes every chip
export const AppliedFilters: Story = {
  parameters: { controls: { disable: true } },
  render: function Render(args) {
    const [applied, setApplied] = useState<AppliedFilter[]>([
      { id: "status", label: "Status: Failed" },
      { id: "direction", label: "Direction: Inbound" },
    ]);
    return (
      <FilterBar
        {...args}
        filters={[
          { id: "status", options: statuses, defaultValue: "all" },
          { id: "direction", options: directions, defaultValue: "all" },
        ]}
        onMoreFilters={() => {}}
        applied={applied}
        onRemoveApplied={(id) => setApplied(applied.filter((a) => a.id !== id))}
        onClearApplied={() => setApplied([])}
      />
    );
  },
};
