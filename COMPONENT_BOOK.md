# zeroruntime-component-book

React components (TypeScript) for the **ZRT design system**, built 1:1 from the ZRT Figma library.

> This file is copied into your project root on every `npm install`. Do not edit it here — edit it in `zeroruntime-component-book`.

## Setup (Next.js)

```jsonc
// package.json
"zeroruntime-component-book": "github:zujonow/zeroruntime-component-book#vX.Y.Z"
```

```ts
// next.config.ts
transpilePackages: ["zeroruntime-component-book"],
```

```css
/* app/globals.css */
@import "tailwindcss";
@import "zeroruntime-component-book/theme.css";
@source "../../node_modules/zeroruntime-component-book/src";
```

- **Theme:** Dark is the default. Set `data-theme="light"` on `<html>` (or any container) for Light.
- **Fonts:** load **Geist** and **Geist Mono** (400/500/600/700). Tokens read `--font-sans` / `--font-mono`.
- **Icons:** pass Lucide components (`lucide-react`); components render them at 16px, stroke 1.75.

## Tokens

All colours, spacing, radius, shadows and text styles come from `zrt-tokens.css` (exported in `theme.css`). Use them as Tailwind arbitrary values — never hex or Tailwind palette colours:

```tsx
<div className="bg-(--card-bg) border border-(--card-border) rounded-xl p-(--space-16) text-body-sm-regular" />
```

Full token and component reference: `docs/ZRT-GUIDELINES.md` in the package.

## Types

Every component exports its props type and union types:

```tsx
import { Button, type ButtonProps, type ButtonVariant } from "zeroruntime-component-book";
```

## Exported components (77)

**Alert:** `Alert` · **Avatars:** `Avatar`, `AvatarGroup`, `AvatarLabel` · **Badges:** `Badge`, `StatusBadge` · **Breadcrumbs:** `Breadcrumbs`, `BreadcrumbItem`, `BreadcrumbOverflow`, `BreadcrumbSeparator` · **Chat:** `ChatInput`, `ChatDivider`, `MessageBubble`, `AgentStatus`, `TaskStep`, `PromptSuggestion` · **Checkbox:** `Checkbox`, `CheckboxItem`, `CheckboxGroup` · **Dialog:** `Dialog` (+ `DialogClose`) · **Code:** `CodeBlock`, `Command`, `InlineCode`, `CopyButton` · **File upload:** `FileDropzone`, `FileItem` · **Forms:** `FieldLabel`, `HelperText`, `Select`, `TextInput`, `TextArea` · **Logo:** `Logo` · **Menu:** `DropdownMenu` · **Navbar:** `Sidebar`, `SidebarHeader`, `SidebarToggle`, `Switcher`, `NavSection`, `NavItem`, `NavLink`, `NavHeading`, `RailItem`, `NavFlyout` · **Notification:** `Notification` · **Option card:** `OptionCard`, `OptionCardGroup` · **Progress:** `ProgressBar`, `Meter`, `SegmentedProgress`, `Segment` · **Radio:** `RadioGroup`, `RadioItem`, `RadioCard`, `Radio` · **Rich text editor:** `RichTextEditor`, `ToolbarButton`, `Mention` · **Search:** `Search` · **Slider:** `Slider` · **Switch:** `Switch`, `SwitchItem` · **Table:** `Table`, `TableHeader`, `TableHeaderCell`, `TableRow`, `TableCell`, `TableFooter` · **Tabs:** `Tabs`, `TabGroup`, `Tab`, `TabPanel` · **Toast:** `Toast`, `ToastProvider` (+ `useToast`) · **Tooltip:** `Tooltip` · **Buttons:** `Button`, `IconButton`, `BrandButton` · **Utils:** `cn`

---

## Alert

### Alert
`src/components/alert/alert.tsx` · Types: `AlertProps`, `AlertVariant`

Persistent inline message inside a page, form or panel.

| Prop | Type | Default |
|---|---|---|
| `variant` (Figma `Type`) | `"danger" \| "warning" \| "neutral" \| "success"` | `"neutral"` |
| `title` | `string` | — |
| `children` | message under the title (Figma `Show message`) | — |
| `onClose` | `() => void` — shows the close button (Figma `Show close`) | — |

## Avatars

### Avatar
`src/components/avatars/avatar.tsx` · Types: `AvatarProps`, `AvatarVariant`, `AvatarSize`

| Prop | Type | Default |
|---|---|---|
| `variant` (Figma `Style`) | `"neutral" \| "blue" \| "purple" \| "orange" \| "teal" \| "pink" \| "photo" \| "initials"` | `"neutral"` |
| `size` | `16 \| 20 \| 24 \| 32 \| 40 \| 48 \| 64 \| 80` | `32` |
| `initials` | `string` — for `variant="initials"`, e.g. `"JD"` | — |
| `src` | `string` — image URL for `variant="photo"` | — |
| `name` | `string` — accessible name of the person or agent | — |

The six colours are placeholders — use them to tell agents apart.

### AvatarGroup
`src/components/avatars/avatar-group.tsx` · Types: `AvatarGroupProps`, `AvatarGroupSize`

