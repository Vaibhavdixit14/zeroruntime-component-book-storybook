import type { Meta, StoryObj } from "@storybook/nextjs";
import { Button, Toaster, toast } from "zeroruntime-component-book";

const meta = {
  title: "Toast",
  component: Toaster,
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: "select",
      options: ["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"],
    },
  },
  args: { position: "bottom-right" },
  render: (args) => (
    <>
      <Toaster {...args} />
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" onClick={() => toast("Project renamed")}>Default</Button>
        <Button variant="outline" onClick={() => toast.success("Deployment ready", { description: "api-gateway is live." })}>
          Success
        </Button>
        <Button variant="outline" onClick={() => toast.error("Build failed", { description: "image-resize exited with code 1." })}>
          Error
        </Button>
        <Button variant="outline" onClick={() => toast.warning("Usage at 85%")}>Warning</Button>
        <Button variant="outline" onClick={() => toast.info("New region available")}>Info</Button>
        <Button
          variant="outline"
          onClick={() =>
            toast("Deployment deleted", { action: { label: "Undo", onClick: () => toast.success("Restored") } })
          }
        >
          With action
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.promise(new Promise((r) => setTimeout(r, 2000)), {
              loading: "Deploying…",
              success: "Deployed",
              error: "Failed",
            })
          }
        >
          Promise
        </Button>
      </div>
    </>
  ),
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const TopCenter: Story = { args: { position: "top-center" } };
