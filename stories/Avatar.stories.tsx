import type { Meta, StoryObj } from "@storybook/nextjs";
import { Avatar, type AvatarSize, type AvatarVariant } from "zeroruntime-component-book";

const VARIANTS: AvatarVariant[] = ["neutral", "blue", "purple", "orange", "teal", "pink", "photo", "initials"];
const SIZES: AvatarSize[] = [16, 20, 24, 32, 40, 48, 64, 80];
const PHOTO = "https://i.pravatar.cc/160?img=12";

const meta = {
  title: "Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: VARIANTS },
    size: { control: "select", options: SIZES },
    initials: { control: "text" },
    src: { control: "text" },
  },
  args: { variant: "blue", size: 80, name: "John Doe", initials: "JD", src: PHOTO },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Placeholder: Story = {};
export const Photo: Story = { args: { variant: "photo" } };
export const Initials: Story = { args: { variant: "initials" } };

// Mirrors the Figma documentation board
export const Styles: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex gap-(--space-16)">
      {VARIANTS.map((variant) => (
        <Avatar key={variant} variant={variant} size={80} initials="JD" src={PHOTO} name="John Doe" />
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  parameters: { layout: "padded", controls: { disable: true } },
  render: () => (
    <div className="grid grid-cols-[80px_repeat(8,auto)] items-center justify-start gap-x-(--space-16) gap-y-(--space-12)">
      {VARIANTS.map((variant) => (
        <div key={variant} className="contents">
          <span className="text-table-header text-(--text-secondary)">{variant}</span>
          {SIZES.map((size) => (
            <Avatar key={size} variant={variant} size={size} initials="JD" src={PHOTO} name="John Doe" />
          ))}
        </div>
      ))}
    </div>
  ),
};
