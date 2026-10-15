import type { Meta, StoryObj } from "@storybook/nextjs";
import { Avatar } from "zeroruntime-component-book";

const meta = {
  title: "Display/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: { size: { control: "select", options: ["sm", "md", "lg"] } },
  args: { name: "Ada Lovelace", size: "md" },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Initials: Story = {};
export const WithImage: Story = { args: { src: "https://i.pravatar.cc/150?img=12" } };
export const BrokenImage: Story = { args: { src: "https://invalid.example/avatar.png" } };

export const Sizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex items-end gap-3">
      <Avatar name="Ada Lovelace" size="sm" />
      <Avatar name="Ada Lovelace" size="md" />
      <Avatar name="Ada Lovelace" size="lg" />
    </div>
  ),
};
