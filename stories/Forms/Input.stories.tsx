import type { Meta, StoryObj } from "@storybook/nextjs";
import { Mail, Search } from "lucide-react";
import { Field, Input } from "zeroruntime-component-book";

const meta = {
  title: "Forms/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    invalid: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: { placeholder: "my-project", size: "md" },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithLeftIcon: Story = { args: { leftIcon: <Search />, placeholder: "Search deployments" } };
export const Invalid: Story = { args: { invalid: true, defaultValue: "My Project!" } };
export const Disabled: Story = { args: { disabled: true, defaultValue: "api-gateway" } };

export const Sizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-3">
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
    </div>
  ),
};

export const InField: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-5">
      <Field label="Email" htmlFor="email" hint="We'll send deploy alerts here." required>
        <Input id="email" type="email" leftIcon={<Mail />} placeholder="you@company.com" />
      </Field>
      <Field label="Project name" htmlFor="name" error="Only lowercase letters, numbers and dashes.">
        <Input id="name" invalid defaultValue="My Project!" />
      </Field>
    </div>
  ),
};
