import type { Meta, StoryObj } from "@storybook/nextjs";
import { Button, Dialog, DialogClose, Field, Input } from "zeroruntime-component-book";

const meta = {
  title: "Overlays/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  argTypes: { size: { control: "select", options: ["sm", "md", "lg"] } },
  args: {
    title: "Rename project",
    description: "This changes the project URL. Existing links will redirect.",
    trigger: <Button variant="outline">Open dialog</Button>,
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithForm: Story = {
  args: {
    children: (
      <Field label="Project name" htmlFor="project-name">
        <Input id="project-name" defaultValue="api-gateway" />
      </Field>
    ),
    footer: (
      <>
        <DialogClose asChild>
          <Button variant="ghost">Cancel</Button>
        </DialogClose>
        <Button>Save</Button>
      </>
    ),
  },
};

export const Destructive: Story = {
  args: {
    size: "sm",
    title: "Delete api-gateway?",
    description: "All deployments and logs for this project will be removed. This can't be undone.",
    trigger: <Button variant="danger">Delete project</Button>,
    footer: (
      <>
        <DialogClose asChild>
          <Button variant="ghost">Cancel</Button>
        </DialogClose>
        <Button variant="danger">Delete</Button>
      </>
    ),
  },
};

export const OpenByDefault: Story = {
  args: { defaultOpen: true, children: <p className="text-muted">Dialog body content.</p> },
};
