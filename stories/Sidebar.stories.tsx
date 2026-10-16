import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { Activity, Code, Eye, LayoutGrid, LogOut, Phone, Plus, Settings, Wrench } from "lucide-react";
import {
  NavHeading,
  NavItem,
  NavLink,
  NavSection,
  RailItem,
  Sidebar,
  Switcher,
  type SwitcherOption,
} from "zeroruntime-component-book";

const agents: SwitcherOption[] = [
  { id: "ab", initials: "AB", name: "Appointment Booker", meta: "Agent · Draft v2" },
  { id: "ss", initials: "SS", name: "Support Specialist", meta: "Agent · Live v9" },
  { id: "lq", initials: "LQ", name: "Lead Qualifier", meta: "Agent · Paused v5" },
];
const orgs: SwitcherOption[] = [
  { id: "ac", initials: "AC", name: "Acme Inc.", meta: "John Doe · Admin" },
  { id: "gx", initials: "GX", name: "Globex", meta: "Org · Starter" },
];

const sections = [
  { label: "Monitor", icon: LayoutGrid, links: ["Dashboard", "Calls", "Issues", "Audit log"] },
  { label: "Orchestrate", icon: Wrench, links: ["Agents", "Tools", "Knowledge", "Workflow", "Guardrails"] },
  { label: "Observe", icon: Eye, links: ["Evals", "Simulation", "Alerts", "Analytics"] },
  { label: "Deploy", icon: Phone, links: ["Environments", "Telephony", "Make call", "Batch call", "In-app"] },
  { label: "Developers", icon: Code, links: ["Docs", "API reference"] },
];

// Stand-in for the ZRT Logo/Mark
const Logo = () => <span aria-label="ZRT" className="size-6 rounded-(--radius-xs) bg-(image:--brand-primary)" />;

function AgentSwitcher({ compact }: { compact?: boolean }) {
  const [agent, setAgent] = useState("ab");
  return (
    <Switcher
      heading="Switch agent"
      options={agents}
      value={agent}
      onValueChange={setAgent}
      actions={[{ label: "New agent", icon: Plus }]}
      compact={compact}
    />
  );
}

function OrgSwitcher({ compact }: { compact?: boolean }) {
  const [org, setOrg] = useState("ac");
  return (
    <Switcher
      heading="Organizations"
      options={orgs}
      value={org}
      onValueChange={setOrg}
      side="top"
      actions={[
        { label: "New organization", icon: Plus },
        { label: "Settings", icon: Settings },
        { label: "Sign out · John Doe", icon: LogOut },
      ]}
      compact={compact}
    />
  );
}

const meta = {
  title: "Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
  argTypes: { variant: { control: "radio", options: ["flat", "card"] } },
  args: { variant: "flat", children: null },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default menu (Nested) — active link shows "../ AGENTS ▮"
export const Nested: Story = {
  render: function Render(args) {
    const [collapsed, setCollapsed] = useState(false);
    return (
      <div className="flex p-(--space-12)">
        <Sidebar
          {...args}
          className="h-[calc(100dvh-24px)]"
          collapsed={collapsed}
          logo={<Logo />}
          onToggle={() => setCollapsed(!collapsed)}
          agentSwitcher={<AgentSwitcher compact={collapsed} />}
          footer={<OrgSwitcher compact={collapsed} />}
        >
          {collapsed
            ? sections.map((s) => (
                <RailItem
                  key={s.label}
                  label={s.label}
                  icon={s.icon}
                  active={s.label === "Orchestrate"}
                  links={s.links.map((l) => ({ label: l, href: "#", active: l === "Agents" }))}
                />
              ))
            : sections.map((s) => (
                <NavSection
                  key={s.label}
                  label={s.label}
                  icon={s.icon}
                  defaultExpanded={s.label !== "Developers"}
                  links={s.links.map((l) => ({ label: l, href: "#", active: l === "Agents" }))}
                />
              ))}
        </Sidebar>
      </div>
    );
  },
};

export const Card: Story = { ...Nested, args: { variant: "card", children: null } };

export const Headings: Story = {
  render: (args) => (
    <div className="flex p-(--space-12)">
      <Sidebar {...args} className="h-[calc(100dvh-24px)]" logo={<Logo />} onToggle={() => {}} agentSwitcher={<AgentSwitcher />} footer={<OrgSwitcher />}>
        <NavHeading label="Engage" />
        <NavItem label="Audiences" icon={Activity} href="#" />
        <NavItem label="Agents" icon={Code} href="#" />
        <NavHeading label="Dashboards" />
        <NavItem label="Leading" icon={LayoutGrid} href="#" expandable />
        <NavItem label="Lagging" icon={LayoutGrid} href="#" expandable />
      </Sidebar>
    </div>
  ),
};

export const NavLinkStates: Story = {
  parameters: { layout: "centered" },
  render: () => (
    <div className="flex w-52 flex-col gap-(--space-2)">
      <NavLink label="Dashboard" href="#" />
      <NavLink label="Agents" href="#" active />
      <NavItem label="Monitor" icon={LayoutGrid} expandable expanded />
    </div>
  ),
};