| Prop | Type | Default |
|---|---|---|
| `avatars` | `AvatarProps[]` (without `size`) | — |
| `size` | `32 \| 40` | `32` |
| `max` | `number` — avatars shown before the rest collapse into `+N` | `4` |

### AvatarLabel
`src/components/avatars/avatar-label.tsx` · Type: `AvatarLabelProps`

| Prop | Type | Default |
|---|---|---|
| `name` | `string` — shown in Geist Mono uppercase | — |
| `avatar` | `AvatarProps` (without `size`) — 40px avatar | Initials from `name` |

## Badges

### Badge
`src/components/badges/badge.tsx` · Types: `BadgeProps`, `BadgeColor`, `BadgeShape`, `BadgeSize`

| Prop | Type | Default |
|---|---|---|
| `color` | `"green" \| "red" \| "yellow" \| "orange" \| "blue" \| "purple" \| "teal" \| "pink" \| "neutral" \| "white"` | `"neutral"` |
| `shape` | `"square" \| "pill"` — Square for categories, Pill for status | `"square"` |
| `size` | `"sm" \| "md" \| "lg"` — SM 20 / MD 24 for tables and dense UI, LG 28 for headers | `"md"` |
| `border` | `boolean` | `true` |
| `leadingIcon` / `trailingIcon` | `LucideIcon` | — |
| `children` | label | — |

### StatusBadge
`src/components/badges/status-badge.tsx` · Types: `StatusBadgeProps`, `Status`

Preset pill with the right colour and icon for a status.

| Prop | Type | Default |
|---|---|---|
| `status` | `"pending" \| "active" \| "success" \| "canceled" \| "failed" \| "error" \| "rejected" \| "approved" \| "archived" \| "none" \| "deleted" \| "request" \| "inQueue" \| "passed"` | — |
| `size` | `"md" \| "lg"` | `"md"` |
| `children` | overrides the default label | status name |

## Breadcrumbs

### Breadcrumbs
`src/components/breadcrumbs/breadcrumbs.tsx` · Types: `BreadcrumbsProps`, `BreadcrumbsItem`

Geist Mono uppercase levels separated by a pixel chevron; the last level is the current page. Past `maxVisible` levels the earlier ones collapse into "…" with a back link to the parent.

| Prop | Type | Default |
|---|---|---|
| `items` | `{ label: string; href?: string; icon?: LucideIcon }[]` — root → current | — |
| `maxVisible` | `number` | `4` |
| `linkAs` | `ElementType` — e.g. Next.js `Link` | `"a"` |

Building blocks: `BreadcrumbItem` (`href`, `icon`, `current`, `linkAs`), `BreadcrumbOverflow` (`items`, `linkAs`) — *client*, `BreadcrumbSeparator`.

## Chat

### ChatInput — *client*
`src/components/chat/chat-input.tsx` · Types: `ChatInputProps`, `ChatInputVariant`

Prompt box. Enter sends, Shift+Enter adds a line; the send button is disabled while empty.

| Prop | Type | Default |
|---|---|---|
| `variant` (Figma `Style`) | `"elevated" \| "subtle"` — Elevated for the main chat, Subtle inside panels | `"elevated"` |
| `placeholder` | `string` | `"Ask anything…"` |
| `value` / `defaultValue` / `onValueChange` | controlled / uncontrolled text | — |
| `onSubmit` | `(value: string) => void` | — |
| `disabled` | `boolean` | — |
| `model` / `onModelClick` | model pill, e.g. `"Gemini 3"` (Figma `Show model`) | — |
| `onAttach` | shows the attach button (Figma `Show attach`) | — |
| `onMic` | shows the mic button (Figma `Show mic`) | — |
| `onFilesDrop` | `(files: File[]) => void` — enables the Drag over state | — |

### MessageBubble
`src/components/chat/message-bubble.tsx` · Types: `MessageBubbleProps`, `MessageBubbleVariant`

`variant?: "outline" | "subtle" | "solid"` (default `"outline"`), children = message. 8px corners with a 2px tail bottom-right.

### ChatDivider
`src/components/chat/chat-divider.tsx` · Type: `ChatDividerProps` — `label: string` between two hairlines (e.g. "Task initiated").

### AgentStatus
`src/components/chat/agent-status.tsx` · Types: `AgentStatusProps`, `AgentStatusValue`, `AgentStatusState`

| Prop | Type | Default |
|---|---|---|
| `status` | `"awakening" \| "thinking" \| "priming" \| "delivering" \| "interrupted" \| "failed" \| "timedOut" \| "queued"` | — |
| `state` | `"idle" \| "active" \| "disabled"` | `"idle"` |
| `label` | overrides the default label | status name |

### TaskStep
`src/components/chat/task-step.tsx` · Types: `TaskStepProps`, `TaskStepType`

Agent timeline row.

| Prop | Type | Default |
|---|---|---|
| `type` | `"step" \| "active" \| "subStep"` | `"step"` |
| `label` | `string` | — |
| `icon` | `LucideIcon` | `Dna` |
| `showConnector` | `boolean` — line to the next step | `true` |
| `expandable` / `expanded` / `onToggle` | chevron and its direction | `true` / active only |
| `children` | body shown when expanded | — |

