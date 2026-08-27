# Data Model

Use UUID primary keys and timestamps.

## company_settings

- id
- company_name
- short_description
- description
- phone
- email
- address
- working_hours
- zalo_url
- facebook_url
- map_url
- logo_path
- favicon_path
- created_at
- updated_at

There should normally be one active settings record.

## site_settings

- id
- site_title
- default_meta_description
- default_og_image_path
- google_analytics_id
- created_at
- updated_at

## services

- id
- name
- slug
- short_description
- description
- image_path
- seo_title
- seo_description
- is_published
- sort_order
- created_at
- updated_at

## equipment_categories

- id
- name
- slug
- description
- image_path
- seo_title
- seo_description
- is_published
- sort_order
- created_at
- updated_at

## equipment

- id
- category_id
- name
- slug
- description
- specifications (JSON)
- cover_image_path
- seo_title
- seo_description
- is_published
- is_featured
- sort_order
- created_at
- updated_at

Example specifications:

```json
{
  "Tải trọng": "5 tấn",
  "Chiều cao nâng": "4.5 m",
  "Nhiên liệu": "Dầu diesel"
}
```

Do not create pricing fields.

## equipment_images

- id
- equipment_id
- storage_path
- alt_text
- sort_order
- created_at

## projects

- id
- title
- slug
- location
- project_date
- description
- cover_image_path
- seo_title
- seo_description
- is_published
- is_featured
- sort_order
- created_at
- updated_at

## project_images

- id
- project_id
- storage_path
- alt_text
- sort_order
- created_at

## leads

- id
- name
- phone
- email
- service_id nullable
- location
- requirement
- status
- created_at
- updated_at

Lead status enum:
- NEW
- CONTACTED
- COMPLETED
- SPAM

## Indexes

Add indexes for:
- slug on public entities
- published status + sort order
- lead status + created_at
- project/equipment foreign keys

## Relationships

```text
equipment_categories 1 --- N equipment
equipment 1 --- N equipment_images

projects 1 --- N project_images

services 1 --- N leads
```
