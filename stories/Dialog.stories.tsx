import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { Trash2, UserPlus } from "lucide-react";
import {
  Alert,
  Button,
  Dialog,
  DialogClose,
  ProgressBar,
  RadioGroup,
  Select,
  TextArea,
  TextInput,
  ToastProvider,
  useToast,
} from "zeroruntime-component-book";

const meta = {
  title: "Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
  argTypes: {
    size: { control: "radio", options: ["sm", "md", "lg"] },
    title: { control: "text" },
    description: { control: "text" },
    hideClose: { control: "boolean" },
  },
  args: {
    title: "Invite teammates",
    description: "They'll get an email with a link to join Acme Inc.",
    size: "md",
  },
  decorators: [
    (Story) => (
      <ToastProvider>
        <Backdrop>
          <Story />
        </Backdrop>
      </ToastProvider>
    ),
  ],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

// Busy page behind the dialog so the blur is visible
function Backdrop({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col gap-(--space-24) p-(--space-40)">
      <div className="flex items-center justify-between">
        <h1 className="text-heading-h3 text-(--text-primary)">Overview</h1>
        {children}
      </div>
      <div className="grid grid-cols-3 gap-(--space-24)">
        {[["Calls handled", "1,120", 86], ["Success rate", "94.2%", 94], ["Quality score", "4.4/5", 88]].map(([label, value, pct]) => (
          <div key={label} className="flex flex-col gap-(--space-12) rounded-xl border border-(--card-border) bg-(--card-bg) p-(--space-24)">
            <p className="text-body-lg-regular text-(--text-primary)">{label}</p>
            <p className="text-metric-value text-(--text-primary)">{value}</p>
            <ProgressBar value={pct as number} showValue={false} />
          </div>
        ))}
      </div>
    </div>
  );
}

export const Form: Story = {
  render: (args) => (
    <Dialog
      {...args}
      trigger={<Button leadingIcon={UserPlus}>Invite</Button>}
      footer={
        <>
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button>Send invite</Button>
          </DialogClose>
        </>
      }
    >
      <div className="flex flex-col gap-(--space-16)">
        <TextInput label="Email" type="email" placeholder="john.doe@example.com" required className="w-full" />
        <Select label="Role" options={[{ value: "editor", label: "Editor" }, { value: "viewer", label: "Viewer" }]} defaultValue="editor" />
        <TextArea label="Message" placeholder="Optional note" className="w-full" />
      </div>
    </Dialog>
  ),
};

export const DefaultOpen: Story = {
  ...Form,
  args: { defaultOpen: true },
};

function ConfirmDelete() {
  const toast = useToast();
  return (
    <Dialog
      size="sm"
      title="Delete agent?"
      description="This removes Appointment Booker and its call history. You can't undo this."
      trigger={
        <Button variant="destructive" leadingIcon={Trash2}>
          Delete agent
        </Button>
      }
      footer={
        <>
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="destructive" onClick={() => toast({ type: "success", message: "Agent deleted.", actionLabel: "Undo" })}>
              Delete
            </Button>
          </DialogClose>
        </>
      }
    />
  );
}

export const Confirm: Story = { parameters: { controls: { disable: true } }, render: () => <ConfirmDelete /> };

function ControlledLarge() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>
        Change plan
      </Button>
      <Dialog
        open={open}
        onOpenChange={setOpen}
        size="lg"
        title="Change plan"
        description="Billing switches at the start of your next cycle."
        footer={
          <>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Not now
            </Button>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </>
        }
      >
        <div className="flex flex-col gap-(--space-16)">
          <Alert variant="warning" title="Usage at 85%">You're close to this month's call minutes.</Alert>
          <RadioGroup
            label="Plan"
            defaultValue="pro"
            options={[
              { value: "starter", label: "Starter", description: "1,000 minutes", valueLabel: "$0" },
              { value: "pro", label: "Pro", description: "10,000 minutes", valueLabel: "$24/month" },
              { value: "scale", label: "Scale", description: "Unlimited minutes", valueLabel: "Contact us" },
            ]}
          />
        </div>
      </Dialog>
    </>
  );
}

export const Controlled: Story = { parameters: { controls: { disable: true } }, render: () => <ControlledLarge /> };