### PromptSuggestion
`src/components/chat/prompt-suggestion.tsx` · Type: `PromptSuggestionProps` — `icon?: LucideIcon`, children = label, plus native `<button>` attributes.

## Checkbox

### Checkbox — *client*
`src/components/checkbox/checkbox.tsx` · Types: `CheckboxProps`, `CheckboxVariant`

16px. `variant?: "square" | "soft"` (Square outlined — default; Soft filled — for card rows), `checked` / `defaultChecked` (`boolean | "indeterminate"`), `onCheckedChange`, `disabled`. Needs `aria-label` when used without a label.

### CheckboxItem — *client*
`src/components/checkbox/checkbox-item.tsx` · Types: `CheckboxItemProps`, `CheckboxItemVariant`

`label: string`, `description?: string`, `variant?: "plain" | "card"` (Card uses the Soft checkbox), plus all `Checkbox` props.

### CheckboxGroup — *client*
`src/components/checkbox/checkbox-group.tsx` · Types: `CheckboxGroupProps`, `CheckboxOption`

| Prop | Type | Default |
|---|---|---|
| `options` | `{ value; label; description?; disabled? }[]` | — |
| `label` / `required` | group label (Field Label) | — |
| `helper` / `helperVariant` | helper text under the group | — / `"default"` |
| `direction` | `"vertical" \| "horizontal"` | `"vertical"` |
| `itemVariant` | `"plain" \| "card"` | `"plain"` |
| `value` / `defaultValue` / `onValueChange` | `string[]` | — |
| `disabled` | `boolean` | — |

## Dialog

### Dialog — *client*
`src/components/dialog/dialog.tsx` · Types: `DialogProps`, `DialogSize`

Modal for confirmations and short forms. The page behind blurs (`backdrop-blur-xs`, 4px); the panel is elevation 4 — `surface/popover`, 1px border, `--shadow-lg`, radius xl. It springs open from the centre (60% → slight overshoot → 100%, 520ms) and shrinks out in 180ms; reduced motion turns this off. Focus is trapped, Escape and the × close it, and the title and description are announced. Not in the ZRT Figma file yet; built from the Elevation spec.

```tsx
<Dialog
  trigger={<Button variant="destructive">Delete agent</Button>}
  title="Delete agent?"
  description="This removes Appointment Booker and its call history."
  size="sm"
  footer={
    <>
      <DialogClose asChild><Button variant="secondary">Cancel</Button></DialogClose>
      <Button variant="destructive">Delete</Button>
    </>
  }
/>
```

| Prop | Type | Default |
|---|---|---|
| `trigger` | element that opens it | — |
| `open` / `defaultOpen` / `onOpenChange` | controlled or uncontrolled | — |
| `title` / `description` | header text | — |
| `size` | `"sm"` (400) \| `"md"` (560) \| `"lg"` (720) | `"md"` |
| `children` | body; scrolls when tall | — |
| `footer` | right-aligned buttons, primary last | — |
| `hideClose` | hides the × | — |

`DialogClose` wraps a button so it closes the dialog.

## Code

### CodeBlock — *client*
`src/components/code/code-block.tsx` · Type: `CodeBlockProps`

Multi-line snippet, coloured with the `syntax/*` tokens.

| Prop | Type | Default |
|---|---|---|
| `code` | `string` | — |
| `showCopy` | `boolean` | `true` |
| `collapsible` / `collapsedLines` | collapse with Show more / Show less | `true` / `7` |
| `defaultExpanded` | `boolean` | `false` |

### Command — *client*
`src/components/code/command.tsx` · Type: `CommandProps` — one-line shell command with copy. `command: string`, `disabled?`, `loading?` (skeleton).

### InlineCode
`src/components/code/inline-code.tsx` · Type: `InlineCodeProps` — variable names, file names and keys inside running text. `interactive?` (hover / active / focus states), `disabled?`.

### CopyButton — *client*
`src/components/code/copy-button.tsx` · Type: `CopyButtonProps` — `value: string`, `showTooltip?` (default `true`; "Copy to clipboard" → "Copied"), `size?: "md" | "sm"`, `disabled?`, `onCopy?`.

## File upload

### FileDropzone — *client*
`src/components/file-upload/file-dropzone.tsx` · Type: `FileDropzoneProps`

Drag-and-drop zone with a Secondary "Or select file" fallback; shows the Drag over state while files hover.

| Prop | Type | Default |
|---|---|---|
| `onFiles` | `(files: File[]) => void` | — |
| `title` | `string` | `"Drag and drop your files here"` |
| `caption` | `string` — limits; `\n` for a second line | — |
| `label` | Field Label above the zone | — |
| `accept`, `multiple`, `disabled` | native file input options | `multiple: true` |

### FileItem
`src/components/file-upload/file-item.tsx` · Types: `FileItemProps`, `FileItemState`

`name: string`, `state?: "uploading" | "complete" | "uploaded" | "error"`, `error?: string` (shown under an Error row), `onCancel?` (uploading), `onRemove?` (uploaded / error). Place the list 12px below the dropzone, rows 8px apart.

## Forms

