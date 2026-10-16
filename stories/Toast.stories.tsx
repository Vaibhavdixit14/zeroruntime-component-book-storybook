import type { Meta, StoryObj } from "@storybook/nextjs";
import { Button, Toast, ToastProvider, useToast } from "zeroruntime-component-book";

const meta = {
  title: "Toast",
  component: Toast,
  tags: ["autodocs"],
  argTypes: {
    type: { control: "select", options: ["success", "error", "warning", "info"] },
    message: { control: "text" },
    actionLabel: { control: "text" },
  },
  args: { type: "success", message: "Saved.", actionLabel: "Undo" },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {};
export const Error: Story = { args: { type: "error", message: "Couldn’t save.", actionLabel: "Retry" } };
export const Warning: Story = { args: { type: "warning", message: "Saved with warnings." } };
export const Info: Story = { args: { type: "info", message: "Draft restored." } };

// Mirrors the Figma documentation board
export const AllTypes: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-wrap gap-(--space-12)">
      <Toast type="success" message="Saved." actionLabel="Undo" />
      <Toast type="error" message="Couldn’t save." actionLabel="Retry" />
      <Toast type="warning" message="Saved with warnings." actionLabel="Undo" />
      <Toast type="info" message="Draft restored." actionLabel="Undo" />
    </div>
  ),
};

function Demo() {
  const toast = useToast();
  return (
    <div className="flex flex-wrap gap-(--space-8)">
      <Button variant="secondary" onClick={() => toast({ type: "success", message: "Saved.", actionLabel: "Undo" })}>Save</Button>
      <Button variant="secondary" onClick={() => toast({ type: "error", message: "Couldn’t save.", actionLabel: "Retry" })}>Fail</Button>
      <Button variant="secondary" onClick={() => toast({ type: "info", message: "Draft restored." })}>Restore</Button>
    </div>
  );
}

// Click to raise toasts at the bottom of the screen; they dismiss after 5s
export const Live: Story = {
  parameters: { controls: { disable: true }, layout: "fullscreen" },
  render: () => (
    <ToastProvider>
      <div className="flex h-[480px] items-center justify-center">
        <Demo />
      </div>
    </ToastProvider>
  ),
};
