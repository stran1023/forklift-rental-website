# Architecture

## High-level

```text
Browser
  |
  v
Next.js App Router
  |
  +--> Public pages
  |
  +--> Admin pages
  |
  +--> Server Actions / Route Handlers
             |
             +--> Supabase PostgreSQL
             |
             +--> Supabase Storage
             |
             +--> Resend (optional notification)
```

## Responsibilities

### Next.js
- rendering
- routing
- metadata
- server actions
- API route handlers
- form handling
- admin UI

### Supabase
- PostgreSQL database
- Storage for images
- Auth for admin users

### Drizzle
Use for typed database schema and queries where appropriate.

### Resend
Only for sending lead notification emails. The site must still work if email is temporarily unavailable; the lead should remain saved.

## Public rendering

Prefer Server Components.

Use Client Components only for:
- interactive forms
- galleries
- menus
- admin interactions
- browser-only functionality

## Security

- Browser may use only public Supabase configuration.
- Service-role credentials must remain server-side.
- Admin authorization must be checked server-side.
- Validate all form payloads with Zod.
- Add basic spam protection/rate limiting to public lead submission.
- Use Row Level Security where applicable.

## Storage

Recommended buckets:
- `site-assets`
- `equipment-images`
- `project-images`

Use stable storage paths and database records for metadata/order.

## Deployment

```text
Domain
  -> Cloudflare DNS
  -> Vercel
  -> Next.js
  -> Supabase
```

No VPS is required for the initial version.

## Future-safe decisions

Keep domain logic separated from UI so the company can later add:
- richer CMS
- CRM integration
- Zalo integration
- more detailed equipment specs
- additional service areas

Do not implement these now.