### FieldLabel
`src/components/forms/field-label.tsx` · Type: `FieldLabelProps` — Geist Mono uppercase label. `required?`, `info?: string` (info icon with a Tooltip), `disabled?`, plus native `<label>` attributes.

### HelperText
`src/components/forms/helper-text.tsx` · Types: `HelperTextProps`, `HelperTextVariant` — `variant?: "default" | "success" | "error" | "warning"`, children = message.

### Select — *client*
`src/components/forms/select.tsx` · Types: `SelectProps`, `SelectOption`, `SelectSize`

| Prop | Type | Default |
|---|---|---|
| `options` | `{ value; label; disabled? }[]` | — |
| `size` | `"lg" \| "md"` — 40 / 32px | `"lg"` |
| `label` / `required` | Field Label above the trigger | — |
| `placeholder` | `string` | `"- Select -"` |
| `value` / `defaultValue` / `onValueChange` | `string` | — |
| `disabled`, `name` | — | — |

Use a segmented control or radios for 3–5 options; prefer a sensible default.

### TextInput — *client*
`src/components/forms/text-input.tsx` · Types: `TextInputProps`, `TextInputSize`, `FieldStatus`

Single-line field with label and helper. Hover / Focus / Filled / Disabled are CSS states; validation is `status`. Default width 320px (`className` sizes the wrapper, `inputClassName` the input). Other input props pass through.

| Prop | Type | Default |
|---|---|---|
| `label` / `required` / `info` | Field Label (Figma `Show label`) | — |
| `helper` | Helper Text below (Figma `Show helper`) | — |
| `status` | `"default" \| "success" \| "error" \| "warning"` — border + helper colour | `"default"` |
| `size` | `"lg"` (40px) \| `"md"` (32px) | `"lg"` |
| `disabled` | `boolean` | — |

### TextArea — *client*
`src/components/forms/text-area.tsx` · Types: `TextAreaProps`

Multi-line field, three lines (88px) by default and vertically resizable. Same `label`, `required`, `info`, `helper`, `status` and `disabled` as TextInput, plus `readOnly` (subtle surface, text stays legible) and `textareaClassName`.

## Logo

### Logo — *client*
`src/components/logo/logo.tsx` · Types: `LogoProps`, `LogoType`

The ZRT logo from Figma › Brand & Logo, as inline SVG. Mark = 40 squares in the Brand/Primary gradient on a 12×12 grid; Lockup adds the ZERO / _RUNTIME wordmark. Grid (`--brand-logo-grid`) and wordmark (`--text-primary`) follow the theme.

| Prop | Type | Default |
|---|---|---|
| `type` (Figma `Type`) | `"mark" \| "lockup"` | `"mark"` |
| `size` | height in px (Mark 16–48 in product chrome; Lockup ≥ 41) | `24` |
| `showGrid` | dim grid squares behind the mark (Figma `Show grid`) | `true` |
| `theme` | `"dark" \| "light"` — force a theme to match the background; omit to follow the page | — |

Don't stretch, recolour, rotate or add effects. Keep 2X clear space (X = height ÷ 12).

## Menu

### DropdownMenu — *client*
`src/components/menu/dropdown-menu.tsx` · Types: `DropdownMenuProps`, `DropdownMenuItem`

`trigger: ReactNode` (e.g. a `Button`), `items: { label; icon?; disabled?; onSelect? }[]`, `align?: "start" | "center" | "end"`. 32px Menu Item rows on the menu surface (`menu/*` tokens, Shadow/MD).

## Navbar

### Sidebar
`src/components/navbar/sidebar.tsx` · Type: `SidebarProps`

Sticky structure: Header (logo + toggle) → Agent Switcher → Nav (**only part that scrolls**) → footer (Org Switcher). Width `--layout-sidebar` (260); collapsed rail `--layout-sidebar-collapsed`.

Toggling `collapsed` animates like the Figma prototype (Smart animate, ease in and out, 300ms): the width tweens while the content takes its final layout at once and fades in. Off under `prefers-reduced-motion`.

| Prop | Type | Default |
|---|---|---|
| `variant` (Figma `Style`) | `"flat" \| "card"` | `"flat"` |
| `collapsed` | `boolean` — 68px rail; pass compact switchers + `RailItem`s | — |
| `logo` / `onToggle` | header content / shows the Sidebar Toggle | — |
| `agentSwitcher` / `footer` | pinned slots | — |
| `children` | nav | — |

Also exported: `SidebarHeader`, `SidebarToggle`.

### Switcher — *client*
`src/components/navbar/switcher.tsx` · Types: `SwitcherProps`, `SwitcherOption`, `SwitcherAction`

Agent / Org switcher. `heading`, `options: { id; initials; name; meta }[]`, `value`, `onValueChange`, `actions?: { label; icon?; onSelect? }[]`, `compact?` (rail), `side?: "bottom" | "top"` (agent opens down, org opens up). Shows three options; more scroll inside the menu so the actions stay in view.

### NavSection — *client*
`src/components/navbar/nav-section.tsx` — `label`, `icon`, `links: { label; href?; active? }[]`, `defaultExpanded?`, `linkAs?`.

