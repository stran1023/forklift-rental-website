# Xây Lắp Miền Đông — Rental Website Engineering Harness

Vietnamese lead-generation website for **Xây Lắp Miền Đông** (Công Ty TNHH Dịch Vụ Xây Lắp Miền Đông / Eastern S&C Company Limited), a crane, forklift, and lifting-equipment rental company.

The Next.js app lives in [`web/`](./web) — this root only holds the engineering harness (docs, progress tracking, agent instructions) and source-of-truth assets, not a second package.

## Stack

- Next.js 16 (App Router) + TypeScript, in `web/`
- Tailwind CSS v4 + `@base-ui/react` + `class-variance-authority`
- pnpm (see `pnpm-workspace.yaml`)
- Planned, not yet implemented: Supabase PostgreSQL + Storage + Auth, Drizzle ORM, React Hook Form + Zod, Resend for lead notifications (see `docs/02-architecture.md` and `feature_list.json` — feat-002 onward)
- Vercel deployment
- No AI/Claude dependency

## Source of truth

- `docs/Thong_Tin_Website_Eastern_SC.md` — verified business content (company info, services, equipment, reference projects). Only facts from this file (and `asset/logo.jpg` for branding) may appear on the site — see the "Never invent company facts" rule in `AGENTS.md`.
- `asset/logo.jpg` — official logo, source for the brand palette and the cropped assets in `web/public/`.

## Product principles

1. Content must be editable without code changes.
2. No rental prices are displayed.
3. Primary conversion is phone call / consultation request.
4. Images are uploaded to Supabase Storage.
5. Public pages must be SEO-friendly.
6. Admin is intentionally small and simple.
7. Do not over-engineer.

## Suggested implementation order

1. Read `docs/Thong_Tin_Website_Eastern_SC.md` (verified business content)
2. Read `docs/01-product-requirements.md`
3. Read `docs/02-architecture.md`
4. Read `docs/03-data-model.md`
5. Read `docs/04-implementation-plan.md`
6. Read `docs/05-acceptance-criteria.md`
7. Read `AGENTS.md`
8. Check `feature_list.json` / `progress.md` for current milestone status, then implement milestone-by-milestone and verify each checkpoint.

## Commands

Run these from `web/`, not from the repo root (there is no root `package.json`):

```bash
cd web
pnpm install
pnpm run dev
pnpm run typecheck
pnpm run build
```

`pnpm run lint` is not yet defined — no ESLint config exists in the project yet (see `progress.md`).

Environment variables are documented in `.env.example`.
