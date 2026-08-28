import type { MetadataRoute } from 'next'
import { equipmentCategories, services, siteUrl } from '@/data/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl },
    { url: `${siteUrl}/gioi-thieu` },
    { url: `${siteUrl}/dich-vu` },
    { url: `${siteUrl}/thiet-bi` },
    { url: `${siteUrl}/du-an` },
    { url: `${siteUrl}/lien-he` },
    ...services.map((s) => ({ url: `${siteUrl}/dich-vu/${s.slug}` })),
    ...equipmentCategories.map((c) => ({ url: `${siteUrl}/thiet-bi/${c.slug}` })),
  ]
}
