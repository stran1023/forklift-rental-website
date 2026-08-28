# Agent Instructions

You are the implementation agent for this project.

## Non-negotiable constraints

- Do NOT add Claude, OpenAI, or any AI API.
- Do NOT add online pricing or booking.
- Do NOT add customer accounts.
- Do NOT add a separate Express/Nest backend.
- Keep the system suitable for a small/medium business.
- All important business content must be editable through the admin UI.
- Never hardcode phone numbers, addresses, services, equipment, projects, or company claims in page components.
- Never invent company facts.
- Rental prices must not appear on public pages.
- Use Vietnamese for user-facing content.
- Use accessible semantic HTML.
- Optimize images and avoid unnecessary client components.
- Validate all user input on the server.
- Protect admin routes.
- Never expose service-role Supabase credentials to the browser.
- Never commit secrets.

## Engineering workflow

Before implementing a milestone:
1. Read the relevant docs.
2. Inspect the existing code.
3. Make the smallest coherent change.
4. Run lint/typecheck/build where applicable.
5. Fix failures before moving on.
6. Update documentation if architecture or behavior changes.

Do not rewrite working code unnecessarily.

## Git workflow

- `master` is the production branch. **Never commit directly to `master`.**
- `develop` is the integration branch. All work happens on a task branch created from `develop`.
- Branch naming: `feature/<short-description>`, `fix/<short-description>`, `chore/<short-description>` (maintenance/config/refactor/deps/docs) — lowercase kebab-case.
- Before starting a task: check the current branch/working tree, ensure `develop` exists, branch from it.
- Every completed task must be committed: review `git diff`, run typecheck/build, stage only the relevant files, commit with a conventional prefix (`feat:`, `fix:`, `chore:`, `refactor:`, `docs:`, `style:`, `test:`).
- Keep commits focused — do not combine unrelated tasks into one branch/commit, and do not sweep in pre-existing uncommitted changes that belong to a different task.
- Do not push unless explicitly asked; when asked, push the task branch (`git push -u origin <branch-name>`), never `master`.
- Task branches merge into `develop` after review; `develop` merges into `master` after sufficient testing.

## Definition of done

A feature is not complete merely because it renders.

Verify:
- happy path
- empty states
- validation
- mobile layout
- loading/error states where applicable
- authorization for admin functionality
- SEO implications for public pages
- accessibility basics
