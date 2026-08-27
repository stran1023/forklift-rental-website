# Acceptance Criteria

## Public website

- [ ] Vietnamese UI and content
- [ ] Works on mobile, tablet, desktop
- [ ] Header/navigation is usable on small screens
- [ ] Phone CTA uses `tel:`
- [ ] Contact form is usable without JavaScript failure where practical
- [ ] No public rental prices
- [ ] No fake testimonials, customer logos, project claims, certifications, or statistics
- [ ] Equipment pages display images and essential information
- [ ] Project pages display images and descriptions
- [ ] Contact information is consistent across the site

## CMS

- [ ] Admin can log in
- [ ] Admin can update company information
- [ ] Admin can create/update/delete services
- [ ] Admin can create/update/delete equipment categories
- [ ] Admin can create/update/delete equipment
- [ ] Admin can upload equipment images
- [ ] Admin can create/update/delete projects
- [ ] Admin can upload project images
- [ ] Admin can view and update lead status

## Forms

- [ ] Required fields are validated
- [ ] Invalid input produces useful Vietnamese errors
- [ ] Lead is saved before email notification
- [ ] Spam protection exists
- [ ] Sensitive server errors are not shown to users

## SEO

- [ ] Unique title and description where content exists
- [ ] Sitemap
- [ ] Robots
- [ ] Canonical URLs
- [ ] Open Graph
- [ ] Semantic headings
- [ ] Crawlable public URLs
- [ ] Images have alt text

## Security

- [ ] Admin pages require authentication
- [ ] Server-side authorization exists
- [ ] Service role key never reaches client
- [ ] Uploads are restricted by file type and size
- [ ] Form input is validated server-side

## Maintainability

- [ ] Business content is not scattered through JSX
- [ ] Reusable components are used
- [ ] Database schema is documented
- [ ] Setup instructions are documented
- [ ] Environment variables are documented
- [ ] No unnecessary dependencies