### NavItem / NavLink / NavHeading
- `NavItem`: `label`, `icon?`, `href?` / `onClick?`, `expandable?` / `expanded?`, `iconOnly?`, `linkAs?`.
- `NavLink`: `label`, `href?`, `active?` — active renders `../ LABEL ▮` with the blinking cursor; `linkAs?`.
- `NavHeading`: `label` — section heading for the Headings layout.

### RailItem / NavFlyout — *client*
`src/components/navbar/rail-item.tsx` — collapsed-rail icon. `label`, `icon`, `active?`; with `links` it opens a `NavFlyout` on hover, otherwise a tooltip.

## Notification

### Notification
`src/components/notification/notification.tsx` · Types: `NotificationProps`, `NotificationType`, `NotificationAction`

Floating card that asks before the agent acts (confirm, override, delete). 400px wide, popover surface with `--shadow-md`.

| Prop | Type | Default |
|---|---|---|
| `type` (Figma `Type`) | `"info" \| "danger" \| "warning" \| "success"` | `"info"` |
| `label` | chip label | — |
| `children` | body text (Figma `Body`) | — |
| `onClose` | `() => void` — shows the close button (Figma `Show close`) | — |
| `input` | confirm field above the actions (Figma `Show input`) | — |
| `primaryAction` | `{ label, onClick?, loading?, disabled? }` — Destructive when `type="danger"` | — |
| `secondaryAction` | same shape (Figma `Secondary action`) | — |

## Option card

### OptionCardGroup / OptionCard — *client*
`src/components/option-card/` · Types: `OptionCardGroupProps`, `OptionCardProps`

Selectable tiles with an icon, heading and description; one Active at a time (radio group, arrow keys move selection). Default/Hover/Active/Disabled are CSS states.

| `OptionCardGroup` prop | Type | Default |
|---|---|---|
| `value` / `defaultValue` / `onValueChange` | `string` — selected card | — |
| `disabled` | `boolean` | — |
| `aria-label` | group name | — |
| `className` | grid override; default auto-fill 232px columns, gap 12 | — |

| `OptionCard` prop | Type | Default |
|---|---|---|
| `value` | `string` | — |
| `heading` | `string` | — |
| `description` | `string` | — |
| `icon` | `LucideIcon` (Figma `Icon`, 20px) | — |
| `disabled` | `boolean` | — |

## Progress

All take `value` 0–100 and fill the width they're given.

### ProgressBar
`src/components/progress/progress-bar.tsx` · Types: `ProgressBarProps`

Solid `--progress-fill` on a dotted `--progress-empty` track, 20px tall.

| Prop | Type | Default |
|---|---|---|
| `value` | `number` 0–100 | — |
| `label` | stage name in a 160px column (Figma `Show label`) | — |
| `icon` | `LucideIcon` before the label | — |
| `showValue` | `boolean` | `true` |

### Meter
`src/components/progress/meter.tsx` · Types: `MeterProps`

Current level: 36px field with a `--progress-meter` fill, an edge marker and the value inside. Props: `value`, `showValue` (`true`), `aria-label`.

### SegmentedProgress / Segment
`src/components/progress/segmented-progress.tsx` · Types: `SegmentedProgressProps`, `SegmentProps`, `SegmentStyle`, `SegmentColor`

| Prop | Type | Default |
|---|---|---|
| `value` | `number` 0–100 — fills the nearest segment | — |
| `variant` (Figma `Style`) | `"block" \| "compact" \| "tick"` | `"block"` |
| `color` | `"neutral" \| "green"` | `"neutral"` |
| `segments` | `number` | block 24 · compact 24 · tick 48 |

`Segment` is a single step (`variant`, `color`, `filled`).

## Radio

### RadioGroup — *client*
`src/components/radio/radio-group.tsx` · Types: `RadioGroupProps`, `RadioOption`

Pick exactly one option. Renders Radio Items from `options`, or any `children` (e.g. `RadioCard`s, `RadioItem`s with values in a card).

| Prop | Type | Default |
|---|---|---|
| `options` | `{ value, label, description?, valueLabel?, disabled? }[]` | — |
| `children` | custom items | — |
| `label` / `required` | group label (Field Label) | — |
| `helper` / `helperVariant` | Helper Text under the group | — / `"default"` |
| `direction` | `"vertical" \| "horizontal"` | `"vertical"` |
| `value` / `defaultValue` / `onValueChange` | `string` | — |
| `disabled` / `name` | | — |

### RadioItem / RadioCard / Radio — *client*
Must sit inside a `RadioGroup`.
- `RadioItem`: `value`, `label`, `description?`, `valueLabel?` (right-aligned, e.g. a price), `disabled?`.
- `RadioCard`: whole card is the radio. `value`, `label`, `badge?` (green pill), `price?`, `billing?`, `disabled?`. 400px wide; selected border `--card-border-selected`.
- `Radio`: the bare 16px control (`value`, `disabled`).

## Rich text editor

### RichTextEditor — *client*
`src/components/rich-text-editor/rich-text-editor.tsx` · Types: `RichTextEditorProps`, `MentionOption`

