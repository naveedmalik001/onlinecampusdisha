import { NextResponse } from 'next/server'
import universities from '../../../data/universities.json'

const siteUrl = 'https://campusdisha.com'

export async function GET() {
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/trends',
    '/online-vs-traditional',
    '/ugc-regulation',
    '/universities',
    '/faq',
    '/terms',
    '/privacy',
  ]

  const universityPages = universities.map(uni => `/universities/${uni.slug}`)

  const allPages = [...staticPages, ...universityPages]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages.map(page => `
  <url>
    <loc>${siteUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : page.includes('/universities/') ? '0.8' : '0.7'}</priority>
  </url>`).join('')}
</urlset>`

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}