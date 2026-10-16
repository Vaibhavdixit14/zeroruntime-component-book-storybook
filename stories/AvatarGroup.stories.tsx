import type { Meta, StoryObj } from "@storybook/nextjs";
import { AvatarGroup } from "zeroruntime-component-book";

const photos = [12, 15, 33, 51, 59, 68, 70].map((img) => ({
  variant: "photo" as const,
  src: `https://i.pravatar.cc/80?img=${img}`,
  name: "John Doe",
}));
const initials = Array.from({ length: 7 }, () => ({
  variant: "initials" as const,
  initials: "JD",
  name: "John Doe",
}));

const meta = {
  title: "AvatarGroup",
  component: AvatarGroup,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: [32, 40] },
    max: { control: { type: "number", min: 1, max: 7 } },
  },
  args: { avatars: photos, size: 32, max: 4 },
} satisfies Meta<typeof AvatarGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Photos: Story = {};
export const Initials: Story = { args: { avatars: initials } };
export const WithoutCount: Story = { args: { avatars: initials.slice(0, 3) } };

// Mirrors the Figma documentation board
export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-(--space-16)">
      <AvatarGroup avatars={photos} size={32} />
      <AvatarGroup avatars={photos} size={40} />
      <AvatarGroup avatars={initials} size={32} />
      <AvatarGroup avatars={initials} size={40} />
      <AvatarGroup avatars={initials.slice(0, 3)} size={32} />
    </div>
  ),
};
