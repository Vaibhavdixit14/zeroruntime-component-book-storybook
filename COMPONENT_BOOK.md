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
<div className="bg-(--card-bg) border border-(--card-border) rounded-(--radius-xl) p-(--space-16) text-body-sm-regular" />
```

Full token and component reference: `docs/ZRT-GUIDELINES.md` in the package.

## Types

Every component exports its props type and union types:

```tsx
import { Button, type ButtonProps, type ButtonVariant } from "zeroruntime-component-book";
```

## Exported components (4)

**Alert:** `Alert` · **Buttons:** `Button`, `IconButton`, `BrandButton` · **Utils:** `cn`

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
