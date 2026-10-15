# zeroruntime-component-book

Shared React components (TypeScript) and Tailwind v4 tokens for ZeroRuntime apps.

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

Apps without their own Tailwind root can import `zeroruntime-component-book/styles` instead (Tailwind + tokens + sources).

Light/dark is driven by `data-theme="light" | "dark"` on `<html>` (e.g. `next-themes` with `attribute="data-theme"`).

Mount `<Toaster />` once in the root layout to use `toast()`.

## Tokens

Tailwind colors: `background`, `surface`, `surface-hover`, `border`, `foreground`, `muted`, `accent`, `accent-foreground`, `danger`, `danger-foreground`, `success`, `warning`, `overlay`. Dark variant: `dark:`. Fonts read `--font-geist-sans` / `--font-geist-mono`.

## Types

Every component exports its props type and any union types:

```tsx
import { Button, type ButtonProps, type ButtonVariant } from "zeroruntime-component-book";
```

## Exported components (18)

**Forms:** `Button`, `Input`, `Textarea`, `Label`, `Field`, `Select`, `Checkbox`, `Switch`, `RadioGroup`
**Display:** `Badge`, `Card` (+ `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`), `Avatar`, `Spinner`, `Skeleton`, `Alert`
**Overlays:** `Dialog` (+ `DialogClose`), `Tooltip`, `DropdownMenu`, `Tabs`
**Feedback:** `Toaster`, `toast`
**Utils:** `cn`

Components marked *client* use hooks/Radix and carry `"use client"`.

---

## Forms

### Button
`src/components/forms/button.tsx` · Types: `ButtonProps`, `ButtonVariant`, `ButtonSize`

| Prop | Type | Default |
|---|---|---|
| `variant` | `"primary" \| "secondary" \| "outline" \| "ghost" \| "danger"` | `"primary"` |
| `size` | `"sm" \| "md" \| "lg" \| "icon"` | `"md"` |
| `loading` | `boolean` — spinner + disabled | `false` |
| `leftIcon` / `rightIcon` | `ReactNode` | — |
| …rest | native `<button>` attributes | — |

### Input
`src/components/forms/input.tsx` · Types: `InputProps`, `InputSize`

| Prop | Type | Default |
|---|---|---|
| `size` | `"sm" \| "md" \| "lg"` | `"md"` |
| `invalid` | `boolean` — sets `aria-invalid` and red border | — |
| `leftIcon` / `rightIcon` | `ReactNode` | — |
| …rest | native `<input>` attributes | — |

### Textarea
`src/components/forms/textarea.tsx` · Type: `TextareaProps`

`invalid?: boolean`, `rows` (default `4`), plus native `<textarea>` attributes.

### Label
`src/components/forms/label.tsx` · Type: `LabelProps`

`required?: boolean` (adds a red `*`), plus native `<label>` attributes.

### Field
`src/components/forms/field.tsx` · Type: `FieldProps`

Wraps a control with label, hint and error.

| Prop | Type |
|---|---|
| `label?` | `string` |
| `htmlFor?` | `string` — id of the control |
| `hint?` | `string` — hidden when `error` is set |
| `error?` | `string` |
| `required?` | `boolean` |
| `children` | the control |

### Select — *client*
`src/components/forms/select.tsx` · Types: `SelectProps`, `SelectOption`

| Prop | Type |
|---|---|
| `options` | `{ value: string; label: string; disabled?: boolean }[]` |
| `placeholder?` | `string` |
| `value?` / `defaultValue?` / `onValueChange?` | controlled / uncontrolled value |
| `invalid?`, `disabled?`, `id?`, `className?` | — |

### Checkbox — *client*
`src/components/forms/checkbox.tsx` · Type: `CheckboxProps`

`label?: string`, `checked` / `defaultChecked` (`boolean \| "indeterminate"`), `onCheckedChange`, `disabled`, `id` (required when `label` is set).

