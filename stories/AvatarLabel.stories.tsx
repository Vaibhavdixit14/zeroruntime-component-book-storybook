import type { Meta, StoryObj } from "@storybook/nextjs";
import { AvatarLabel } from "zeroruntime-component-book";

const meta = {
  title: "AvatarLabel",
  component: AvatarLabel,
  tags: ["autodocs"],
  args: { name: "John Doe" },
} satisfies Meta<typeof AvatarLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Initials: Story = {};
export const Photo: Story = {
  args: { avatar: { variant: "photo", src: "https://i.pravatar.cc/80?img=12" } },
};
export const Placeholder: Story = { args: { name: "Support agent", avatar: { variant: "teal" } } };
