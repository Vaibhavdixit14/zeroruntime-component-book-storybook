import type { Meta, StoryObj } from "@storybook/nextjs";
import { Field, Textarea } from "zeroruntime-component-book";

const meta = {
  title: "Textarea",
  component: Textarea,
  tags: ["autodocs"],
  args: { placeholder: "Describe this deployment…" },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Invalid: Story = { args: { invalid: true } };
export const Disabled: Story = { args: { disabled: true, defaultValue: "Read only notes" } };

export const InField: Story = {
  render: (args) => (
    <Field label="Release notes" htmlFor="notes" hint="Markdown supported.">
      <Textarea id="notes" {...args} />
    </Field>
  ),
};
