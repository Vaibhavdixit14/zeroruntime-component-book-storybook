import type { Meta, StoryObj } from "@storybook/nextjs";
import { ArrowRight, Plus, Trash2 } from "lucide-react";
import { Button, type ButtonSize, type ButtonVariant } from "zeroruntime-component-book";

const VARIANTS: ButtonVariant[] = ["primary", "secondary", "outline", "ghost", "danger"];
const SIZES: ButtonSize[] = ["sm", "md", "lg"];

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: VARIANTS },
    size: { control: "select", options: [...SIZES, "icon"] },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
  args: { children: "Deploy", variant: "primary", size: "md" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Secondary: Story = { args: { variant: "secondary" } };
export const Outline: Story = { args: { variant: "outline" } };
export const Ghost: Story = { args: { variant: "ghost" } };
export const Danger: Story = { args: { variant: "danger", children: "Delete" } };

export const Loading: Story = { args: { loading: true, children: "Deploying" } };
export const Disabled: Story = { args: { disabled: true } };

export const WithIcons: Story = {
  args: {
    children: "New deployment",
    leftIcon: <Plus className="size-4" />,
    rightIcon: <ArrowRight className="size-4" />,
  },
};

export const IconOnly: Story = {
  args: {
    size: "icon",
    variant: "outline",
    children: <Trash2 className="size-4" />,
    "aria-label": "Delete",
  },
};

export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      {SIZES.map((size) => (
        <div key={size} className="flex items-center gap-3">
          {VARIANTS.map((variant) => (
            <Button key={variant} variant={variant} size={size}>
              {variant}
            </Button>
          ))}
        </div>
      ))}
    </div>
  ),
};
