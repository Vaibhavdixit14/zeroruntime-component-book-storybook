import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { Check, Clock, LoaderCircle } from "lucide-react";
import {
  Badge,
  Table,
  TableCell,
  TableFooter,
  TableHeader,
  TableHeaderCell,
  TableRow,
  type TableSort,
} from "zeroruntime-component-book";

const meta = {
  title: "Table",
  component: Table,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  argTypes: {
    variant: { control: "radio", options: ["card", "divided"] },
    density: { control: "radio", options: ["compact", "comfortable"] },
  },
  args: { variant: "card", density: "compact", children: null },
  decorators: [(Story) => <div className="mx-auto max-w-[960px]"><Story /></div>],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// Figma Table Row playground: switch Style / Density in the controls
export const Rows: Story = {
  render: (args) => (
    <Table {...args} aria-label="Rows">
      <TableHeader>
        {["Column", "Column", "Column", "Column", "Column", ""].map((c, i) => (
          <TableHeaderCell key={i} sort={i === 0 ? "none" : undefined}>{c}</TableHeaderCell>
        ))}
      </TableHeader>
      {[false, false, true].map((selected, i) =>
        args.density === "compact" ? (
          <TableRow key={i} selected={selected} onClick={() => {}}>
            <TableCell>Text</TableCell>
            <TableCell>Text</TableCell>
            <TableCell type="mono">Value</TableCell>
            <TableCell>Text</TableCell>
            <TableCell type="user" initials="JD">John Doe</TableCell>
            <TableCell type="action" aria-label="Open" />
          </TableRow>
        ) : (
          <TableRow key={i} selected={selected} onClick={() => {}}>
            <TableCell type="text-subtext" subtext="Supporting detail">Title</TableCell>
            <TableCell type="mono">Value</TableCell>
            <TableCell type="status" status="success">Live</TableCell>
            <TableCell>Text</TableCell>
            <TableCell>Text</TableCell>
            <TableCell type="action">Open</TableCell>
          </TableRow>
        ),
      )}
    </Table>
  ),
};

export const HeaderCells: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Table columns="repeat(5,160px)" aria-label="Header cell states">
      <TableHeader>
        <TableHeaderCell sort="none" onSort={() => {}}>Title</TableHeaderCell>
        <TableHeaderCell sort="asc" onSort={() => {}}>Title</TableHeaderCell>
        <TableHeaderCell sort="desc" onSort={() => {}} align="center">Title</TableHeaderCell>
        <TableHeaderCell sort="none" disabled>Title</TableHeaderCell>
        <TableHeaderCell loading>Title</TableHeaderCell>
      </TableHeader>
    </Table>
  ),
};

export const CellTypes: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Table columns="repeat(4,minmax(0,1fr))" variant="divided" aria-label="Cell types">
      <TableRow>
        <TableCell>Nateks</TableCell>
        <TableCell type="text-subtext" subtext="+1 (415) ••• 0142">John Doe</TableCell>
        <TableCell type="mono">In · 0:34</TableCell>
        <TableCell type="status" status="success">Booked</TableCell>
      </TableRow>
      <TableRow>
        <TableCell type="status" status="danger">Handed off</TableCell>
        <TableCell type="status" status="warning">Paused</TableCell>
        <TableCell type="status" status="muted">No answer</TableCell>
        <TableCell type="badge"><Badge color="green" size="sm">Running</Badge></TableCell>
      </TableRow>
      <TableRow>
        <TableCell type="user" initials="JD">John Doe</TableCell>
        <TableCell type="action">Open</TableCell>
        <TableCell type="skeleton" />
        <TableCell type="action" aria-label="Open row" />
      </TableRow>
    </Table>
  ),
};

const orders = [
  { status: "parsing" },
  { status: "parsing" },
  { status: "review", customer: "Nateks", id: "def0987654321", loads: 5 },
  { status: "review", customer: "Huawei", id: "jkl9872345114", loads: 2 },
  { status: "review", customer: "Cisco FirePower", id: "mno0987654214", loads: 2 },
  { status: "synced", customer: "Azimut", id: "uit0987654998", loads: 4 },
  { status: "synced", customer: "HP", id: "bnm0987634567", loads: 2 },
  { status: "synced", customer: "HP", id: "hju0987634897", loads: 2 },
] as const;

const orderBadge = {
  parsing: <Badge color="neutral" size="sm" leadingIcon={LoaderCircle}>Parsing</Badge>,
  review: <Badge color="orange" size="sm" leadingIcon={Clock}>Needs review</Badge>,
  synced: <Badge color="green" size="sm" leadingIcon={Check}>Synced</Badge>,
};

