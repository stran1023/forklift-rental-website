# Product Requirements

## Goal

Build a Vietnamese website for a small/medium forklift and crane rental company. The site is primarily a trust and lead-generation channel.

## Target users

- Factory managers
- Warehouse managers
- Contractors
- Construction companies
- Logistics companies
- Individuals/businesses needing lifting equipment

## Business model

The company provides rental and lifting-related services.

Public website must NOT show rental prices. Customers contact the company for consultation and quotation.

## Public sections

### Home
- Company overview
- Main services
- Featured equipment
- Reasons to choose the company
- Selected projects
- CTA to call
- CTA to request consultation
- Contact information

### About
- Company information
- Capabilities
- Experience
- Service coverage
- Trust/safety information supplied by the company

### Services
Each service has:
- name
- slug
- short description
- full description
- image
- SEO metadata
- display status/order

### Vehicles & Equipment
Equipment is organized by category/type.

Each item can contain:
- name
- category
- capacity
- flexible specifications
- description
- main image
- gallery
- status
- display order
- SEO metadata

### Projects
Each project can contain:
- title
- slug
- location
- date
- description
- cover image
- gallery
- status/order
- SEO metadata

### Contact
- phone
- email
- address
- map link/embed configuration
- working hours
- consultation form

### Global call button
On mobile, provide a persistent call CTA.

## Consultation form

Fields:
- full name — required
- phone — required
- email — optional
- service — optional
- location — optional
- requirement — required

On submission:
1. Validate input.
2. Store lead.
3. Send notification email if configured.
4. Show success state.
5. Never expose internal errors or credentials.

## Admin

Admin must support:
- authentication
- dashboard
- company settings
- service CRUD
- equipment category CRUD
- equipment CRUD
- equipment image upload
- project CRUD
- project image upload
- lead list/detail/status update
- basic site/SEO settings

## Content management principle

A non-developer should be able to update normal business content without changing source code.

## Out of scope

- online rental booking
- online payment
- public rental price calculator
- customer accounts
- vehicle tracking
- inventory scheduling
- complex CRM
- AI chatbot
- AI content generation
- multilingual support
- e-commerce
