import type { Meta, StoryObj } from "@storybook/nextjs";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "zeroruntime-component-book";

const meta = {
  title: "Card",
  component: Card,
  tags: ["autodocs"],
  decorators: [(Story) => <div className="w-96"><Story /></div>],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Production domain</CardTitle>
        <CardDescription>Requests to this domain are served by the latest ready deployment.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="font-mono text-sm">api.zeroruntime.dev</p>
      </CardContent>
      <CardFooter className="justify-end">
        <Button variant="ghost" size="sm">Remove</Button>
        <Button size="sm">Edit</Button>
      </CardFooter>
    </Card>
  ),
};

export const ContentOnly: Story = {
  render: () => (
    <Card>
      <CardContent className="text-sm text-muted">A plain card with only content.</CardContent>
    </Card>
  ),
};
