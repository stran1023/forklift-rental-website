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
