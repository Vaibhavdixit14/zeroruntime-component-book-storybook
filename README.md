# zeroruntime-component-book-storybook

Storybook catalog for [zeroruntime-component-book](https://github.com/zujonow/zeroruntime-component-book) — every component and state, shareable via Vercel.

```bash
npm install
npm run storybook        # http://localhost:6006
npm run build-storybook  # static build → storybook-static/
```

## Adding a story

When a component is added to the book: bump the tag in `package.json`, `npm install`, then add `stories/<Group>/<Component>.stories.tsx` (see `stories/Buttons/Button.stories.tsx`).

## Deploy

Vercel builds from `vercel.json` (`npm run build-storybook` → `storybook-static`). Manual: `npm run deploy`.
