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
/* globals.css — generate the book's Tailwind classes */
@source "../../node_modules/zeroruntime-component-book/src";
```

Components read the tokens `background`, `surface`, `surface-hover`, `border`, `foreground`, `muted`, `accent`. Apps without their own tokens can import `zeroruntime-component-book/styles`.

## Types

Every component exports its props type, so consumers get full autocomplete and type errors:

```tsx
import { Button, type ButtonProps } from "zeroruntime-component-book";
```

## Exported components (1)

`Button` — plus `cn()`.

### Button
File: `src/components/button.tsx`

Types: `ButtonProps`, `ButtonVariant`, `ButtonSize`.

| Prop | Type | Default |
|---|---|---|
| `variant` | `"primary" \| "secondary" \| "outline" \| "ghost" \| "danger"` | `"primary"` |
| `size` | `"sm" \| "md" \| "lg" \| "icon"` | `"md"` |
| `loading` | `boolean` — shows a spinner and disables the button | `false` |
| `leftIcon` | `ReactNode` | — |
| `rightIcon` | `ReactNode` | — |
| `type` | `"button" \| "submit" \| "reset"` | `"button"` |
| …rest | all native `<button>` attributes (`onClick`, `disabled`, `className`, …) | — |