Editor for prompts and agent instructions, built on [Tiptap](https://tiptap.dev) (ProseMirror) with the ZRT field, toolbar and menu styling. Toolbar: Bold, Italic, H1–H3, lists, Undo/Redo, Expand/Collapse. Typing `@` opens a mention picker (arrows, Enter/Tab, Escape). Uncontrolled: pass `defaultValue` markdown and read markdown changes from `onChange` (Tiptap `@tiptap/markdown`).

| Prop | Type | Default |
|---|---|---|
| `label` / `required` | Field Label (Figma `Show label`) | — |
| `placeholder` | `string` | — |
| `defaultValue` | initial markdown — build chips with `mentionToMarkdown({ id, label, kind })` | `""` |
| `onChange` | `(markdown: string) => void` | — |
| `mentions` | `{ id, label, kind? }[]` for the @ picker | `[]` |
| `showToolbar` | `boolean` | `true` |
| `disabled` | `boolean` | — |
| `onExpand` / `onCollapse` | shows the Expand / Collapse buttons | — |

Mention chips are saved as the shortcode `[@ id="…" label="…" kind="…"]`, so saved content loads back with its chips; rendered chips carry `data-mention="<id>"`. Markdown shortcuts work too (`# ` heading, `- ` list, `**bold**`).

### Mention / ToolbarButton
- `Mention`: inline chip `@label`. `kind`: `"tool"` (orange) · `"variable"` (blue) · `"agent"` (purple) · `"knowledge"` (green) · `"other"` (neutral).
- `ToolbarButton`: 32px icon button. `icon`, `label` (accessible name), `active?`, `disabled?`, plus button props.

## Search

### Search — *client*
`src/components/search/search.tsx` · Types: `SearchProps`, `SearchStyle`, `SearchSize`

Search field. Filled is the default for toolbars and headers; Outline sits inside forms. Shows the shortcut while empty; typing swaps it for a clear button (Escape clears too). Default width 320px; override with `className`.

| Prop | Type | Default |
|---|---|---|
| `variant` (Figma `Style`) | `"filled" \| "outline"` | `"filled"` |
| `size` | `"lg" \| "md"` | `"lg"` |
| `value` / `defaultValue` / `onValueChange` | `string` | — |
| `shortcut` | e.g. `"⌘S"` (Figma `Show shortcut`) | — |
| `placeholder` | `string` | `"Search"` |
| `disabled` | `boolean` | — |

Other input props pass through to the `<input>`.

## Slider

### Slider — *client*
`src/components/slider/slider.tsx` · Types: `SliderProps`

Pick a value on a range, e.g. agent temperature. A block handle fills to the value (min 56px) over a 56px track with a midpoint tick. Built on a native range input: arrow keys, Home/End and screen readers work. Default width 350px.

| Prop | Type | Default |
|---|---|---|
| `value` / `defaultValue` / `onValueChange` | `number` | — / `0` |
| `min` / `max` / `step` | `number` | `0` / `100` / `1` |
| `scale` | `[min, mid, max]` labels (Figma `Show scale`) | — |
| `disabled` | `boolean` | — |
| `aria-label` | `string` | — |

## Switch

### Switch — *client*
`src/components/switch/switch.tsx` · Types: `SwitchProps`, `SwitchSize`

Turn a setting on or off instantly. SM (36×20) for lists and rows, LG (56×32) for prominent toggles. Inset track, raised knob with a check when on. Radix Switch props (`checked`, `defaultChecked`, `onCheckedChange`, `disabled`, `name`…) pass through.

| Prop | Type | Default |
|---|---|---|
| `size` | `"sm" \| "lg"` | `"lg"` |

### SwitchItem — *client*
`src/components/switch/switch-item.tsx` · Types: `SwitchItemProps`

SM switch with `label`, `description?` and `position` (`"left"` \| `"right"`, default `"left"`). Right puts the switch at the far end of the row.

## Table

Build any table from parts. `Table` sets one column template that the header and every row share, so columns always line up (default: column 1 fills, columns 2–5 are 140px, column 6 is 72px). Rendered with ARIA table roles on divs so card rows can have gaps.

```tsx
<Table aria-label="Orders" variant="card" density="compact">
  <TableHeader>
    <TableHeaderCell sort="none" onSort={…}>Status</TableHeaderCell>
    <TableHeaderCell>Customer</TableHeaderCell>…
  </TableHeader>
  <TableRow selected onClick={…}>
    <TableCell type="badge"><StatusBadge status="success" /></TableCell>
    <TableCell>Nateks</TableCell>
    <TableCell type="user" initials="JD">John Doe</TableCell>
    <TableCell type="action" aria-label="Open" />
  </TableRow>
</Table>
<TableFooter summary="Showing: 10 of 35 items" page={1} pageCount={22} onPageChange={…} />
```

### Table — *client*
`src/components/table/table.tsx` · Types: `TableProps`, `TableRowStyle`, `TableDensity`

| Prop | Type | Default |
|---|---|---|
| `columns` | CSS `grid-template-columns` | `defaultTableColumns` |
| `variant` (Figma `Style`) | `"card" \| "divided"` — default for every row | `"card"` |
| `density` | `"compact" \| "comfortable"` | `"compact"` |
| `aria-label` | `string` | — |

`TableHeader` is the header row; put one `TableHeaderCell` per column.

### TableHeaderCell
`children`, `align` (`"left" \| "center" \| "right"`), `sort` (`"asc" \| "desc" \| "none"` — shows the sort icon), `onSort` (makes it a button with Hover/Focus states), `disabled`, `loading` (skeleton bar).

### TableRow — *client*
`children` (cells), `selected`, `onClick` (row becomes focusable; Enter/Space activate), and `variant` / `density` to override the Table.

### TableCell
Figma `Type` as `type`:

| `type` | Props | Renders |
|---|---|---|
| `"text"` (default) | `children` | Body/SM |
| `"text-subtext"` | `children`, `subtext` | two lines |
| `"mono"` | `children` | Table/Mono, secondary |
| `"status"` | `status`: `"success" \| "danger" \| "warning" \| "muted"`, `children` | Table/Mono in the status colour |
| `"badge"` | `children` (a `Badge` / `StatusBadge`) | — |
| `"user"` | `initials`, `children` (name) | 20px avatar + name |
| `"action"` | `children?` (e.g. "Open"), `onClick`, `aria-label` | mono link, or a chevron when no label |
| `"skeleton"` | — | loading bar |

All take `align` and `className`.

### TableFooter
`summary`, `page`, `pageCount`, `onPageChange` — summary on the left, previous / `page/pageCount` / next on the right.

## Tabs

Radix Tabs styled as ZRT: arrow keys move between tabs, panels are linked for screen readers.

```tsx
<Tabs defaultValue="plan">
  <TabGroup type="underline" size="lg">
    <Tab value="plan" label="Plan" />
    <Tab value="failed" label="Failed" dot />
  </TabGroup>
  <TabPanel value="plan">…</TabPanel>
</Tabs>
```

### Tabs / TabPanel — *client*
`Tabs` is the root (`value` / `defaultValue` / `onValueChange`, `orientation`…). `TabPanel` takes the matching `value`.

### TabGroup — *client*
`src/components/tabs/tab-group.tsx` · Types: `TabGroupProps`, `TabType`, `TabSize`

| Prop | Type | Default |
|---|---|---|
| `type` | `"outline"` (modes, personas) \| `"segment-pill"` \| `"segment"` (filters, in a grey container) \| `"underline"` (primary sections) | `"underline"` |
| `size` | `"sm" \| "lg"` — SM for lightweight filters, LG where the tab changes the working mode | `"lg"` |

### Tab — *client*
`src/components/tabs/tab.tsx` · Types: `TabProps`

| Prop | Type | Default |
|---|---|---|
| `value` | `string` | — |
| `label` | `string` | — |
| `icon` | `LucideIcon` (Figma `Leading icon`) | — |
| `dot` | red dot after the label | — |
| `alert` | red warning icon after the label | — |
| `count` | count pill (Figma `Show count`) | — |
| `disabled` | `boolean` | — |

Default / Hover / Selected / Focus are CSS states.

## Toast

Short confirmation that disappears on its own, with an optional undo. Dark in both modes.

```tsx
// once, near the root
<ToastProvider>{children}</ToastProvider>

// anywhere below
const toast = useToast();
toast({ type: "success", message: "Saved.", actionLabel: "Undo", onAction: undo });
```

### ToastProvider / useToast — *client*
`src/components/toast/toast-provider.tsx` · Types: `ToastOptions`

`toast({ type, message, actionLabel?, onAction?, duration? })`. Toasts stack bottom-centre, pause on hover, can be swiped away, and dismiss after `duration` ms (default 5000) or when the action is clicked. Built on Radix Toast, so screen readers announce them.

### Toast
`src/components/toast/toast.tsx` · Types: `ToastProps`, `ToastType`

The visual on its own. `type` (`"success" \| "error" \| "warning" \| "info"`, default `"success"`), `message`, `actionLabel?`, `onAction?`.

## Tooltip

### Tooltip — *client*
`src/components/tooltip/tooltip.tsx` · Types: `TooltipProps`, `TooltipSize`

Short, non-interactive label shown on hover or keyboard focus, with an arrow at the trigger. Don't put the only copy of important information in a tooltip.

```tsx
<Tooltip content="Copy link" size="md">
  <IconButton icon={Link} aria-label="Copy link" />
</Tooltip>
```

| Prop | Type | Default |
|---|---|---|
| `content` | a few words | — |
| `children` | the trigger (must accept a ref) | — |
| `size` | `"sm"` (dense UI) \| `"md"` (buttons, icons) \| `"lg"` (larger triggers, onboarding) | `"md"` |
| `side` | `"top" \| "bottom" \| "left" \| "right"` — Figma `Arrow=Bottom` is `side="top"` | `"top"` |
| `align` | `"start" \| "center" \| "end"` — Start/End near an edge | `"center"` |
| `arrow` | `boolean` (Figma `Arrow=None` → `false`) | `true` |
| `delayDuration` | ms | `200` |

## Buttons

Shared type: `ButtonSize = "lg" | "md" | "sm"` — LG 40px, MD 32px, SM 24px. Labels are Geist Mono uppercase (write them in sentence case).

### Button
`src/components/buttons/button.tsx` · Types: `ButtonProps`, `ButtonVariant`

| Prop | Type | Default |
|---|---|---|
| `variant` (Figma `Type`) | `"primary" \| "destructive" \| "secondary" \| "ghost"` | `"primary"` |
| `size` | `ButtonSize` | `"md"` |
| `loading` | `boolean` — shows the ZRT pixel loader, keeps width | `false` |
| `leadingIcon` / `trailingIcon` | `LucideIcon` | — |
| `shortcut` | `string` — e.g. `"⌘K"` | — |
| `children` | label | — |
| …rest | native `<button>` attributes | — |

### IconButton
`src/components/buttons/icon-button.tsx` · Types: `IconButtonProps`, `IconButtonVariant`

Square button with an icon **or** a short text glyph.

| Prop | Type | Default |
|---|---|---|
| `icon` | `LucideIcon` (or use `text`) | — |
| `text` | `string` — short glyph, e.g. `"1"` | — |
| `variant` | `"primary" \| "secondary" \| "ghost"` | `"secondary"` |
| `size` | `ButtonSize` | `"md"` |
| `aria-label` | `string` — **required** | — |

### BrandButton
`src/components/buttons/brand-button.tsx` · Type: `BrandButtonProps`

Super-primary on the brand gradient. **At most one per screen** (upgrade, launch an agent, "Get started"). Pair it with a Secondary or Ghost Button. Never for destructive or everyday actions.

| Prop | Type | Default |
|---|---|---|
| `size` | `ButtonSize` | `"lg"` |
| `loading` | `boolean` | `false` |
| `leadingIcon` / `trailingIcon` | `LucideIcon` | — |

## Patterns

Figma › Patterns. Page-level compositions built only from the components above.

### PageHeader
`src/components/patterns/page-header.tsx` · Type: `PageHeaderProps`

Breadcrumbs → `title` (Heading/H3) + `description` (Body/MD), `actions` on the right (Secondary + Primary buttons), optional `tabs` below (an Underline `TabGroup`). `breadcrumbs?: BreadcrumbsItem[]`, `linkAs?` for the breadcrumb links.

### FilterBar — *client*
`src/components/patterns/filter-bar.tsx` · Types: `FilterBarProps`, `FilterBarRange`, `FilterBarFilter`, `AppliedFilter`

Search (MD, ⌘K) · range Segment tabs (`ranges`, default `defaultRanges` = 7 / 30 / 90 days; `range` / `defaultRange` / `onRangeChange`) · up to three `Select`s (`filters: { id; options; value?; defaultValue?; placeholder? }[]`, `onFilterChange(id, value)`) · FILTERS button (`onMoreFilters`). Applied chips row: `applied: { id; label }[]`, `onRemoveApplied(id)`, `onClearApplied`.

### MetricCard
`src/components/patterns/metric-card.tsx` · Types: `MetricCardProps`, `MetricTrend`, `MetricColor`, `MetricCardSize`

| Prop | Type | Default |
|---|---|---|
| `label` / `value` | `string` | — |
| `delta` + `trend` | `string` + `"up" \| "down" \| "none"` — arrow in status green / red | `"none"` |
| `progress` (Figma `Show bar`) | `0–100`; omit to hide the dotted bar | — |
| `color` (Figma `Bar`) | `"blue" \| "green" \| "purple" \| "neutral"` | `"blue"` |
| `caption` | mono line under the bar, e.g. "4,151 out of 5,500" | — |
| `size` | `"lg"` (24px padding, Metric/Value 40) \| `"sm"` (16px, Metric/Value SM 28) | `"lg"` |

Hover lifts to `--shadow-sm` with `metric/bg-hover` + `metric/border-hover`.

### FeedItem
`src/components/patterns/feed-item.tsx` · Types: `FeedItemProps`, `FeedTone`

`tone: "danger" \| "warning" \| "neutral" \| "success"` sets the strip colour + icon. `title`, `message`, `actionLabel?` + `onAction?` (Secondary SM with trailing arrow), `onDismiss?` shows the ×. Stack feed columns with a 10px gap.

### EmptyState
`src/components/patterns/empty-state.tsx` · Type: `EmptyStateProps`

`icon?` (default Sparkles) in a 48px tile, `title` (Heading/H5), `description?`, `actions?` (Secondary + Primary MD — relabel per page). Max width 420.

### SectionCard
`src/components/patterns/section-card.tsx` · Type: `SectionCardProps`

Titled container on `field/bg-subtle` with `card/border`, radius XL, 20px padding. `title` (Table/Header), `description?` (Body/SM under the title), `actionLabel?` + `onAction?` (Ghost SM "View all →") or custom `actions`, `children` = content slot.

### Insights — *client*
`src/components/patterns/insights.tsx` · Types: `InsightsProps`, `Insight`

Header: `title` (Heading/H5) · count · `summary` (Body/MD) · Ghost "Show dismissed" · Secondary "Hide" / "Show N". Body: a row of `FeedItem`s from `items: { id; tone; title; message; actionLabel?; onAction? }[]`. Hide / Show collapses 250ms ease-in-out; × fades the card 200ms then removes it (`dismissed` + `onDismiss` for controlled, otherwise internal). Empty = count 0 + `emptyMessage`.

