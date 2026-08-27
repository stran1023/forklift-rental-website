# Implementation Plan

Work sequentially. Do not start all milestones at once.

## Milestone 1 — Foundation

- [ ] Initialize Next.js App Router + TypeScript
- [ ] Configure Tailwind
- [ ] Configure lint/typecheck
- [ ] Add environment validation
- [ ] Create base layout
- [ ] Create design tokens
- [ ] Add header/footer
- [ ] Add mobile navigation
- [ ] Add reusable CTA/call button
- [ ] Verify responsive shell

Checkpoint:
- `npm run lint`
- `npm run typecheck`
- `npm run build`

## Milestone 2 — Database + Supabase

- [ ] Create Drizzle schema
- [ ] Create migrations
- [ ] Configure Supabase
- [ ] Configure Storage buckets
- [ ] Add RLS policies
- [ ] Add seed data only for development
- [ ] Verify server-side database access

Checkpoint:
- migrations apply cleanly
- no secrets in client bundle
- CRUD smoke test

## Milestone 3 — Public content

- [ ] Home
- [ ] About
- [ ] Services list/detail
- [ ] Equipment category/list/detail
- [ ] Projects list/detail
- [ ] Contact

Rules:
- Content comes from database.
- No business facts hardcoded in page components.
- No prices.

Checkpoint:
- test empty states
- test invalid slugs
- test mobile layout

## Milestone 4 — Admin

- [ ] Admin login
- [ ] Protected admin layout
- [ ] Dashboard
- [ ] Company settings
- [ ] Service CRUD
- [ ] Equipment category CRUD
- [ ] Equipment CRUD
- [ ] Project CRUD
- [ ] Lead management

Checkpoint:
- unauthorized user cannot access admin
- create/edit/delete flows work
- validation works

## Milestone 5 — Image management

- [ ] Upload cover image
- [ ] Upload gallery images
- [ ] Delete image
- [ ] Reorder gallery
- [ ] Generate/use meaningful alt text
- [ ] Image size/type validation

Checkpoint:
- upload from admin
- image appears publicly
- deletion does not leave broken references

## Milestone 6 — Contact leads

- [ ] Public consultation form
- [ ] Zod validation
- [ ] Persist lead
- [ ] Success/error states
- [ ] Basic spam/rate limiting
- [ ] Optional Resend notification

Checkpoint:
- submit valid form
- invalid phone rejected
- lead appears in admin
- email failure does not lose lead

## Milestone 7 — SEO + production

- [ ] Metadata for all public pages
- [ ] Dynamic metadata for services/equipment/projects
- [ ] sitemap.xml
- [ ] robots.txt
- [ ] canonical URLs
- [ ] Open Graph metadata
- [ ] Organization/LocalBusiness structured data where factual
- [ ] image alt text
- [ ] internal links
- [ ] 404 page
- [ ] production environment configuration

Checkpoint:
- production build succeeds
- Lighthouse/SEO smoke test
- Search Console can be configured
