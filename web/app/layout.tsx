import { Analytics } from '@vercel/analytics/next'
import { Barlow_Condensed, Inter } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { seo, siteUrl } from '@/data/site'

const body = Inter({ subsets: ['latin', 'vietnamese'], variable: '--font-body' })
const heading = Barlow_Condensed({ subsets: ['latin', 'vietnamese'], variable: '--font-heading', weight: ['500', '600', '700', '800', '900'] })

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: seo.title, template: `%s | ${seo.title}` },
  description: seo.description,
  generator: 'v0.app',
  openGraph: { title: seo.title, description: seo.description, type: 'website', locale: 'vi_VN' },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#0d47a1', userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={`bg-background ${body.variable} ${heading.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
