# Session Handoff

## Verified Now

- What is currently working: full frontend — Home, Giới thiệu, Dịch vụ (list + 8 details), Xe & Thiết bị (list + 4 category details), Công trình (reference list), Liên hệ (form with client-side validation + success state). Real brand logo/colors from `asset/logo.jpg`, real content from `docs/Thong_Tin_Website_Eastern_SC.md` only.
- What verification actually ran: `pnpm run typecheck` (pass), `pnpm run build` (pass, 24 routes prerendered), manual Chrome QA of desktop-width rendering, contact form validation/success flow, and full-page text extraction on Home/Giới thiệu (confirms all copy/data renders correctly including Footer).

## Changed This Session

- Code or behavior added: complete rewrite of `data/site.ts` (verified-only content), full component restructure (`components/layout`, `components/sections`, `components/cards`, `components/ui`, `components/contact-form.tsx`), every `app/**/page.tsx` rewritten with per-route metadata, `app/not-found.tsx` added, brand logo assets cropped into `public/logo-light.png` / `public/logo-dark.png` / `app/icon.png` / `app/apple-icon.png`, `sitemap.ts`/`robots.ts` updated.
- Infrastructure or harness changes: added `typecheck` script to `web/package.json`; `pnpm install` run (node_modules now present, gitignored).
- Files modified: see `git status`/`git diff` — `web/` (app, components, data, public, config), plus `feature_list.json`, `progress.md`, this file.

## Broken Or Unverified

- Known defect: none found. `pnpm run lint` is still not defined (no ESLint config in the project) — not added this session since it needs new devDependencies.
- Unverified path: mobile/narrow-viewport rendering. The Chrome automation tool's `resize_window` reported success but `window.innerWidth` stayed at 1920 in every check (confirmed via JS) — genuinely could not capture a narrow-viewport screenshot this session. The responsive classes (`lg:` breakpoints, same pattern as the original v0 scaffold) are in place but not visually confirmed.
- Blockers for the next session: none for content; mobile-viewport check needs a working resize tool or a real device.

## Next Session

- Highest-priority unfinished feature: feat-001's mobile-viewport check, then feat-002 (Supabase) when ready to move `data/site.ts` content into a database per AGENTS.md.
- Why it is next: everything else (feat-003 exit criteria, feat-004 admin) depends on the DB layer; the mobile check is the last open item blocking feat-001.
- What counts as passing: real narrow-viewport (375–414px) screenshot showing header hamburger menu, mobile CTA bar, and no horizontal scroll on Home/Liên hệ.
- What must not change: do not invent business content not present in `docs/Thong_Tin_Website_Eastern_SC.md` or `asset/logo.jpg` — this was a hard constraint this session and several placeholder facts (fake FAQ, fake process steps, fake equipment models, fake project locations/dates) were deliberately removed rather than kept.
- Recommended Next Step: fix/replace the viewport-resize path in the browser tool (or test on a real phone/emulator), then start Milestone 2 (Drizzle schema + Supabase) and rewire `data/site.ts` reads to the DB.

## Commands

- Startup: `./init.sh`
- Verification: `cd web && pnpm run typecheck && pnpm run build`
- Focused debug command: `cd web && pnpm run dev`
