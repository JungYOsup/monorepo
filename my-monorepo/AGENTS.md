# Repository Guidelines

## Project Structure & Module Organization
- Monorepo managed by Turborepo and npm workspaces.
- Apps: `apps/dev` (development sandbox), `apps/template` (starter scaffold).
- Shared library: `packages/core` (UI components, hooks, API utils). Use `@core/*` path alias from `tsconfig.base.json`.
- App sources: `apps/*/src`. Public assets: `apps/*/public`.
- Scripts: helpers in `scripts/` (e.g., `scripts/create-app.js`).

## Build, Test, and Development Commands
- Root (runs via Turbo):
  - `npm run dev` — start all packages exposing `dev`.
  - `npm run build` — build all packages respecting task graph.
  - `npm run lint` — run ESLint across workspaces.
  - `npm run check-types` — TypeScript project references checks.
  - `npm run format` — Prettier write `*.{ts,tsx,md}`.
- Scope to one package:
  - `turbo run dev --filter=dev`
  - or `npm run dev -w apps/dev`
  - `npm run build -w apps/template`
  - `npm run preview -w apps/dev`

## Coding Style & Naming Conventions
- TypeScript strict mode; React 19 with Vite; JSX runtime `react-jsx`.
- Formatting: Prettier (2-space indent, semicolons default). Run `npm run format` before PRs.
- Linting: ESLint configured per app (`apps/*/eslint.config.js`). Fix warnings where feasible.
- Naming:
  - Components: `PascalCase` files in `packages/core/src/components/...` (e.g., `ProgressBar.tsx`).
  - Hooks: `useXyz` in `packages/core/src/hooks/...` (e.g., `useWhoAmIQuery.ts`).
  - Utilities: `camelCase`. Avoid default exports for shared modules.

## Testing Guidelines
- No test runner is configured yet. Recommended: Vitest with React Testing Library.
- Place tests alongside sources as `*.test.ts(x)` or in `__tests__/`.
- Target: add tests for new components/hooks; aim for meaningful coverage on core logic.

## Commit & Pull Request Guidelines
- Prefer Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `build:`, `ci:`.
- Keep messages in English; include scope when helpful (e.g., `feat(core): add ProgressBar`).
- PRs must include:
  - Clear description and rationale; link issues when available.
  - Screenshots/GIFs for UI changes (apps/dev or template).
  - Notes on breaking changes and migration steps.
  - Passing `build`, `lint`, and type checks.

## Security & Configuration
- Node >= 18 (`.nvmrc` provided). Do not commit secrets; use per‑app `.env*` (Turbo tracks as inputs).
- Centralized HTTP client at `packages/core/src/instance/axios.ts` — handle auth and headers there.
