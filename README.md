# Forklift & Crane Rental Website — Engineering Harness

Vietnamese lead-generation website for a small/medium forklift and crane rental company.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Supabase PostgreSQL + Storage + Auth
- Drizzle ORM
- React Hook Form + Zod
- Resend for lead notifications
- Vercel deployment
- No AI/Claude dependency

## Product principles

1. Content must be editable without code changes.
2. No rental prices are displayed.
3. Primary conversion is phone call / consultation request.
4. Images are uploaded to Supabase Storage.
5. Public pages must be SEO-friendly.
6. Admin is intentionally small and simple.
7. Do not over-engineer.

## Suggested implementation order

1. Read `docs/01-product-requirements.md`
2. Read `docs/02-architecture.md`
3. Read `docs/03-data-model.md`
4. Read `docs/04-implementation-plan.md`
5. Read `docs/05-acceptance-criteria.md`
6. Read `AGENTS.md`
7. Implement milestone-by-milestone and verify each checkpoint.

## Commands

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
```

Environment variables are documented in `.env.example`.