### Switch — *client*
`src/components/forms/switch.tsx` · Type: `SwitchProps`

`label?: string`, `checked` / `defaultChecked`, `onCheckedChange`, `disabled`, `id` (required when `label` is set).

### RadioGroup — *client*
`src/components/forms/radio-group.tsx` · Types: `RadioGroupProps`, `RadioOption`

`options: { value; label; description?; disabled? }[]`, `value` / `defaultValue`, `onValueChange`, `orientation`.

## Display

### Badge
`src/components/display/badge.tsx` · Types: `BadgeProps`, `BadgeVariant`

`variant?: "neutral" | "accent" | "success" | "warning" | "danger" | "outline"` (default `"neutral"`), `dot?: boolean`.

### Card
`src/components/display/card.tsx` · Type: `CardProps`

Compose `Card` › `CardHeader` (`CardTitle`, `CardDescription`) › `CardContent` › `CardFooter`. All accept `className` and native div attributes.

### Avatar — *client*
`src/components/display/avatar.tsx` · Types: `AvatarProps`, `AvatarSize`

`name: string` (initials fallback), `src?: string`, `size?: "sm" | "md" | "lg"` (default `"md"`).

### Spinner
`src/components/display/spinner.tsx` · Types: `SpinnerProps`, `SpinnerSize`

`size?: "sm" | "md" | "lg"`, `label?: string` (announced to screen readers). Uses `currentColor`.

### Skeleton
`src/components/display/skeleton.tsx` · Type: `SkeletonProps`

Size it with `className` (e.g. `h-4 w-48`, `size-8 rounded-full`).

### Alert
`src/components/display/alert.tsx` · Types: `AlertProps`, `AlertVariant`

`variant?: "info" | "success" | "warning" | "danger"` (default `"info"`), `title?: string`, `action?: ReactNode`, `children` (body).

## Overlays

### Dialog — *client*
`src/components/overlays/dialog.tsx` · Types: `DialogProps`, `DialogSize`

| Prop | Type |
|---|---|
| `title` | `string` |
| `description?` | `string` |
| `trigger?` | `ReactNode` — element that opens it |
| `footer?` | `ReactNode` — usually buttons; wrap cancel in `<DialogClose asChild>` |
| `open?` / `defaultOpen?` / `onOpenChange?` | controlled / uncontrolled |
| `size?` | `"sm" \| "md" \| "lg"` (default `"md"`) |
| `children?` | body |

### Tooltip — *client*
`src/components/overlays/tooltip.tsx` · Type: `TooltipProps`

`content: ReactNode`, `side?: "top" | "right" | "bottom" | "left"`, `delayDuration?: number`, `children` (a single focusable element).

### DropdownMenu — *client*
`src/components/overlays/dropdown-menu.tsx` · Types: `DropdownMenuProps`, `DropdownMenuItem`

`trigger: ReactNode`, `align?: "start" | "center" | "end"`, `items`:
- `{ label, icon?, shortcut?, danger?, disabled?, onSelect? }`
- `{ type: "separator" }`
- `{ type: "label", label }`

### Tabs — *client*
`src/components/overlays/tabs.tsx` · Types: `TabsProps`, `TabItem`

`items: { value; label; content; disabled? }[]`, `defaultValue?` (first item), `value?` / `onValueChange?`.

## Feedback

### Toaster / toast — *client*
`src/components/feedback/toast.tsx` · Type: `ToasterProps`

Mount `<Toaster position="bottom-right" />` once. Then from client code:

```ts
toast("Saved");
toast.success("Deployment ready", { description: "api-gateway is live." });
toast.error("Build failed");
toast.warning("Usage at 85%");
toast.info("New region available");
toast("Deleted", { action: { label: "Undo", onClick: restore } });
toast.promise(deploy(), { loading: "Deploying…", success: "Deployed", error: "Failed" });
```