// Card rows, compact. Loading rows use Skeleton cells; the selected row gets a blue border
export const ExampleOrders: Story = {
  parameters: { controls: { disable: true } },
  render: function Render() {
    const [selected, setSelected] = useState(3);
    const [sort, setSort] = useState<TableSort>("none");
    const [page, setPage] = useState(1);
    return (
      <div>
        <Table columns="minmax(0,1fr) repeat(4,140px) 48px" aria-label="Orders">
          <TableHeader>
            <TableHeaderCell sort={sort} onSort={() => setSort(sort === "asc" ? "desc" : "asc")}>Status</TableHeaderCell>
            <TableHeaderCell>Customer</TableHeaderCell>
            <TableHeaderCell>Order ID</TableHeaderCell>
            <TableHeaderCell>Loads</TableHeaderCell>
            <TableHeaderCell>Created by</TableHeaderCell>
            <TableHeaderCell>{""}</TableHeaderCell>
          </TableHeader>
          {orders.map((o, i) =>
            o.status === "parsing" ? (
              <TableRow key={i}>
                <TableCell type="badge">{orderBadge.parsing}</TableCell>
                <TableCell type="skeleton" />
                <TableCell type="skeleton" />
                <TableCell type="skeleton" />
                <TableCell type="skeleton" />
                <TableCell>{""}</TableCell>
              </TableRow>
            ) : (
              <TableRow key={i} selected={selected === i} onClick={() => setSelected(i)}>
                <TableCell type="badge">{orderBadge[o.status]}</TableCell>
                <TableCell>{o.customer}</TableCell>
                <TableCell>{o.id}</TableCell>
                <TableCell>{o.loads}</TableCell>
                <TableCell type="user" initials="JD">John Doe</TableCell>
                <TableCell type="action" aria-label={`Open ${o.id}`} />
              </TableRow>
            ),
          )}
        </Table>
        <TableFooter summary="Showing: 10 of 35 items" page={page} pageCount={22} onPageChange={setPage} />
      </div>
    );
  },
};

const agents = [
  { name: "Researcher", status: ["green", "Running"], confidence: "94%", cost: "$0.034", tasks: 12 },
  { name: "Proposal Drafter", status: ["yellow", "Idle"], confidence: "87%", cost: "$0.018", tasks: 3 },
  { name: "Data Extractor", status: ["red", "Error"], confidence: "61%", cost: "$0.052", tasks: 2 },
  { name: "UX Reviewer", status: ["green", "Running"], confidence: "91%", cost: "$0.027", tasks: 7 },
  { name: "Code Reviewer", status: ["neutral", "Scheduled"], confidence: "96%", cost: "$0.041", tasks: 21 },
] as const;

// Divided rows inside a card surface, with status badges
export const ExampleAgents: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div>
      <Table variant="divided" columns="minmax(0,1fr) repeat(4,140px) 72px" aria-label="Agents">
        <TableHeader>
          <TableHeaderCell sort="none" onSort={() => {}}>Agent</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell>Confidence</TableHeaderCell>
          <TableHeaderCell>Cost</TableHeaderCell>
          <TableHeaderCell>Tasks</TableHeaderCell>
          <TableHeaderCell>Assignee</TableHeaderCell>
        </TableHeader>
        <div className="overflow-hidden rounded-lg border border-(--card-border) [&>[role=row]:last-child]:border-b-0">
          {agents.map((a) => (
            <TableRow key={a.name}>
              <TableCell>{a.name}</TableCell>
              <TableCell type="badge">
                <Badge color={a.status[0]} size="sm" border={a.status[0] === "neutral"}>{a.status[1]}</Badge>
              </TableCell>
              <TableCell type="mono">{a.confidence}</TableCell>
              <TableCell>{a.cost}</TableCell>
              <TableCell>{a.tasks}</TableCell>
              <TableCell type="user" initials="JD">{""}</TableCell>
            </TableRow>
          ))}
        </div>
      </Table>
      <TableFooter summary="Showing: 7 of 35 items" page={1} pageCount={5} />
    </div>
  ),
};

const calls = [
  { caller: "Unknown caller", meta: "+1 (650) ••• 0110 · Today 14:12", dir: "In · 0:14", outcome: ["danger", "Handed off"], task: "Fail · V9" },
  { caller: "John Doe", meta: "+1 (415) ••• 0188 · Today 14:04", dir: "In · 1:40", outcome: ["danger", "Handed off"], task: "Fail · V9" },
  { caller: "John Doe", meta: "+1 (415) ••• 0142 · Today 14:21", dir: "In · 0:34", outcome: ["success", "Booked"], task: "Pass · V9" },
  { caller: "John Doe", meta: "+1 (510) ••• 0149 · Today 13:51", dir: "In · 0:12", outcome: ["success", "Answered"], task: "Pass · V10" },
  { caller: "John Doe", meta: "+1 (415) ••• 0123 · Today 13:30", dir: "Out · 0:00", outcome: ["muted", "No answer"], task: "— · V9" },
  { caller: "John Doe", meta: "+1 (415) ••• 0167 · Today 13:12", dir: "In · 0:09", outcome: ["danger", "Hung up"], task: "Fail · V9" },
] as const;

// Card rows, comfortable: two-line first column, mono direction, coloured outcome, Open action
export const ExampleCalls: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Table density="comfortable" columns="minmax(0,1fr) repeat(3,140px) 72px" aria-label="Calls">
      <TableHeader>
        <TableHeaderCell>Caller</TableHeaderCell>
        <TableHeaderCell>Direction</TableHeaderCell>
        <TableHeaderCell>Outcome</TableHeaderCell>
        <TableHeaderCell>Task · Variant</TableHeaderCell>
        <TableHeaderCell>{""}</TableHeaderCell>
      </TableHeader>
      {calls.map((c) => (
        <TableRow key={c.meta} onClick={() => {}}>
          <TableCell type="text-subtext" subtext={c.meta}>{c.caller}</TableCell>
          <TableCell type="mono">{c.dir}</TableCell>
          <TableCell type="status" status={c.outcome[0]}>{c.outcome[1]}</TableCell>
          <TableCell>{c.task}</TableCell>
          <TableCell type="action" align="right">Open</TableCell>
        </TableRow>
      ))}
    </Table>
  ),
};
