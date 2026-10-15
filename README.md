# zeroruntime-component-book-storybook

Storybook catalog for [zeroruntime-component-book](https://github.com/zujonow/zeroruntime-component-book) — every component and state, shareable via Vercel.

```bash
npm install
npm run storybook        # http://localhost:6006
npm run build-storybook  # static build → storybook-static/
```

## Adding a story

When a component is added to the book: bump the tag in `package.json`, `npm install`, then add `stories/<Component>.stories.tsx` (see `stories/Button.stories.tsx`).

## Deploy

Live: https://zeroruntime-component-book-storyboo.vercel.app

Deploys are manual. After changing stories or bumping the component-book tag:

```bash
npm run deploy
```

This builds Storybook locally (`npx vercel build --prod`) and uploads the output to production (`npx vercel deploy --prebuilt --prod`), so Vercel never needs access to the private component-book repo.

First time on a new machine:

```bash
npx vercel login
npx vercel link --project zeroruntime-component-book-storybook
```

Build settings live in `vercel.json` (`npm run build-storybook` → `storybook-static`).
