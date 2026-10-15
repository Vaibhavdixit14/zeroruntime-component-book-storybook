import type { Meta, StoryObj } from "@storybook/nextjs";
import { Alert, Button, type AlertVariant } from "zeroruntime-component-book";

const VARIANTS: AlertVariant[] = ["info", "success", "warning", "danger"];

const meta = {
  title: "Display/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: { variant: { control: "select", options: VARIANTS } },
  args: {
    variant: "info",
    title: "New region available",
    children: "Functions can now run in Mumbai (bom1).",
  },
  decorators: [(Story) => <div className="w-[480px] max-w-full"><Story /></div>],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {};
export const Success: Story = { args: { variant: "success", title: "Deployment ready", children: "api-gateway is live." } };
export const Warning: Story = { args: { variant: "warning", title: "Usage at 85%", children: "You're close to your monthly request limit." } };
export const Danger: Story = { args: { variant: "danger", title: "Build failed", children: "image-resize exited with code 1." } };
export const TitleOnly: Story = { args: { children: undefined } };
export const WithAction: Story = {
  args: {
    variant: "danger",
    title: "Build failed",
    children: "image-resize exited with code 1.",
    action: <Button variant="outline" size="sm">View logs</Button>,
  },
};

export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-3">
      {VARIANTS.map((v) => (
        <Alert key={v} variant={v} title={`${v[0].toUpperCase()}${v.slice(1)} alert`}>
          Supporting text for the {v} alert.
        </Alert>
      ))}
    </div>
  ),
};
