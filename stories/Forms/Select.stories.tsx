import type { Meta, StoryObj } from "@storybook/nextjs";
import { Field, Select } from "zeroruntime-component-book";

const regions = [
  { value: "iad1", label: "Washington, D.C. (iad1)" },
  { value: "fra1", label: "Frankfurt (fra1)" },
  { value: "bom1", label: "Mumbai (bom1)" },
  { value: "syd1", label: "Sydney (syd1)", disabled: true },
];

const meta = {
  title: "Forms/Select",
  component: Select,
  tags: ["autodocs"],
  args: { options: regions, placeholder: "Select a region" },
  decorators: [(Story) => <div className="w-72"><Story /></div>],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithValue: Story = { args: { defaultValue: "fra1" } };
export const Invalid: Story = { args: { invalid: true } };
export const Disabled: Story = { args: { disabled: true, defaultValue: "iad1" } };

export const InField: Story = {
  render: (args) => (
    <Field label="Region" htmlFor="region" hint="Where your functions run.">
      <Select id="region" {...args} />
    </Field>
  ),
};
